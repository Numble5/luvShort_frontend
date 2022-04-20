import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import WaveIllust from "../../static/login/Vector 9.jpg";
import LogoIllust from "../../static/login/Group 39520.jpg";
import Template from "@/components/common/Template";
import KakaoButton3 from "@/static/login/kakaotalk.svg";
import axios from "axios";

const LoginBlock = styled.div`
  padding: 0 30px;

  .logo_text_container {
    margin-bottom: 187px;
    .logo_container {
      margin-bottom: 16px;
    }
    .text_container {
      font-size: 20px;
      line-height: 30px;
      color: #3d3d3d;
    }
  }
  .sns-login-container {
    text-align: center;
    > p {
      font-size: 14px;
      text-align: center;
      color: #979797;
      margin-bottom: 8px;
    }
    .kakao-login-container {
      text-align: left;
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: #f6f6f6;
      padding: 3px 2px 1.5px 2px;
      margin-bottom: 10px;
      cursor: pointer;
      img {
        margin-right: 4em;
      }
    }
    .naver-login-container {
      position: relative;
      text-align: left;
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: #f6f6f6;
      padding: 3px 2px 1.5px 2px;
      cursor: pointer;

      #naverIdLogin {
        > a {
          padding-right: 210px;
          padding-top: 25px;
        }
        img {
          border-radius: 10px;
          margin-right: 4em;
        }
      }

      > span {
        position: absolute;
        left: 6.5em;
        z-index: 0;
        pointer-events: none;
      }
    }
  }
`;

const { Kakao } = window;
const { naver } = window;

const Login = () => {
  // const CLIENT_ID = "cb35cf8c852a69a0ff7192f0f1ca071d";
  // const REDIRECT_URI = "http://localhost:3000/oauth";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const naverRef = useRef(null);

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: async function (authObj) {
        console.log(authObj);
        let result = await axios.post("/api/auth/kakao-login", {
          access_token: authObj.access_token,
        });
        console.log(result);
      },
    });
  };

  const naverLoginInitial = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "ifHDEHFmeaVaiNSc4KOn",
      callbackUrl: "http://localhost:3000/naver/auth/callback",
      clientSecret: "EzSL5Az1aS",
      isPopup: true, // popup 형식으로 띄울것인지 설정
      loginButton: {
        color: "green",
        type: 1,
        height: "40",
      }, //버튼의 스타일, 타입, 크기를 지정
      callbackHandle: true,
    });
    naverLogin.init();
  };

  // const clickNaver = (event) => {
  //   console.log("하이");
  //   console.log("바이");
  //   naverRef.current.children[0].click();
  // };

  useEffect(() => {
    naverLoginInitial();
  }, []);

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
          <div className="sns-login-container">
            <p>SNS 계정으로 간편하기 시작하기</p>
            <div
              className="kakao-login-container"
              onClick={kakaoLoginClickHandler}
            >
              <img src={KakaoButton3} alt="카카오로그인버튼" />
              <span>카카오로 시작하기</span>
            </div>
            <div className="naver-login-container">
              <div id="naverIdLogin" />
              <span>네이버로 시작하기</span>
            </div>
          </div>
        </LoginBlock>
      </Template>
    </>
  );
};

export default Login;
