// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
    background: #1f1d1b;
    color: #222;
  }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; }
`;

export default GlobalStyle;