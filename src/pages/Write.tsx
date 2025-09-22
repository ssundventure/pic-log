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
`;

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  width: 100%;
  height: 7rem;
  border-radius: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

function Write() {
  const [title, setTitle] = useState("");
  const [overlayText, setOverlayText] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleOverlayTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOverlayText(e.target.value);
  };

  return (
    <MainContainer>
      <div>
        <PhotoCard overlayText={overlayText} />
        <p>사진을 업로드하고 글을 작성해보세요!</p>
      </div>

      <WriteContainer>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <Label htmlFor="overlayText">OverlayText</Label>
          <Input
            type="text"
            value={overlayText}
            onChange={handleOverlayTextChange}
            placeholder="사진에 쓸 텍스트를 입력하세요."
          />
        </div>
        <div>
          <Label>Description</Label>
          <TextArea
            placeholder="여기에 글을 작성하세요..."
            rows={10}
            cols={50}
          ></TextArea>
        </div>
        <button type="submit">저장</button>
      </WriteContainer>
    </MainContainer>
  );
}

export default Write;
