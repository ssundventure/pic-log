import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
   font-family: 'Space Mono', monospace;    background: #1f1d1b;
    color: #222;
  }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; }
`;

export default GlobalStyle;
