import styled from "styled-components";
import React from "react";
import WaveIllust from "../../static/login/Vector 9.jpg";
import LogoIllust from "../../static/login/Group 39520.jpg";
import Template from "@/components/common/Template";

const LoginBlock = styled.div`
  padding: 0 30px;

  .logo_container {
    margin-bottom: 16px;
  }
  .text_container {
    font-size: 18px;
    line-height: 22px;
    color: #3d3d3d;
  }
`;

const Login = () => {
  return (
    <>
      <Template>
        <div className="illust" style={{ marginBottom: "80px" }}>
          <img src={WaveIllust} alt="웨이브일러스트" />
        </div>
        <LoginBlock>
          <div className="logo_text_container">
            <div className="logo_container">
              <img src={LogoIllust} alt="로고" />
            </div>
            <div className="text_container">
              안녕하세요!
              <br />
              럽쇼츠를 시작해볼까요?
            </div>
          </div>
        </LoginBlock>
      </Template>
    </>
  );
};

export default Login;
