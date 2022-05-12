import React from "react";
import Navigator from "@components/navigator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeNavigator } from "@/redux/reducers/navigator";
import TitlePrevHeader from "@components/common/titlePrevHeader";

const AccountManage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
  }, []);

  return (
    <>
      <TitlePrevHeader title={"계정관리"} background={"white"} />

      <div>이정보는 공개 프로필에 포함되지 않습니다</div>
      <div>{/* 어떻게 가입했는지 */}</div>
      <div>{/* 가입날짜 */}</div>
      <Navigator />
      <button>탈퇴하기</button>
    </>
  );
};

export default AccountManage;
