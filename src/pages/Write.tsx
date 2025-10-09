import { useRef, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import html2canvas from "html2canvas";

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

type TextStyleType = "plain" | "subtitle" | "speech";

function Write() {
  const [title, setTitle] = useState("");
  const [overlayText, setOverlayText] = useState("");
  const [textStyle, setTextStyle] = useState<TextStyleType>("plain");
  const photoCardRef = useRef<HTMLDivElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleOverlayTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOverlayText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!photoCardRef.current) return;

    const canvas = await html2canvas(photoCardRef.current, {
      useCORS: true,
      backgroundColor: null,
    });

    const dataUrl = canvas.toDataURL("image/png");
    setCapturedImage(dataUrl);
    console.log(dataUrl);
  };

  return (
    <MainContainer>
      <div>
        <PhotoCard
          overlayText={overlayText}
          textStyle={textStyle}
          ref={photoCardRef}
        />
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
          <Label htmlFor="">Select Style</Label>
          <fieldset>
            <div>
              <input
                type="radio"
                name="textStyle"
                value="plain"
                checked={textStyle === "plain"}
                onChange={(e) => setTextStyle(e.target.value as TextStyleType)}
              />
              <label htmlFor="plain">기본</label>
            </div>
            <div>
              <input
                type="radio"
                name="textStyle"
                value="subtitle"
                checked={textStyle === "subtitle"}
                onChange={(e) => setTextStyle(e.target.value as TextStyleType)}
              />
              <label htmlFor="subtitle">자막</label>
            </div>
            <div>
              <input
                type="radio"
                name="textStyle"
                value="speech"
                checked={textStyle === "speech"}
                onChange={(e) => setTextStyle(e.target.value as TextStyleType)}
              />
              <label htmlFor="speech">말풍선</label>
            </div>
          </fieldset>
        </div>
        <div>
          <Label>Description</Label>
          <TextArea
            placeholder="여기에 글을 작성하세요..."
            rows={10}
            cols={50}
          ></TextArea>
        </div>
        <button type="submit" onClick={handleSubmit}>
          저장
        </button>
      </WriteContainer>
      {capturedImage && (
        <div>
          <h3>📸 캡처된 이미지 미리보기</h3>
          <img
            src={capturedImage}
            alt="캡처 결과"
            style={{ maxWidth: "100%", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </MainContainer>
  );
}

export default Write;
