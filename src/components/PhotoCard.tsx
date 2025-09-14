import { useState } from "react";
import styled from "styled-components";

const ImageDropArea = styled.div<{ $bg?: string }>`
  position: relative;
  display: flex;
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
    console.log(file);
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
        파일을 선택하거나 <br /> 여기로 끌어다놓으세요.
        <Input type="file" onChange={handleFileChange} accept="image/*" />
      </ImageDropArea>
    </>
  );
}

export default PhotoCard;
