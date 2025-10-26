import { useEffect, useState } from "react";
import styled from "styled-components";
import FilmColumn from "../components/FilmColumn";

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
