import { useEffect, useState } from "react";

function Home() {
  const [latestImg, setlatestImg] = useState<string | null>(null);

  useEffect(() => {
    const newImg = localStorage.getItem("latestImage");
    console.log(newImg)
    if (newImg) {
      setlatestImg(newImg);
    }
  }, []);

  return (
    <>
      {latestImg ? (
        <img src={latestImg} alt="" />
      ) : (
        <div>
          <p># PicLog </p>
          <p>Capture. Write. Remember. </p>
          <p>나의 하루를 사진과 글로 기록한다.</p>
          <p>사진 위에 글을 쓰고, 추억을 저장하세요.</p>
        </div>
      )}
    </>
  );
}

export default Home;
