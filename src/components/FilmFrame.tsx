import styled from "styled-components";

interface FilmFrameProps {
  img: string;
}

function FilmFrame({ img }: FilmFrameProps) {
  return (
    <Frame>
      <FilmImage src={img} />
      <FilmText> PIC-LOG 2025 F01 </FilmText>
    </Frame>
  );
}

/* ---------------- Styled Components ---------------- */

const Frame = styled.div`
  position: relative;
  background-color: #111;
  padding: 12px;
  border: 8px solid #111;
  border-radius: 6px;
  width: 540px;
  height: 720px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.7);
  overflow: hidden;

  &:hover img {
    transform: scale(1.04);
    filter: brightness(1.1);
  }

  transition: all 0.12s ease-in;
`;

const FilmImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.12s ease-in;
`;

const FilmText = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  transform-origin: right center;
  font-size: 0.7rem;
  color: #f6d89e;
  font-family: "Courier New", monospace;
  letter-spacing: 1px;
  opacity: 0.9;
`;

export default FilmFrame;
