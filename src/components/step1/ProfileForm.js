import styled from "styled-components";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBirtdayError,
  changeBirthday,
  changeCity,
  changeDistrict,
  changeGender,
  changeNickname,
  nicknameCheck,
  setNicknameCheckNull,
} from "@/redux/reducers/user";
import { useNavigate } from "react-router";
import NicknameCheck from "@/static/step/alert_circle.svg";
import GenderGrayCheckButton from "@/static/step/Group 39531.svg";
import GenderGreenCheckButton from "@/pages/step/assets-step1/Group 39571.svg";
import NicknameError from "@pages/step/assets-step1/Group 39570.svg";

const ProfileFormBlock = styled.div`
  .profile {
    .nickname-container {
      margin-bottom: 27px;
      .nickname_title {
        display: flex;
        justify-content: space-between;
        label {
          display: inline-block;
          margin-bottom: 8px;
        }
        span {
          font-size: 12p;
          &.success {
            color: #5dccc6;
          }
          &.error {
            color: red;
          }
        }
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
          &.error {
            border: 1px solid red;
            color: red;
          }
        }
        > span {
          position: absolute;
          right: 1em;
          top: 10px;
          background-color: #5dccc6;
          padding: 0.4em 0.8em 0.6em 0.8em;
          border-radius: 6px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          &.error {
            box-sizing: border-box;
            background: #c4c4c4;
            margin-right: 3em;
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
    .birthday-gender-title {
      label {
        display: inline-block;
        margin-bottom: 8px;
        margin-right: 1em;
      }
      span {
        font-size: 12px;
        color: red;
      }
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
    background: #c4c4c4;
    width: 100%;
    height: 80px;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  .next-step-button-selected {
    background: #5dccc6;
  }
  .error {
    color: red;
  }
`;

const ProfileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickname = useSelector(({ user }) => user.nickname);
  const birthday = useSelector(({ user }) => user.birthday);
  const gender = useSelector(({ user }) => user.gender);
  const nicknameCheckError = useSelector(({ user }) => user.nicknameCheckError);
  const birthdayError = useSelector(({ user }) => user.birthdayError);

  const onChangeNickname = useCallback((e) => {
    dispatch(changeNickname(e.target.value));
  }, []);

  const onChangeBirthday = useCallback((e) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
    dispatch(changeBirthday(onlyNumber));
    if (e.target.value.length === 8) {
      birthdayCheck(e.target.value);
    }
  }, []);

  const birthdayCheck = (birth) => {
    var format =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (
      Number(birth.substring(0, 2)) !== 19 &&
      Number("20" + birth.substring(2, 4)) > Number(new Date().getFullYear())
    ) {
      return dispatch(changeBirtdayError(true));
    }
    if (
      Number(birth.substring(0, 2)) !== 19 &&
      Number(birth.substring(4, 6)) > new Date().getMonth() + 1
    ) {
      return dispatch(changeBirtdayError(true));
    }
    if (
      Number(birth.substring(0, 2)) !== 19 &&
      Number(birth.substring(4, 6)) === new Date().getMonth() + 1 &&
      Number(birth.substring(6, 8)) > new Date().getDay() + 1
    ) {
      return dispatch(changeBirtdayError(true));
    }
    if (Number(birth.substring(4, 6)) === 0) {
      return dispatch(changeBirtdayError(true));
    }
    if (format.test(birth)) {
      dispatch(changeBirtdayError(false));
    } else {
      dispatch(changeBirtdayError(true));
    }
  };

  const checkGender = (gender) => {
    dispatch(changeGender(gender));
  };

  const onChangeCity = useCallback((e) => {
    dispatch(changeCity(e.target.value));
  }, []);

  const onChangeDistrict = (e) => {
    dispatch(changeDistrict(e.target.value));
  };

  const nicknameReset = () => {
    dispatch(changeNickname(""));
    dispatch(setNicknameCheckNull());
  };

  const onClickCheckNickname = () => {
    if (!nickname) {
      return;
    }
    dispatch(nicknameCheck(nickname));
  };

  return (
    <ProfileFormBlock>
      <form className="profile">
        <div className="nickname-container">
          <div className="nickname_title">
            <label>닉네임</label>
            {nicknameCheckError === false && (
              <span className="success">사용 가능한 닉네임이에요.</span>
            )}
            {nicknameCheckError === true && (
              <span className="error">동일한 닉네임이 있어요.</span>
            )}
          </div>

          <div className="nickname-input">
            {nicknameCheckError === false ? (
              <input
                type="text"
                value={nickname}
                onChange={onChangeNickname}
                disabled
              />
            ) : (
              <input
                type="text"
                className={nicknameCheckError === true ? "error" : ""}
                value={nickname}
                onChange={onChangeNickname}
              />
            )}

            {nicknameCheckError === null && (
              <span onClick={onClickCheckNickname}>중복확인</span>
            )}
            {nicknameCheckError === false && (
              <img src={NicknameCheck} alt="닉네임중복체크기능" />
            )}
            {nicknameCheckError === true && (
              <>
                <span className="error" onClick={onClickCheckNickname}>
                  중복확인
                </span>
                <img
                  src={NicknameError}
                  onClick={nicknameReset}
                  alt="닉네임중복체크기능"
                />
              </>
            )}
          </div>
        </div>

        <div className="birthday-gender">
          <div className="birthday-gender-title">
            <label>생년월일/성별</label>
            {birthdayError && <span>생년월일을 다시 입력해주세요!</span>}
          </div>
          <div className="birthday-input-gender-checkbox">
            <div className="birthday-input-container">
              <input
                type="text"
                value={birthday}
                placeholder="YYYY MM DD"
                pattern="[0-9]+"
                maxLength={8}
                onChange={onChangeBirthday}
              />
            </div>
            <div className="gender-checkbox-container">
              <div className="male" onClick={() => checkGender("MALE")}>
                {gender === "MALE" ? (
                  <img src={GenderGreenCheckButton} alt="체크박스" />
                ) : (
                  <img src={GenderGrayCheckButton} alt="체크박스" />
                )}
                <span>남</span>
              </div>
              <div className="female" onClick={() => checkGender("FEMALE")}>
                {gender === "FEMALE" ? (
                  <img src={GenderGreenCheckButton} alt="체크박스" />
                ) : (
                  <img src={GenderGrayCheckButton} alt="체크박스" />
                )}
                <span>여</span>
              </div>
            </div>
          </div>
        </div>

        <div className="location-select">
          <label>거주지역</label>
          <div className="location-select-container">
            <div className="location-si">
              <select onChange={onChangeCity}>
                <option value="서울">서울</option>
                <option value="인천">인천</option>
                <option value="대전">대전</option>
                <option value="대구">대구</option>
                <option value="부산">부산</option>
              </select>
            </div>
            <div className="location-gu">
              <select onChange={onChangeDistrict} defaultValue="강동구">
                <option value="강동구">강동구</option>
                <option value="송파구">송파구</option>
                <option value="용산구">용산구</option>
                <option value="은평구">은평구</option>
                <option value="동작구">동작구</option>
              </select>
            </div>
          </div>
        </div>
        <button
          disabled={
            nickname &&
            nicknameCheckError === false &&
            birthday &&
            birthdayError === false &&
            gender
              ? false
              : true
          }
          type="submit"
          className={
            nickname &&
            nicknameCheckError === false &&
            birthday &&
            birthdayError === false &&
            gender
              ? "next-step-button next-step-button-selected"
              : "next-step-button"
          }
          onClick={() => navigate("/step2")}
        >
          다음
        </button>
      </form>
    </ProfileFormBlock>
  );
};

export default ProfileForm;
