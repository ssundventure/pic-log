import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.header`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #d5e5f3;
`;

const MenuItem = styled.span`
  display: inline-block;
  color: darkblue;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
  }
`;
function Header() {
  return (
    <Menu>
      <MenuItem>
        <Link to="/">📸PicLog</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/write">✍️Write</Link>
      </MenuItem>
    </Menu>
  );
}

export default Header;
