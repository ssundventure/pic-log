import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface FilmFrameProps {
  img: string;
  id: number;
}

function FilmFrame({ img, id }: FilmFrameProps) {
  const navigate = useNavigate();

  const handleClickPost = (postId: number) => {
    navigate(`/posts/${postId}`);
  };
  return (
    <Frame onClick={() => handleClickPost(id)}>
      <FilmImage src={img} />
      <FilmText>
        <div>► PICLOG • FRAME 00</div>
        <div>► 00</div>
      </FilmText>
      <Date>2025/11/15</Date>
    </Frame>
  );
}

/* ---------------- Styled Components ---------------- */

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

  &:hover img {
    transform: scale(1.04);
    filter: brightness(1.1);
    cursor: pointer;
  }

  transition: all 0.12s ease-in;
`;

const FilmImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: all 0.12s ease-in;
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

const Date = styled.span`
  position: absolute;
  left: 8px;
  top: 24%;
  transform: translateY(-50%) rotate(270deg);
  transform-origin: left center;
  font-size: 0.7rem;
  color: #f6d89e;
  font-family: "OCR-A", monospace;
  letter-spacing: 1px;
  opacity: 0.9;
`;

export default FilmFrame;
