import styled from "styled-components";
import { useParams } from "react-router-dom";
import { SIDEBAR_WIDTH } from "../constants/layout";
import { useEffect, useState } from "react";
import localforage from "localforage";
import { Post } from "../types/Post";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function load() {
      const allPosts = await localforage.getItem<Post[]>(`piclog_posts`);
      const data = allPosts?.find((p) => p.id === Number(id));
      if (data) {
        setPost(data);
      }
    }
    load();
  }, [id]);

  return (
    <MainContainer>
      <Frame>
        <Photo src={post?.image} alt="post이미지" />
        <FilmText>
          <div>► PICLOG • FRAME 00</div>
          <div>► 00</div>
        </FilmText>
      </Frame>
      <DetailContainer>
        <InfoLabel>Title</InfoLabel>
        <Info>{post?.title}</Info>
        <InfoLabel>Date</InfoLabel>
        <Info>{post?.createdAt.split("T")[0]}</Info>
        <InfoLabel>Description </InfoLabel>
        <Info>{post?.description}</Info>
      </DetailContainer>
    </MainContainer>
  );
}

/* ---------------- Styled Components ---------------- */

const MainContainer = styled.div`
  display: flex;
  margin-left: ${SIDEBAR_WIDTH};
  width: auto;
`;

const Frame = styled.div`
  position: relative;
  background-color: #111;
  padding: 12px 12px 12px 12px;

  border: 8px solid #111;
  border-radius: 0;

  width: 375px;
  height: 574px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.7);
  overflow: hidden;

  margin-right: 3rem;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

const FilmText = styled.div`
  position: absolute;
  width: 100%;
  right: 8px;
  top: 32%;
  transform: translateY(-50%) rotate(270deg);
  transform-origin: right center;
  display: flex;
  justify-content: space-around;
  font-size: 0.7rem;
  color: #f6d89e;
  font-family: "OCR-A", monospace;
  letter-spacing: 1px;
  opacity: 0.9;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #f6d89e;
`;

const InfoLabel = styled.div`
  color: #f6d89e;
  //padding-bottom: 10px;
`;

const Info = styled.div`
  color: white;
`;

export default PostDetail;
