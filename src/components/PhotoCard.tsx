import { useState } from "react";
import styled from "styled-components";

const ImageDropArea = styled.div`
  border-radius: 25px;
  padding: 10rem 0;
  background-color: #ccc;
  text-align: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 0rem;
`;

function PhotoCard() {
  const [image, setImage] = useState<string>("");
  const [text, setText] = useState<string>("");
  return (
    <>
      <ImageDropArea
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          console.log(e + "onDragOver");
        }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          console.log(e + "onDrop");
        }}
      >
        파일을 선택하거나 <br /> 여기로 끌어다놓으세요.
        <Input type="file" accept="image/*" />
      </ImageDropArea>
      <img src={image} alt="Uploaded" />

      <button>Upload</button>
    </>
  );
}

export default PhotoCard;
