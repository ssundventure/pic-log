import styled from "styled-components";
import { useLocation } from "react-router-dom";

function MainHeader() {
  const { pathname } = useLocation();

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
          <SortSelect>Newest ▾</SortSelect>

          <FilterGroup>
            <FilterTag $active>All</FilterTag>
            <FilterTag>Trip</FilterTag>
            <FilterTag>Daily</FilterTag>
            <FilterTag>Food</FilterTag>
          </FilterGroup>
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

const SortSelect = styled.button`
  border: 1px solid #3b342a;
  background: #181512;
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.8rem;
  color: #f6f2e9;
  cursor: pointer;

  &:hover {
    border-color: #f6d89e;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const FilterTag = styled.button<{ $active?: boolean }>`
  border-radius: 999px;
  padding: 0.28rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;
  border: 1px solid ${({ $active }) => ($active ? "#f6d89e" : "#2d2822")};
  background: ${({ $active }) => ($active ? "#201a12" : "transparent")};
  color: ${({ $active }) => ($active ? "#f6d89e" : "#b4aa9c")};

  &:hover {
    border-color: #f6d89e;
  }
`;

export default MainHeader;
