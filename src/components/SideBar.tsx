import { Link } from "react-router-dom";
import styled from "styled-components";
import { SIDEBAR_WIDTH } from "../constants/layout";

function SideBar() {
  return (
    <Sidebar>
      <Link to="/">
        <MainLogo>📸 PicLog</MainLogo>
      </Link>
      <Link to="/">
        <Menu>
          <Icon
            width="24px"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            ></path>
          </Icon>
          <Text>Home</Text>
        </Menu>
      </Link>
      <Link to="/write">
        <Menu>
          <Icon
            width="24px"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </Icon>
          <Text>Write</Text>
        </Menu>
      </Link>
      <List>
        <Text></Text>
      </List>
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  position: fixed;
  width: ${SIDEBAR_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  gap: 2.5rem;
  padding: 2.5rem 1.2rem 2rem 1.2rem;
  background: #000;
  border-right: 1px solid #1f1d1b;
  box-shadow: none;
  border-radius: 0;
`;

const MainLogo = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f6d89e;
  margin-bottom: 2.2rem;
  letter-spacing: 0.01em;
  gap: 0.5rem;
  user-select: none;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  color: #5e5d5d;
  font-size: 1.08rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  background: none;
  transition: background 0.15s, color 0.15s;
  svg {
    flex-shrink: 0;
    color: #f6d89e;
    background: none;
    border-radius: 0;
    padding: 0;
    margin-right: 0.1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  &:hover {
    background: #1f1d1b;
    color: #f6d89e;
    a {
      color: #f6d89e;
      text-decoration: none;
    }
  }
`;

const Icon = styled.svg``;

const Text = styled.span``;

const List = styled.div``;

export default SideBar;
