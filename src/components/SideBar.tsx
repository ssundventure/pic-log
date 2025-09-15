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
  opacity: 100;
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
        <svg
          width="24px"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
        <Link to="/">Home</Link>
      </SidebarItem>
      <SidebarItem>
        <svg
          width="24px"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          ></path>
        </svg>
        <Link to="/write">Write</Link>
      </SidebarItem>
    </Sidebar>
  );
}

export default SideBar;
