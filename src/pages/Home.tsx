import { useEffect, useState } from "react";
import styled from "styled-components";

function Home() {
  const [latestImg, setLatestImg] = useState<string | null>(null);

  useEffect(() => {
    const newImg = localStorage.getItem("latestImage");
    if (newImg) setLatestImg(newImg);
  }, []);

  const photos = [
    latestImg,
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  ].filter(Boolean) as string[];

  return (
    <FilmContainer>
      <FilmColumn left>
        {photos
          .filter((_, i) => i % 2 === 0)
          .map((img, i) => (
            <FilmFrame key={i}>
              <FilmImage src={img} />
              <FilmText> PIC-LOG 2025 F01 </FilmText>
            </FilmFrame>
          ))}
      </FilmColumn>

      <FilmColumn right>
        {photos
          .filter((_, i) => i % 2 !== 0)
          .map((img, i) => (
            <FilmFrame key={i}>
              <FilmImage src={img} />
              <FilmText> PIC-LOG 2025 F01 </FilmText>
            </FilmFrame>
          ))}
      </FilmColumn>
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

const FilmColumn = styled.div<{ left?: boolean; right?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* 엇갈리게 배치 (왼쪽/오른쪽 열) */
  ${({ left }) => left && `margin-top: 0;`}
  ${({ right }) => right && `margin-top: 16rem;`}
`;

const FilmFrame = styled.div`
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