import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import WaveIllust from "../../static/login/Vector 9.jpg";
import LogoIllust from "../../static/login/Group 39520.jpg";
import Template from "@/components/common/Template";
import KakaoButton3 from "@/static/login/kakaotalk.svg";
import axios from "axios";
import { useNavigate } from "react-router";
import { client } from "@/lib/api";
import { userCheck } from "@/redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";

const LoginBlock = styled.div`
  .illust {
    img {
      width: 100%;
      height: 214px;
    }
  }

  .logo_text_container {
    padding: 0 30px;
    margin-bottom: 160px;
    .logo_container {
      margin-bottom: 16px;

      img {
        width: 109px;
      }
    }
    .text_container {
      font-size: 20px;
      line-height: 30px;
      color: #3d3d3d;
    }
  }
  .sns-login-container {
    width: calc(100% - 60px);
    margin-left: 30px;
    position: absolute;
    bottom: 3em;
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
      background: #fee500;
      padding: 3px 2px 1.5px 2px;
      margin-bottom: 10px;
      cursor: pointer;
      img {
      }
      span {
        flex: 1;
        text-align: center;
        padding-right: 40px;
      }
    }
    .naver-login-container {
      position: relative;
      text-align: left;
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: #1ec800;
      padding: 3px 2px 1.5px 2px;
      cursor: pointer;

      #naverIdLogin {
        img {
          border-radius: 10px;
        }
      }

      > span {
        flex: 1;
        text-align: center;
        padding-right: 40px;
        /* position: absolute;
        left: 6.5em;
        z-index: 0;
        pointer-events: none; */
      }
    }
  }
`;

const { Kakao } = window;
const { naver } = window;

const Login = () => {
  const naverRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: async function (authObj) {
        let result = await client.post("/api/auth/kakao-login", {
          access_token: authObj.access_token,
        });
        if (result.data.redirectUrl === "/") {
          dispatch(userCheck());
        } else if (result.data.redirectUrl === "/step1") {
          navigate("/step1");
        }
      },
    });
  };

  const naverLoginInitial = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "ifHDEHFmeaVaiNSc4KOn",
      callbackUrl: "http://localhost:3000/naver/auth/callback",
      // clientSecret: "EzSL5Az1aS",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: {
        color: "green",
        type: 1,
        height: "40",
      }, //버튼의 스타일, 타입, 크기를 지정
      // callbackHandle: false,
    });
    naverLogin.init();
  };

  const onNaverLogin = () => {
    console.log(naverRef.current);
    naverRef.current.children[0].click();
  };

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬스토리지가 작동 안해요.");
      }
    }
    naverLoginInitial();
  }, [user]);

  return (
    <>
      <LoginBlock>
        <div className="illust" style={{ marginBottom: "50px" }}>
          <img src={WaveIllust} alt="웨이브일러스트" />
        </div>
        <div className="logo_text_container">
          <div className="logo_container">
            <img src="assets/logo+name.svg" alt="로고" />
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
          <div className="naver-login-container" onClick={onNaverLogin}>
            <div id="naverIdLogin" ref={naverRef} />
            <span>네이버로 시작하기</span>
          </div>
        </div>
      </LoginBlock>
    </>
  );
};

export default Login;
