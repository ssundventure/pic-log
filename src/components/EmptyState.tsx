import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function EmptyState() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/write");
  return (
    <Wrapper>
      <Text>
        아직 기록된 순간이 없어요.
        <br /> 첫 사진으로 PicLog를 시작해보세요.
      </Text>
      <Button onClick={handleClick}>첫 장면 기록하기</Button>
      <SubText>사진 한 장이면 충분해요.</SubText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  min-height: 500px;
  margin: auto;
  text-align: center;
`;

const Text = styled.div`
  color: white;
  font-size: 24px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  position: relative;
  margin-top: 24px;
  padding: 14px 28px;
  border-radius: 999px;
  border: 1px solid rgba(255, 236, 210, 0.6);
  background: linear-gradient(180deg, #f9ead6 0%, #e7cfb1 100%);
  color: #3a2d22;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.3px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.7);
    filter: saturate(1.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`;

const SubText = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
`;

export default EmptyState;
