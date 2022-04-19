import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle` 
  ${reset}

  * {
    margin: 0;
    padding: 0;  
  }

 a{
   text-decoration :none;
   color: #000000;
 }

  html, body {
    height: 100%;
    background-color: gray;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
