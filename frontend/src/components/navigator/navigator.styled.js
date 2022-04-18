import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: #fafafa;
  width: 100vw;
  position: absolute;
  bottom: 0;

  ul {
    height: 79px;
    display: flex;
  }
`;

export const NavigationList = styled.li`
  a {
    font-size: 10px;
    font-weight: 600;
    color: #4d4d4d;
  }
`;
