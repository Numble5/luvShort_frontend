import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Wave from "@/pages/step/assets-register-success/Group 39534.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const RegisterSuccessPageBlock = styled.div`
  padding: 20vh 27px 0 27px;
  .title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 22px;
    h1 {
      span {
        color: #f3576c;
      }
    }
  }

  .sub-title {
    font-size: 20px;

    p {
      margin-bottom: 9px;
    }
    span {
      color: #5dccc6;
      margin-right: 5px;
    }
  }

  .footer-wave {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    img {
      width: 100%;
      height: 400px;
    }
  }
  .next-step-button {
    position: absolute;
    box-sizing: border-box;
    display: block;
    bottom: 0;
    left: 0;
    border: 0;
    background: #5dccc6;
    width: 100%;
    height: 80px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const RegisterSuccessPage = () => {
  // const nickname = useSelector(({user}) => user.nickname);
  // const interests = useSelector(({user}) => user.interests); 서버 통신 완성되면 이거 사용하기
  const navigate = useNavigate();
  const nickname = useSelector(({ user }) => user.nickname);
  const interests = useSelector(({ user }) => user.user.interests);

  return (
    <RegisterSuccessPageBlock>
      <div className="title">
        <h1>
          <span>'{nickname}'</span>님,
          <br />
          회원가입을 축하해요🎉
        </h1>
      </div>
      <div className="sub-title">
        <p>관심사는</p>
        {interests?.map((item) => (
          <span>#{item}</span>
        ))}
      </div>

      <div className="footer-wave">
        <img src={Wave} alt="웨이브" />
      </div>

      <button
        type="submit"
        className="next-step-button"
        onClick={() => navigate("/")}
      >
        시작하기
      </button>
    </RegisterSuccessPageBlock>
  );
};

export default RegisterSuccessPage;
