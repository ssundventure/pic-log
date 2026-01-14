import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import localforage from "localforage";
import { SIDEBAR_WIDTH } from "../constants/layout";
import { Post } from "../types/Post";
import logoSky from "../assets/logo_sky.png";

function SideBar() {
  const location = useLocation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");
  const isHome = location.pathname === "/";
  const isWrite = location.pathname === "/write";

  useEffect(() => {
    const fetchPosts = async () => {
      const stored = await localforage.getItem<Post[]>("piclog_posts");
      if (stored && Array.isArray(stored)) {
        const sorted = [...stored].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPosts(sorted);
      } else {
        setPosts([]);
      }
    };
    fetchPosts();
  }, [isHome]);

  const filteredPosts = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter((post) => {
      const title = post.title?.toLowerCase() ?? "";
      const date = post.createdAt.split("T")[0];
      return title.includes(term) || date.includes(term);
    });
  }, [posts, query]);

  return (
    <Sidebar>
      <LogoLink to="/">
        <LogoMark src={logoSky} alt="Pic-Log logo" />
        <MainLogo>Pic-Log</MainLogo>
      </LogoLink>
      <MenuGroup>
        {isHome ? (
          <Menu $active aria-current="page">
            <MenuText>Home</MenuText>
          </Menu>
        ) : (
          <Link to="/">
            <Menu>
              <MenuText>Home</MenuText>
            </Menu>
          </Link>
        )}
        {isWrite ? (
          <Menu $active aria-current="page">
            <MenuText>Write</MenuText>
          </Menu>
        ) : (
          <Link to="/write">
            <Menu>
              <MenuText>Write</MenuText>
            </Menu>
          </Link>
        )}
      </MenuGroup>
      {isHome && (
        <PostSection>
          <SectionTitle>Posts</SectionTitle>
          <SearchField>
            <SearchIcon
              width="16px"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.85-5.65a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              ></path>
            </SearchIcon>
            <SearchInput
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title or date"
            />
          </SearchField>
          <PostList>
            {filteredPosts.length === 0 && (
              <EmptyText>
                {posts.length === 0
                  ? "아직 저장된 글이 없어요."
                  : "검색 결과가 없어요."}
              </EmptyText>
            )}
            {filteredPosts.map((post) => (
              <PostLink to={`/posts/${post.id}`} key={post.id}>
                <PostItem>
                  <PostTitle>{post.title}</PostTitle>
                  <PostDate>{post.createdAt.split("T")[0]}</PostDate>
                </PostItem>
              </PostLink>
            ))}
          </PostList>
        </PostSection>
      )}
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  gap: 1.8rem;
  padding: 2.5rem 1.2rem 2rem 1.2rem;
  background: #000;
  border-right: 1px solid #1f1d1b;
  box-shadow: none;
  border-radius: 0;
`;

const LogoMark = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const MainLogo = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f6d89e;
  letter-spacing: 0.01em;
  gap: 0.5rem;
  user-select: none;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  margin-bottom: 2.2rem;
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const Menu = styled.div<{ $active?: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  color: ${({ $active }) => ($active ? "#f6d89e" : "#5e5d5d")};
  font-size: 1.08rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  background: ${({ $active }) => ($active ? "#14120f" : "none")};
  transition: background 0.15s, color 0.15s;
  ${({ $active }) => ($active ? "cursor: default;" : "")}
  svg {
    flex-shrink: 0;
    color: #f6d89e;
    background: none;
    border-radius: 0;
    padding: 0;
    margin-right: 0.1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  &:hover {
    background: #1f1d1b;
    color: #f6d89e;
    a {
      color: #f6d89e;
      text-decoration: none;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12%;
    bottom: 12%;
    width: 3px;
    border-radius: 2px;
    background: ${({ $active }) => ($active ? "#f6d89e" : "transparent")};
  }
`;

const MenuText = styled.span``;

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  flex: 1;
  min-height: 0;
`;

const SectionTitle = styled.div`
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5e5d5d;
  padding: 0 0.2rem;
`;

const SearchField = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8a857f;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.6rem;
  border: 1px solid #1f1d1b;
  padding: 0.6rem 0.7rem 0.6rem 2.1rem;
  background: #0d0c0b;
  color: #f6d89e;
  font-size: 0.9rem;
  outline: none;
  &:focus {
    border-color: #f6d89e;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  overflow-y: auto;
  padding: 0.2rem;
  flex: 1;
  min-height: 0;

  /* 스크롤바 스타일 (Chrome/Safari) */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #2a2724;
    border-radius: 999px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #2a2724 transparent;
`;

const PostLink = styled(Link)`
  text-decoration: none;
`;

const PostItem = styled.div`
  display: flex;
  margin-right: 1.2rem;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.65rem 0.7rem;
  border-radius: 0.6rem;
  background: #111;
  border: 1px solid transparent;
  transition: border 0.15s, background 0.15s;
  &:hover {
    background: #1f1d1b;
    border-color: #2a2724;
  }
`;

const PostTitle = styled.div`
  color: #f6d89e;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.3;
`;

const PostDate = styled.div`
  color: #8a857f;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
`;

const EmptyText = styled.div`
  color: #5e5d5d;
  font-size: 0.85rem;
  padding: 0.4rem 0.2rem;
`;

export default SideBar;
