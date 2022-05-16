import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import WaveIllust from "@/pages/login/assets/Vector 9.jpg";
import KakaoButton3 from "@/pages/login/assets/kakaotalk.svg";
import { useNavigate } from "react-router";
import { client } from "@/lib/api";
import {
  changeBirtdayError,
  changeBirthday,
  changeCity,
  changeDistrict,
  changeGender,
  changeNickname,
  setNicknameCheckNull,
  userCheck,
} from "@/redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "@/redux/reducers/user";

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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user.user);
  const location = window.location.host;
  const KAKAO_AUTH_URL =
    location === "localhost:3000"
      ? process.env.REACT_APP_REDIRECT_URI_LOCAL
      : process.env.REACT_APP_REDIRECT_URI_DEPLOY;

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬스토리지가 작동 안해요.");
      }
    }
  }, [user]);

  useEffect(() => {
    dispatch(changeNickname(""));
    dispatch(changeBirthday(""));
    dispatch(changeGender(""));
    dispatch(changeCity("서울특별시"));
    dispatch(changeDistrict("강동구"));
    dispatch(setNicknameCheckNull());
    dispatch(changeBirtdayError(null));
  }, []);

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
          <a
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_AUTH_URL}&response_type=code&prompt=none`}
            className="kakao-login-container"
          >
            <img src={KakaoButton3} alt="카카오로그인버튼" />
            <span>카카오로 시작하기</span>
          </a>
        </div>
      </LoginBlock>
    </>
  );
};

export default Login;
