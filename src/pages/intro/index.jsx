import React from "react";
import styled from "styled-components";

import waveImg from "./assets/wave.svg";

const OnBoarding = () => {
  return (
    <Wrapper>
      <Logo>
        <img className="logo" src="/assets/logo.svg" alt="로고" />
        <img src="/assets/name.svg" alt="럽쇼츠" />
        <span>사랑에 빠지는 순간</span>
      </Logo>
      <BottomWave>
        <div></div>
      </BottomWave>
      <span className="sublogo">loveshort</span>
    </Wrapper>
  );
};

export default OnBoarding;

const Wrapper = styled.section`
  .sublogo {
    position: absolute;
    bottom: 2%;
    transform: translateX(-50%);
    left: 50%;
    color: #ffffff;
  }
`;
const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  width: 120px;

  * {
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
  }
  .logo {
    width: 80px;
  }

  h1 {
    font-size: 25px;
    margin: 2px 0 1px 0;
  }

  span {
    display: block;
    font-size: 14px;
    margin-top: 8px;
  }
`;

const BottomWave = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  div {
    width: 100%;
    height: 250px;
    background-image: url(${waveImg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
