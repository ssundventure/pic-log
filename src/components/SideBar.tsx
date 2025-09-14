import { Link } from "react-router-dom";
import styled from "styled-components";
import { SIDEBAR_WIDTH } from "../constants/layout";

const Sidebar = styled.nav`
  position: fixed;
  width: ${SIDEBAR_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 1.5rem;
  padding: 3rem 1rem;
  border-right: 1px solid #ccc;
`;

const SidebarItem = styled.span`
  display: inline-block;
  color: darkgreen;
  font-size: 1.25rem;
  padding: 0.7rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
  }
`;

const MainLogo = styled.span`
  display: inline-block;
  font-size: 1.75rem;
  margin-bottom: 3rem;
`;

function SideBar() {
  return (
    <Sidebar>
      <MainLogo>📸PicLog</MainLogo>
      <SidebarItem>
        <Link to="/">Home</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/write">Write</Link>
      </SidebarItem>
    </Sidebar>
  );
}

export default SideBar;
