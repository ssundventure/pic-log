import styled from "styled-components";
import FilmFrame from "./FilmFrame";
import { Post } from "../types/Post";

interface FilmColumnProps {
  posts: Post[];
  align: "left" | "right";
}

function FilmColumn({ posts, align }: FilmColumnProps) {
  return (
    <Column left={align === "left"} right={align === "right"}>
      {posts.map((post, i) => (
        <FilmFrame key={i} id={post.id} img={post.image} />
      ))}
    </Column>
  );
}

/* ---------------- Styled Components ---------------- */
const Column = styled.div<{ left?: boolean; right?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* 엇갈리게 배치 (왼쪽/오른쪽 열) */
  ${({ left }) => left && `margin-top: 0;`}
  ${({ right }) => right && `margin-top: 16rem;`}
`;

export default FilmColumn;
