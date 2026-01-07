import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { SIDEBAR_WIDTH } from "../constants/layout";
import logoSky from "../assets/logo_sky.png";

function SideBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isWrite = location.pathname === "/write";

  return (
    <Sidebar>
      <LogoLink to="/">
        <LogoMark src={logoSky} alt="Pic-Log logo" />
        <LogoText>Pic-Log</LogoText>
      </LogoLink>
      <MenuGroup>
        {isHome ? (
          <Menu $active aria-current="page">
            <Text>Home</Text>
          </Menu>
        ) : (
          <Link to="/">
            <Menu>
              <Text>Home</Text>
            </Menu>
          </Link>
        )}
        {isWrite ? (
          <Menu $active aria-current="page">
            <Text>Write</Text>
          </Menu>
        ) : (
          <Link to="/write">
            <Menu>
              <Text>Write</Text>
            </Menu>
          </Link>
        )}
      </MenuGroup>
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
  gap: 1.8rem;
  padding: 2.5rem 1.2rem 2rem 1.2rem;
  background: #000;
  border-right: 1px solid #1f1d1b;
  box-shadow: none;
  border-radius: 0;
`;

const LogoMark = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const LogoText = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f6d89e;
  letter-spacing: 0.01em;
  gap: 0.5rem;
  user-select: none;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  margin-bottom: 2.2rem;
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const Menu = styled.div<{ $active?: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  color: ${({ $active }) => ($active ? "#f6d89e" : "#5e5d5d")};
  font-size: 1.08rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  background: ${({ $active }) => ($active ? "#14120f" : "none")};
  transition: background 0.15s, color 0.15s;
  ${({ $active }) => ($active ? "cursor: default;" : "")}
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
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12%;
    bottom: 12%;
    width: 3px;
    border-radius: 2px;
    background: ${({ $active }) => ($active ? "#f6d89e" : "transparent")};
  }
`;

const Text = styled.span``;

export default SideBar;
