import { createGlobalStyle } from 'styled-components';
import theme from '../theme/themes';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root, .App {
    height: 100%;
    background-color: ${theme.globalTheme.PRIMARY_COLOR};
    /* color: ${theme.globalTheme.PRIMARY_TEXT_COLOR}; */
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

export default GlobalStyle;
