import styled from "styled-components";
import React from "react";
import Template from "@/components/common/Template";
import LeftArrow from "@/static/step/Vector 3.svg";
import RightArrow from "@/static/step/Vector 2.svg";
import NicknameCheck from "@/static/step/alert_circle.svg";

const Step1PageBlock = styled.div`
  padding: 53px 30px 0 30px;
  .header-pagination {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }

  .title-container {
    margin-bottom: 67px;
    h1 {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 14px;
    }
  }

  .profile-container {
    .nickname-container {
      > label {
        display: inline-block;
        margin-bottom: 8px;
      }

      .nickname-input {
        position: relative;
        > input {
          width: 100%;
          box-sizing: border-box;
          padding: 0.6em 1em;
          color: #5dccc6;
          font-size: 18px;
          border: 1px solid #c4c4c4;
          border-radius: 8px;
          outline: none;
          &:focus {
            border: 1px solid #5dccc6;
          }
        }
        > img {
          position: absolute;
          right: 1em;
          top: 10px;
        }
      }
    }
  }
`;

const Step1Page = () => {
  return (
    <Step1PageBlock>
      <div className="header-pagination">
        <div className="left-arrow">
          <img src={LeftArrow} alt="좌측화살표" />
        </div>
        <span>1/2</span>
        <div className="right-arrow">
          <img src={RightArrow} alt="우측화살표" />
        </div>
      </div>
      <div className="title-container">
        <h1>Step1</h1>
        <p>간단한 프로필을 완성해주세요</p>
      </div>
      <form className="profile-container">
        <div className="nickname-container">
          <label>닉네임</label>
          <div className="nickname-input">
            <input type="text" />
            <img src={NicknameCheck} alt="닉네임중복체크기능" />
          </div>
        </div>
        <div className="birthday-gender-container">
          <label>생년월일/성별</label>
          <div className="birthday-input-gender-checkbox"></div>
        </div>
      </form>
    </Step1PageBlock>
  );
};

export default Step1Page;
