import styled from "styled-components";
import React from "react";
import Template from "@/components/common/Template";
import LeftArrow from "@/static/step/Vector 3.svg";
import RightArrow from "@/static/step/Vector 2.svg";
import NicknameCheck from "@/static/step/alert_circle.svg";
import GenderGrayCheckButton from "@/static/step/Group 39531.svg";
import GenderGreenCheckButton from "@/static/step/Group 39531.svg";

const Step1PageBlock = styled.div`
  padding: 53px 30px 0 30px;
  .header-pagination {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }

  .title {
    margin-bottom: 67px;
    h1 {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 14px;
    }
  }

  .profile {
    .nickname-container {
      margin-bottom: 27px;
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

  .birthday-gender {
    margin-bottom: 27px;
    > label {
      display: inline-block;
      margin-bottom: 8px;
    }

    .birthday-input-gender-checkbox {
      display: flex;
      align-items: center;
      .birthday-input-container {
        flex: 1;
        input {
          box-sizing: border-box;
          width: 90%;
          font-size: 16px;
          padding: 0.6em 1em;
          border: 1px solid #c4c4c4;
          border-radius: 8px;
          outline: none;
          &:focus {
            border: 1px solid #5dccc6;
            color: #5dccc6;
          }
        }
      }

      .gender-checkbox-container {
        display: flex;
        justify-content: right;
        .male,
        .female {
          display: flex;
          align-items: center;
          span {
            margin-left: 7px;
          }
        }
        .female {
          img {
            margin-left: 27px;
          }
        }
      }
    }
  }

  .location-select {
    .location-select-container {
      display: flex;
      justify-content: space-between;
    }

    .location-si {
      width: 49%;
    }
    .location-gu {
      width: 49%;
    }

    > label {
      display: inline-block;
      margin-bottom: 8px;
    }

    select {
      width: 100%;
      padding: 0.6em 1em;
      font-size: 16px;
      font-family: inherit;
      background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg)
        no-repeat 98.5% 50%;
      border: 1px solid #c4c4c4;
      border-radius: 8px;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
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

      <div className="title">
        <h1>Step1</h1>
        <p>간단한 프로필을 완성해주세요</p>
      </div>

      <form className="profile">
        <div className="nickname-container">
          <label>닉네임</label>
          <div className="nickname-input">
            <input type="text" />
            <img src={NicknameCheck} alt="닉네임중복체크기능" />
          </div>
        </div>

        <div className="birthday-gender">
          <label>생년월일/성별</label>
          <div className="birthday-input-gender-checkbox">
            <div className="birthday-input-container">
              <input type="text" placeholder="YY MM DD" />
            </div>
            <div className="gender-checkbox-container">
              <div className="male">
                <img src={GenderGrayCheckButton} alt="체크박스" />
                <span>남</span>
              </div>
              <div className="female">
                <img src={GenderGrayCheckButton} alt="체크박스" />
                <span>여</span>
              </div>
            </div>
          </div>
        </div>

        <div className="location-select">
          <label>거주지역</label>
          <div className="location-select-container">
            <div className="location-si">
              <select>
                <option selected value="서울">
                  서울
                </option>
                <option value="인천">인천</option>
                <option value="대전">대전</option>
                <option value="대구">대구</option>
                <option value="melon">부산</option>
              </select>
            </div>
            <div className="location-gu">
              <select>
                <option selected>은평구</option>
                <option>강동구</option>
                <option>송파구</option>
                <option>용산구</option>
                <option>동작구</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="next-step-button">
          다음
        </button>
      </form>
    </Step1PageBlock>
  );
};

export default Step1Page;
