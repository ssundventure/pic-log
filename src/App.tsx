import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import styled from "styled-components";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "./constants/layout";


const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  margin-top: ${HEADER_HEIGHT};
  margin-left: ${SIDEBAR_WIDTH};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Header.Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/write" element={<Write />} />
            </Routes>
          </MainContent>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
