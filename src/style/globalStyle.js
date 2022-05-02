import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle` 
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;  
    color:#3D3D3D;
  }

 a{
   text-decoration :none;
   color: #3D3D3D;
 }

  html, body {
    position:relative;
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }

  body {
    box-sizing: border-box;
  }

  .sr-only{
    overflow: hidden;
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
  }
`;

export default GlobalStyle;
