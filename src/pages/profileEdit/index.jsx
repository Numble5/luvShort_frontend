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

  // const getProfileFile = (e) => {
  //   const file = e.target.files[0];
  //   const fileExt = file.name.split(".").pop();
  //   if (
  //     file.type !== "image/jpeg" &&
  //     file.type !== "image/png" &&
  //     fileExt !== "jpg" &&
  //     fileExt !== "png"
  //   ) {
  //     alert("jpg, png 파일만 업로드 가능합니다.");
  //     return;
  //   }
  //   setProfile(file);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setThumbnailSrc(reader.result);
  //       resolve();
  //     };
  //   });
  // };

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
            {/* <img
              src={thumbnailSrc ? thumbnailSrc : `${user.thumbnail}`}
              alt="프로필 사진 변경"
            /> */}
            <img src="data:image/jpeg;base64,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" />
          </div>
          <label className="profile__img-edit" htmlFor="profile_img">
            프로필 사진변경
          </label>
          {/* <input
            type="file"
            id="profile_img"
            onChange={(e) => getProfileFile(e)}
          /> */}
        </div>

        <InterestCategories title={"관심사"} categories={user.user.interests} />

        <ProfileForm type={"profile"} />
        <label className="profileEdit__label">한줄 소개</label>
        <input
          className="profileEdit__input"
          placeholder="20자 이내로 작성해주세요."
        />
        {/* <button
          type="submit"
          className="profile__save"
          onClick={(e) => onClickProfileEdit(e)}
        >
          저장
        </button> */}
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

const ProfileEditForm = styled.div`
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
