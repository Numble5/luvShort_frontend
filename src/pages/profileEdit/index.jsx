import TitlePrevHeader from "@components/common/titlePrevHeader";
import Navigator from "@components/navigator";
import { changeNavigator } from "@redux/reducers/navigator";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProfileEdit = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
  }, []);

  return (
    <>
      <section>
        <TitlePrevHeader title={"프로필 편집"} background={"white"} />
        <div></div>
        <button>프로필 사진변경</button>

        <label>한줄 소개</label>
        <input placeholder="20자 이내로 작성해주세요." />
        <button>저장</button>
        <Link to="/manage">계정 관리</Link>
      </section>
      <Navigator />
    </>
  );
};

export default ProfileEdit;
