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
import NicknameCheck from "@/pages/step/assets/alert_circle.svg";
import GenderGrayCheckButton from "@/pages/step/assets/Group 39531.svg";
import GenderGreenCheckButton from "@/pages/step/assets-step1/Group 39571.svg";
import NicknameError from "@pages/step/assets-step1/Group 39570.svg";
import Select from "react-select";
import { options } from "@/utils/selectOptions";

const ProfileFormBlock = styled.div`
  .profile {
    .nickname-container {
      margin-top: ${({ type }) => (type === "profile" ? "15px" : "0px")};
      margin-bottom: ${({ type }) => (type === "profile" ? "15px" : "27px")};
      .nickname_title {
        display: flex;
        justify-content: space-between;
        label {
          display: inline-block;
          margin-bottom: 8px;
          span {
            margin-top: ${({ type }) => (type === "profile" ? "3px" : "0")};

            margin-left: ${({ type }) => (type === "profile" ? "" : "4px")};
            display: ${({ type }) => (type === "profile" ? "none" : "")};

            font-size: 12px;
            color: #b1b1b1;
          }
        }
        span {
          display: ${({ type }) => (type === "profile" ? "block" : "")};

          font-size: 12px;
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
          padding: ${({ type }) => (type === "profile" ? "8px" : "0.6em 1em")};
          color: #5dccc6;
          font-size: ${({ type }) => (type === "profile" ? "16px" : "18px")};

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

          right: ${({ type }) => (type === "profile" ? "7px" : "1em")};
          top: ${({ type }) => (type === "profile" ? "6px" : "10px")};
          background-color: #5dccc6;
          padding: 0.4em 0.8em 0.6em 0.8em;
          border-radius: 6px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          &.nickcheck-success {
            box-sizing: border-box;
            background: #c4c4c4;

            margin-right: ${({ type }) =>
              type === "profile" ? "24px" : "3em"};

            pointer-events: none;
          }
          &.error {
            box-sizing: border-box;
            background: #c4c4c4;
            margin-right: 3em;
          }
        }
        > img {
          position: absolute;
          right: ${({ type }) => (type === "profile" ? "7px" : "1em")};
          top: ${({ type }) => (type === "profile" ? "9px " : "10px")};
          width: ${({ type }) => (type === "profile" ? "20px" : "")};
        }
      }
    }
  }

  .birthday-gender {
    margin-bottom: ${({ type }) => (type === "profile" ? "15px" : "27px")};

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
          padding: ${({ type }) => (type === "profile" ? "8px" : "0.6em 1em")};

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

  .next-step-button {
    display: ${({ type }) => (type === "profile" ? "none" : "")};

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
    display: ${({ type }) => (type === "profile" ? "none" : "")};

    background: #5dccc6;
  }
  .error {
    color: red;
  }
`;

const ProfileForm = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickname = useSelector(({ user }) => user.nickname);
  const birthday = useSelector(({ user }) => user.birthday);
  const gender = useSelector(({ user }) => user.gender);
  const nicknameCheckError = useSelector(({ user }) => user.nicknameCheckError);
  const birthdayError = useSelector(({ user }) => user.birthdayError);
  const city = useSelector(({ user }) => user.city);
  const district = useSelector(({ user }) => user.district);
  const cityValue = { value: city, label: city };
  const districtValue = { value: district, label: district };

  const onChangeNickname = useCallback((e) => {
    dispatch(setNicknameCheckNull());
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
    dispatch(changeCity(e.value));
    switch (e.value) {
      case "서울특별시":
        dispatch(changeDistrict("강동구"));
        break;
      case "강원도":
        dispatch(changeDistrict("강릉시"));
        break;
      case "경기도":
        dispatch(changeDistrict("고양시"));
        break;
      case "경상남도":
        dispatch(changeDistrict("거제시"));
        break;
      case "경상북도":
        dispatch(changeDistrict("경산시"));
        break;
      case "광주광역시":
        dispatch(changeDistrict("광산구"));
        break;
      case "대구광역시":
        dispatch(changeDistrict("남구"));
        break;
      case "대전광역시":
        dispatch(changeDistrict("대덕구"));
        break;
      case "부산광역시":
        dispatch(changeDistrict("강서구"));
        break;
      case "세종특별자치시":
        dispatch(changeDistrict("조치원읍"));
        break;
      case "울산광역시":
        dispatch(changeDistrict("남구"));
        break;
      case "인천광역시":
        dispatch(changeDistrict("강화군"));
        break;
      case "전라남도":
        dispatch(changeDistrict("광양시"));
        break;
      case "전라북도":
        dispatch(changeDistrict("군산시"));
        break;
      case "제주특별자치도":
        dispatch(changeDistrict("서귀포시"));
        break;
      case "충청남도":
        dispatch(changeDistrict("계롱시"));
        break;
      case "충청북도":
        dispatch(changeDistrict("영동군"));
        break;
      default:
    }
  }, []);

  const onChangeDistrict = (e) => {
    dispatch(changeDistrict(e.value));
  };

  const nicknameReset = () => {
    dispatch(changeNickname(""));
    dispatch(setNicknameCheckNull());
  };

  const onClickCheckNickname = () => {
    if (!nickname) {
      return;
    }
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    if (regex.test(nickname)) {
      dispatch(nicknameCheck(nickname));
    } else {
      alert(
        "한글, 영어, 숫자만 입력할 수 있습니다. (공백은 허용하지 않습니다!)"
      );
    }
  };

  return (
    <ProfileFormBlock type={type}>
      <form className="profile">
        <div className="nickname-container">
          <div className="nickname_title">
            <label>
              닉네임
              <span className="nickname-guide">
                {nicknameCheckError === null &&
                  "(한글, 영어, 숫자만 입력할 수 있습니다.공백은 허용하지 않습니다!)"}
              </span>
            </label>
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
                maxLength="6"
              />
            ) : (
              <input
                type="text"
                className={nicknameCheckError === true ? "error" : ""}
                value={nickname}
                onChange={onChangeNickname}
                maxLength="6"
              />
            )}

            {nicknameCheckError === null && (
              <span onClick={onClickCheckNickname}>중복확인</span>
            )}
            {nicknameCheckError === false && (
              <>
                <span
                  className="nickcheck-success"
                  onClick={onClickCheckNickname}
                  disabled
                >
                  중복확인
                </span>
                <img src={NicknameCheck} alt="닉네임중복체크기능" />
              </>
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
              <Select
                maxMenuHeight="100px"
                options={options.cityOptions}
                onChange={onChangeCity}
                value={cityValue}
              />
            </div>
            <div className="location-gu">
              {city === "서울특별시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.seoulOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "강원도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.gangWonDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "경기도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.GyeonggiDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "경상남도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.GyeongsangnamDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "경상북도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.GyeongsangbukDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "광주광역시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.GwangjuOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "대구광역시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.DaeguOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "대전광역시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.DaejeonOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "부산광역시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.BusanOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "세종특별자치시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.SejongOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "울산광역시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.UlsanOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "인천광역시" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.IncheonOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "전라남도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.JeollanamDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "전라북도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.JeollabukDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "제주특별자치도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.JejuOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "충청남도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.ChungcheongnamDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
              {city === "충청북도" && (
                <Select
                  maxMenuHeight="100px"
                  options={options.ChungcheongbukDoOptions}
                  onChange={onChangeDistrict}
                  value={districtValue}
                />
              )}
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
