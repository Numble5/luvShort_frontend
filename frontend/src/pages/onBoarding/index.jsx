import React from "react";
import { Logo, SubFont, Wrapper } from "./onBoading.styled";
import Wave from "../../pages/onBoarding/assets/Group 39530.svg";

const OnBoarding = () => {
  return (
    <Wrapper>
      <Logo>
        <img src="/assets/logo.svg" alt="로고" />
        <h1>럽쇼츠</h1>
        <SubFont>사랑에 빠지는 순간</SubFont>
      </Logo>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <img src={Wave} alt="하단웨이브" />
      </div>
    </Wrapper>
    /*<Wave>
        <div className="green" />
        <div className="pink" />
        <SubFont>loveshort</SubFont>
      </Wave>*/
  );
};

export default OnBoarding;
