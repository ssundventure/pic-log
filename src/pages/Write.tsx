import { useRef, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { toast } from "sonner";
import localforage from "localforage";

type TextStyleType = "plain" | "subtitle" | "speech";

function Write() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [overlayText, setOverlayText] = useState("");
  const [textStyle, setTextStyle] = useState<TextStyleType>("plain");
  const [description, setDescription] = useState("");
  const photoCardRef = useRef<HTMLDivElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const validateInputs = () => {
    if (!title.trim()) {
      toast.error("제목을 입력해주세요.");
      return false;
    }
    if (!image) {
      toast.error("이미지를 업로드해주세요.");
      return false;
    }
    return true;
  };

  const captureImage = async () => {
    if (!photoCardRef.current) return null;
    const canvas = await html2canvas(photoCardRef.current, {
      useCORS: true,
      backgroundColor: null,
      scale: 0.8,
    });

    const dataUrl = canvas.toDataURL("image/png");
    setCapturedImage(dataUrl);
    return dataUrl;
  };

  const saveToIndexedDB = async (imageUrl: string | null) => {
    if (!imageUrl) throw new Error("imageUrl이 비어 있습니다."); // ✅ 안전장치

    const existing = (await localforage.getItem("piclog_posts")) || "[]";

    const newPost = {
      id: Date.now(),
      title: title,
      image: imageUrl,
      description: description,
      createdAt: new Date().toISOString(),
    };
    const updated = Array.isArray(existing)
      ? [...existing, newPost]
      : [newPost];
    await localforage.setItem("piclog_posts", updated);
  };

  const resetForm = () => {
    setTitle("");
    setImage(null);
    setOverlayText("");
    setTextStyle("plain");
    setDescription("");
    setCapturedImage(null);
  };

  const handleSubmit = async () => {
    if (isSaving) return;
    if (!validateInputs()) return;
    if (!photoCardRef.current) return;

    setIsSaving(true);

    try {
      const imageDataUrl = await captureImage();
      if (!imageDataUrl) {
        console.error("이미지 캡쳐에 실패했습니다.");
        return;
      }
      try {
        await saveToIndexedDB(imageDataUrl);
        toast.success("저장되었습니다.");
        resetForm();
      } catch (error) {
        console.error("로컬스토리지 저장 중 오류:", error);
        toast.error("저장에 실패하였습니다.");
      }
    } catch (error) {
      console.error("이미지 캡쳐 중 오류 발생:", error);
      toast.error("이미지 저장에 실패하였습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <MainContainer>
      <div>
        <PhotoCard
          image={image}
          setImage={setImage}
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
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <Label htmlFor="overlayText">OverlayText</Label>
          <Input
            type="text"
            value={overlayText}
            onChange={(e) => setOverlayText(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextArea>
        </div>
        <SaveBtn type="submit" onClick={handleSubmit} disabled={isSaving}>
          {isSaving ? "저장 중" : "저장"}
        </SaveBtn>
      </WriteContainer>
    </MainContainer>
  );
}

/* ---------------- Styled Components ---------------- */

const MainContainer = styled.div`
  display: flex;
`;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #f6d89e;
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

const SaveBtn = styled.button<{ disabled?: boolean }>`
  background-color: #f6d89e;
  padding: 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    filter: brightness(1.1);
  }

  transition: all 0.12s ease-in;
`;

export default Write;
