import PhotoCard from "../components/PhotoCard";

function Write() {
  return (
    <>
      <h1>write page</h1>
      <PhotoCard />
      <p>사진을 업로드하고 글을 작성해보세요!</p>
      <textarea placeholder="여기에 글을 작성하세요..." rows={10} cols={50}></textarea>
      <button type="submit">저장</button>
    </>
  );
}

export default Write;
