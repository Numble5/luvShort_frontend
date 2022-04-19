import styled from "styled-components";
import green from "./assets/green.svg";
import pink from "./assets/pink.svg";

export const Wrapper = styled.section``;
export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
  width: 120px;

  * {
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 80px;
  }

  h1 {
    font-size: 25px;
    margin: 2px 0 1px 0;
  }
`;

export const SubFont = styled.span`
  display: block;
  font-size: 14px;
`;
export const Wave = styled.div`
  .green {
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;
    background-image: url(${green});
    background-size: cover;
    width: 100vw;
    height: 280px;
  }
  .pink {
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;
    background-image: url(${pink});
    background-size: cover;
    width: 100vw;
    height: 249px;
  }
  span {
    position: absolute;
    color: #ffffff;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
