import { useEffect, useState } from "react";
import styled from "styled-components";
import FilmColumn from "../components/FilmColumn";
import localforage from "localforage";
import { Post } from "../types/Post";
import EmptyState from "../components/EmptyState";
import { SortType } from "../types/SortType";

type HomeProps = {
  sortType: SortType;
};

function Home({ sortType }: HomeProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const stored = await localforage.getItem<Post[]>("piclog_posts");

      if (stored && Array.isArray(stored)) {
        setPosts(stored);
      }
    };
    fetchPosts();
  }, []);

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    if (sortType === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  const leftPosts = sortedPosts.filter((_, i) => i % 2 === 0);
  const rightPosts = sortedPosts.filter((_, i) => i % 2 !== 0);

  return (
    <>
      {posts.length === 0 && <EmptyState />}
      {posts.length > 0 && (
        <FilmContainer>
          <FilmColumn align="left" posts={leftPosts} />
          <FilmColumn align="right" posts={rightPosts} />
        </FilmContainer>
      )}
    </>
  );
}

export default Home;

/* ---------------- Styled Components ---------------- */

const FilmContainer = styled.div`
  background-color: #1f1d1b;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0;
  overflow-y: auto;
  min-height: 100vh;
`;
