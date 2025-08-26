import { Link } from "react-router-dom";
import styled from "styled-components";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../constants/layout";


const MainHeader = styled.header`
  position: fixed;
  min-width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-bottom: 1px solid #ccc;
`;

const MainLogo = styled.span`
  display: inline-block;
  font-size: 1.75rem; 
`;

const Sidebar = styled.nav`
  width: ${SIDEBAR_WIDTH};
  display: flex;
  flex-direction: column;
  top: ${HEADER_HEIGHT};
  min-height: calc(100vh - ${HEADER_HEIGHT});
  position: fixed;
  gap: 1.5rem;
  padding: 3rem 1rem;
  border-right: 1px solid #ccc;
`;

const SidebarItem = styled.span`
  display: inline-block;
  color: darkblue;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
  }
`;

function Header() {
  return (
    <MainHeader>
      <MainLogo>📸PicLog</MainLogo>
    </MainHeader>
  );
}

Header.Sidebar = function HeaderSidebar() {
  return (
    <Sidebar>
      <SidebarItem>
        <Link to="/">Home</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/write">Write</Link>
      </SidebarItem>
    </Sidebar>
  );
};

export default Header;
