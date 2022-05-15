import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Select from "react-select";
import { options } from "@/utils/selectOptions";

import InterestCategories from "@components/interests";
import TitlePrevHeader from "@components/common/titlePrevHeader";
import Navigator from "@components/navigator";
import { changeNavigator } from "@redux/reducers/navigator";
import { InterestsModal } from "@/components/common/modal";
import green from "./assets/green.svg";
import gray from "./assets/gray.svg";
import yes from "./assets/yes.svg";
import no from "./assets/no.svg";

import request from "@/api/request";
import { birthdayCheck, checkNickname } from "./vaildation";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const [profileFile, setProfile] = useState("");
  const [thumbnailSrc, setThumbnailSrc] = useState("");
  const { user } = useSelector(({ user }) => user);
  const modal = useSelector(({ modal }) => modal.value);

  const [categories, setCategories] = useState([]);
  const [comment, setComment] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [nickname, setNickname] = useState("");
  const [checkUserName, setcheckUserName] = useState("");
  const [checkDuplicate, setDuplicate] = useState(false);
  const [rightUserName, setRightUserName] = useState(true);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [bithdayCheckError, setBirthdayCheck] = useState(true);
  const navigate = useNavigate();

  // const onClickProfileEdit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   const info = {
  //     nickname: nickname,
  //     birthday: birthday,
  //     gender: gender,
  //     city: city,
  //     district: district,
  //     interests: interests,
  //     myIntroduce: myIntroduce,
  //   };
  //   formData.append(profileFile, profileFile);
  //   formData.append(
  //     "info",
  //     new Blob([JSON.stringify(info)], { type: "application/json" })
  //   );
  //   const config = {
  //     headers: { "content-type": "multipart/form-data" },
  //   };
  //   try {
  //     await client
  //       .post("/api/videos/upload/direct", formData, config)
  //       .then((res) => console.log(res));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const checkDuplicateNickName = async (e) => {
    e.preventDefault();

    try {
      await request(`/api/auth/check/${nickname}`, "get");
      setDuplicate(false);
      setcheckUserName(nickname);
    } catch (e) {
      setDuplicate(true);
      setRightUserName(false);
      console.log(e);
    }
  };

  const onChangeNickName = ({ target }) => {
    if (target.value.length <= 0) {
      setRightUserName(false);
    }
    if (target.value.length >= 4) return;

    setNickname(target.value);
    const result = checkNickname(target.value);
    if (!result) setRightUserName(false);
    else setRightUserName(true);
    if (target.value !== checkUserName) {
      setDuplicate(true);
    }
  };

  const onChangeBirthday = ({ target }) => {
    setBirthday(target.value);
    const result = birthdayCheck(target.value);
    setBirthdayCheck(result);
  };

  const checkGender = (gender) => {
    setGender(gender);
  };

  const getProfileFile = (e) => {
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      fileExt !== "jpg" &&
      fileExt !== "png"
    ) {
      alert("jpg, png 파일만 업로드 가능합니다.");
      return;
    }
    setProfile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setThumbnailSrc(reader.result);
        resolve();
      };
    });
  };

  const changeComment = ({ target }) => {
    if (comment.length > 20) return;
    setComment(target.value);
  };

  const fetchUserData = async () => {
    try {
      const {
        profileImg,
        age,
        interests,
        introduce,
        city,
        nickname,
        district,
        genderType,
      } = await request(`/api/user/${user.email}`, "get");

      setNickname(nickname);
      setcheckUserName(nickname);
      setCategories(interests);
      setComment(introduce === null ? "" : introduce);
      setCity(city);
      setBirthday(age);
      setDistrict(district);
      setGender(genderType);
      setThumbnailSrc(profileImg);
    } catch (e) {}
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
    fetchUserData();
  }, []);

  return (
    <>
      <TitlePrevHeader title={"프로필 편집"} background={"white"} />
      <ProfileEditForm>
        <div className="profileEdit__img">
          <div>
            <img src={thumbnailSrc} alt="프로필 사진 변경" />
          </div>
          <label className="profile__img-edit" htmlFor="profile_img">
            프로필 사진변경
          </label>
          <input
            type="file"
            id="profile_img"
            onChange={(e) => getProfileFile(e)}
          />
        </div>
        <InterestCategories
          title={"관심사"}
          categories={categories}
          border={true}
        />

        <div className="nickname-container">
          <label>닉네임</label>
          <input
            value={nickname}
            onChange={({ target }) => onChangeNickName({ target })}
          />
          {checkDuplicate ? (
            <button onClick={checkDuplicateNickName}>중복체크</button>
          ) : (
            <button disabled>중복체크</button>
          )}
          {rightUserName ? (
            <span>
              <img src={yes} alt="correct" />
            </span>
          ) : (
            <span>
              <img src={no} alt="no" />
            </span>
          )}
        </div>

        <div className="birthday-gender">
          <div className="birthday-gender-title">
            <label>생년월일/성별</label>
            {bithdayCheckError ? (
              <></>
            ) : (
              <span>생년월일을 다시 입력해주세요!</span>
            )}
          </div>
          <div className="birthday-input-gender-checkbox">
            <div className="birthday-input-container">
              <input
                type="text"
                value={birthday}
                placeholder="YYYY MM DD"
                pattern="[0-9]+"
                maxLength={8}
                onChange={({ target }) => onChangeBirthday({ target })}
              />
            </div>
            <div className="gender-checkbox-container">
              <div className="male" onClick={() => checkGender("MALE")}>
                {gender === "MALE" ? (
                  <img src={green} alt="체크박스" />
                ) : (
                  <img src={gray} alt="체크박스" />
                )}
                <span>남</span>
              </div>
              <div className="female" onClick={() => checkGender("FEMALE")}>
                {gender === "FEMALE" ? (
                  <img src={green} alt="체크박스" />
                ) : (
                  <img src={gray} alt="체크박스" />
                )}
                <span>여</span>
              </div>
            </div>
          </div>
        </div>

        <label className="profileEdit__label">한줄 소개</label>
        <input
          className="profileEdit__input"
          placeholder="20자 이내로 작성해주세요."
          value={comment}
          onChange={({ target }) => changeComment({ target })}
        />
        {/* <button
          type="submit"
          className="profile__save"
          onClick={(e) => onClickProfileEdit(e)}
        >
          저장
        </button>*/}
        {modal && <InterestsModal />}
      </ProfileEditForm>
      <ManageAccount>
        <Link to="/manage">계정 관리</Link>
      </ManageAccount>
      <Bottom />
      <Navigator />
    </>
  );
};

