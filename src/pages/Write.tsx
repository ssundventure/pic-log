import { useState } from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  s
`;

function Write() {
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <MainContainer>
      <div>
        <PhotoCard />
        <p>사진을 업로드하고 글을 작성해보세요!</p>
      </div>

      <WriteContainer>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="제목을 입력하세요"
          />
        </div>
        <textarea
          placeholder="여기에 글을 작성하세요..."
          rows={10}
          cols={50}
        ></textarea>
        <button type="submit">저장</button>
      </WriteContainer>
    </MainContainer>
  );
}

export default Write;
