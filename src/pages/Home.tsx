import { useEffect, useState } from "react";
import styled from "styled-components";
import FilmColumn from "../components/FilmColumn";
import localforage from "localforage";

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
  createdAt: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const stored = await localforage.getItem<Post[]>("piclog_posts");
      if (stored && Array.isArray(stored)) {
        // ✅ createdAt 기준 최신순 정렬
        const sorted = [...stored].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPosts(sorted);
      }
    };
    fetchPosts();
  }, []);

  const photos = posts.map((post) => post.image);
  const leftPhotos = photos.filter((_, i) => i % 2 === 0);
  const rightPhotos = photos.filter((_, i) => i % 2 !== 0);

  return (
    <FilmContainer>
      <FilmColumn align="left" photos={leftPhotos} />
      <FilmColumn align="right" photos={rightPhotos} />
    </FilmContainer>
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
