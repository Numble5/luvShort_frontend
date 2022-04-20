import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle` 
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;  
    font-family: 'Noto Sans KR', sans-serif;
    color:#3D3D3D;
  }

 a{
   text-decoration :none;
   color: #3D3D3D;
 }

  html, body {
    position:relative;
    height: 100%;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