export default ProfileEdit;

const ProfileEditForm = styled.form`
  width: 90%;
  margin: 0 auto;

  .profileEdit__label {
    display: block;
    margin-top: 15px;
    margin-bottom: 8px;
  }

  .profileEdit__input {
    padding: 8px;
    width: 95%;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
  }

  .profileEdit__input:focus {
    outline: none;
  }

  #profile_img {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  .profileEdit__img {
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;

    div {
      width: 108px;
      height: 108px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 15px auto;
      position: relative;

      img {
        height: auto;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
      }
    }
  }

  .nickname-container {
    margin: 10px 0;
    position: relative;

    label {
      display: block;
      margin-bottom: 8px;
    }
    input {
      width: 95%;
      padding: 8px;
      border: 1px solid #c4c4c4;
      border-radius: 8px;
      outline: none;
    }

    button {
      background-color: #5dccc6;
      border: none;
      padding: 5px;
      border-radius: 5px;
      color: white;
      position: absolute;
      top: 27px;
      right: 38px;
    }

    button:disabled {
      background-color: #c4c4c4;
    }

    span {
      position: absolute;
      top: 29px;
      right: 5px;
    }
  }

  .profile__img-edit,
  .profile__save {
    color: white;
    background-color: #5dccc6;
    border: none;
    border-radius: 5px;
  }

  .profile__img-edit {
    padding: 2px 4px;
  }

  .profile__save {
    position: absolute;
    top: 15px;
    right: 5%;
    padding: 3px 8px;
  }

  .birthday-gender {
    margin-bottom: 15px;
    .birthday-gender-title {
      label {
        margin-top: 10px;
        display: inline-block;
        margin-bottom: 10px;
        margin-right: 1em;
      }

      span {
        margin-top: 10px;
        font-size: 12px;
        color: red;
        float: right;
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
          padding: 8px;

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
`;

const ManageAccount = styled.div`
  position: absolute;
  left: 5%;
  bottom: 90px;
  cursor: pointer;
  font-weight: 600;
`;

const Bottom = styled.div`
  padding-bottom: 80px;
`;
