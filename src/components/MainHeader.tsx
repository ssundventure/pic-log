import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function MainHeader() {
  const { pathname } = useLocation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const isHome = pathname === "/home" || pathname === "/";
  const isDetail = pathname.includes("/posts");
  const isWrite = pathname === "/write";

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderLabel>Capture. Write. Relive.</HeaderLabel>
        <HeaderTitle>
          PicLog {isHome && "TimeLine"}
          {isWrite && "Write"}
          {isDetail && "Detail"}
        </HeaderTitle>
      </HeaderLeft>
      {isHome && (
        <HeaderRight>
          <SortGroup>
            <SortTag $active>Newest</SortTag>
            <SortTag>Oldest</SortTag>
          </SortGroup>
          <UserMenu>
            <UserButton
              type="button"
              aria-label="User menu"
              aria-haspopup="menu"
              aria-expanded={isUserMenuOpen}
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
            >
              <UserIcon
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </UserIcon>
            </UserButton>
            {isUserMenuOpen && (
              <UserMenuPanel role="menu">
                <UserMenuTitle>Account</UserMenuTitle>
                <UserMenuItem>
                  <UserMenuLabel>ID</UserMenuLabel>
                  <UserMenuValue>piclog_021</UserMenuValue>
                </UserMenuItem>
                <UserMenuItem>
                  <UserMenuLabel>Name</UserMenuLabel>
                  <UserMenuValue>Sun</UserMenuValue>
                </UserMenuItem>
                <UserMenuItem>
                  <UserMenuLabel>Email</UserMenuLabel>
                  <UserMenuValue>sun@piclog.dev</UserMenuValue>
                </UserMenuItem>
                <UserMenuItem>
                  <UserMenuLabel>Settings</UserMenuLabel>
                  <UserMenuValue>Profile & Preferences</UserMenuValue>
                </UserMenuItem>
              </UserMenuPanel>
            )}
          </UserMenu>
        </HeaderRight>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 960px;
  margin: 2rem auto 2.5rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const HeaderLabel = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 248, 214, 0.6); // 로고랑 비슷한 톤
`;

const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  color: #f6f2e9;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SortGroup = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const SortTag = styled.button<{ $active?: boolean }>`
  border-radius: 999px;
  padding: 0.28rem 0.7rem;
  cursor: pointer;
  border: 1px solid ${({ $active }) => ($active ? "#f6d89e" : "#2d2822")};
  background: ${({ $active }) => ($active ? "#201a12" : "transparent")};
  color: ${({ $active }) => ($active ? "#f6d89e" : "#b4aa9c")};

  &:hover {
    border-color: #f6d89e;
  }
`;

const UserMenu = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  border: 1px solid #3b342a;
  background: #0f0d0b;
  border-radius: 999px;
  width: 2.2rem;
  height: 2.2rem;
  display: grid;
  place-items: center;
  color: #f6f2e9;

  &:hover {
    border-color: #f6d89e;
    color: #f6d89e;
  }
`;

const UserIcon = styled.svg``;

const UserMenuPanel = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.6rem);
  min-width: 200px;
  background: #0f0d0b;
  border: 1px solid #2d2822;
  border-radius: 0.9rem;
  padding: 0.8rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  z-index: 10;
`;

const UserMenuTitle = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 248, 214, 0.55);
`;

const UserMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const UserMenuLabel = styled.span`
  font-size: 0.7rem;
  color: #8a857f;
`;

const UserMenuValue = styled.span`
  font-size: 0.85rem;
  color: #f6f2e9;
`;

export default MainHeader;
