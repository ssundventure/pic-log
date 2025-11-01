import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import styled from "styled-components";
import { SIDEBAR_WIDTH } from "./constants/layout";
import SideBar from "./components/SideBar";
import { Toaster } from "sonner";
import localforage from "localforage";

localforage.config({
  name: "PicLog",
  storeName: "piclog_posts",
});

const MainContent = styled.div`
  padding: 7rem;
  margin-left: ${SIDEBAR_WIDTH};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SideBar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </MainContent>
      </BrowserRouter>
      <Toaster richColors position="top-center" duration={2000} />
    </>
  );
}

export default App;
