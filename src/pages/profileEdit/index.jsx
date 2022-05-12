import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import InterestCategories from "@components/interests";
import ProfileForm from "@components/step1/ProfileForm";
import TitlePrevHeader from "@components/common/titlePrevHeader";
import Navigator from "@components/navigator";
import { changeNavigator } from "@redux/reducers/navigator";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  const navigate = useNavigate();

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
          <button className="profile__img-edit">프로필 사진변경</button>
        </div>

        <InterestCategories title={"관심사"} categories={user.user.interests} />

        {/* <ProfileForm /> */}
        <label>한줄 소개</label>
        <input placeholder="20자 이내로 작성해주세요." />
        <button type="submit" className="profile__save">
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
  background-color: red;
  width: 90%;
  margin: 0 auto;

  .profileEdit__img {
    margin-bottom: 20px;
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
