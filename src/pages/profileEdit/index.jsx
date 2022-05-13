import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import InterestCategories from "@components/interests";
import ProfileForm from "@components/step1/ProfileForm";
import TitlePrevHeader from "@components/common/titlePrevHeader";
import Navigator from "@components/navigator";
import { changeNavigator } from "@redux/reducers/navigator";
import { client } from "@/lib/api";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const [profileFile, setProfile] = useState("");
  const [thumbnailSrc, setThumbnailSrc] = useState("");
  const user = useSelector(({ user }) => user);
  const nickname = useSelector(({ user }) => user.nickname);
  const birthday = useSelector(({ user }) => user.birthday);
  const gender = useSelector(({ user }) => user.gender);
  const city = useSelector(({ user }) => user.city);
  const district = useSelector(({ user }) => user.district);
  const interests = null;
  const myIntroduce = null;
  const navigate = useNavigate();

  const onClickProfileEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    const info = {
      nickname: nickname,
      birthday: birthday,
      gender: gender,
      city: city,
      district: district,
      interests: interests,
      myIntroduce: myIntroduce,
    };
    formData.append(profileFile, profileFile);
    formData.append(
      "info",
      new Blob([JSON.stringify(info)], { type: "application/json" })
    );
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      await client
        .post("/api/videos/upload/direct", formData, config)
        .then((res) => console.log(res));
    } catch (e) {
      console.log(e);
    }
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

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
  }, []);

  return (
    <>
      <TitlePrevHeader title={"프로필 편집"} background={"white"} />
      <ProfileEditForm>
        <div className="profileEdit__img">
          <div>
            <img
              src={thumbnailSrc ? thumbnailSrc : ""}
              alt="프로필 사진 변경"
            />
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

        <InterestCategories title={"관심사"} categories={user.user.interests} />

        <ProfileForm />
        <label>한줄 소개</label>
        <input placeholder="20자 이내로 작성해주세요." />
        <button
          type="submit"
          className="profile__save"
          onClick={(e) => onClickProfileEdit(e)}
        >
          저장
        </button>
      </ProfileEditForm>
      <Link to="/manage">계정 관리</Link>
      <Navigator />
    </>
  );
};

export default ProfileEdit;

const ProfileEditForm = styled.form`
  width: 90%;
  margin: 0 auto;

  #profile_img {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  .profileEdit__img {
    margin-bottom: 20px;

    div {
      width: 108px;
      height: 108px;
      border-radius: 50%;
      overflow: hidden;

      img {
        height: auto;
      }
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
    display: block;
  }

  .profile__save {
    position: absolute;
    top: 15px;
    right: 5%;
    padding: 3px 8px;
  }
`;
