import React from "react";
import { Logo, SubFont, Wave, Wrapper } from "./onBoading.styled";

const OnBoarding = () => {
  return (
    <Wrapper>
      <Logo>
        <img src="/assets/logo.svg" alt="로고" />
        <h1>럽쇼츠</h1>
        <SubFont>사랑에 빠지는 순간</SubFont>
      </Logo>
      <Wave>
        <div className="green" />
        <div className="pink" />
        <SubFont>loveshort</SubFont>
      </Wave>
    </Wrapper>
  );
};

export default OnBoarding;
