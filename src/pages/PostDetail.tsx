import styled from "styled-components";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  return <Text>post detail page - id: {id}</Text>;
}

const Text = styled.div`
  color: white;
`;

export default PostDetail;
