import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root, .App {
    height: 100%;
    background-color: #fff;
    color: #191919;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

export default GlobalStyle;
