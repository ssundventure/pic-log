import { useState } from "react";
import styled from "styled-components";

const ImageDropArea = styled.div<{ $bg?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 375px;
  height: 574px;
  margin-right: 3rem;
  border-radius: 25px;
  padding: 10rem 0;
  background-color: #ccc;

  ${({ $bg }) =>
    $bg &&
    `
    background-image: url(${$bg});
    background-size:cover;
    background-position:center;
    color: transparent;
    `}
`;

const Overlay = styled.textarea`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  min-height: 72px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #e6e2da;
  background: rgba(255,255,255,.55);
  line-height: 1.4;
  resize: none;
  outline: none;
  z-index: 2; /* 인풋보다 위로 */
  @supports (backdrop-filter: blur(6px)) { backdrop-filter: blur(6px); }
`;

const Input = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  opacity: 0;
  font-size: 0rem;
  cursor: pointer;
`;

function PhotoCard() {
  const [image, setImage] = useState<string>("");
  const [text, setText] = useState<string>("");

  const readImageFile = (file: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    readImageFile(file);

    e.currentTarget.value = ""; // 같은 파일 재선택 가능
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    readImageFile(file);
  };
  return (
    <>
      <ImageDropArea
        $bg={image || undefined}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <svg
          width="8rem"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          ></path>
        </svg>
        <p>
          파일을 선택하거나 <br />
          여기로 끌어다놓으세요. <br />
          (클릭 업로드 / Drag & Drop){" "}
        </p>
        {image && (
          <Overlay value={text} onChange={(e)=> setText(e.target.value)} placeholder="여기에 글을 적어봐요." />
        )}
        <Input type="file" onChange={handleFileChange} accept="image/*" />
      </ImageDropArea>
    </>
  );
}

export default PhotoCard;
