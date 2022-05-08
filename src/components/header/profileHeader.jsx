import React from "react";
import { useSelector } from "react-redux";
import TitlePrevHeader from "../common/titlePrevHeader";

const ProfileHeader = () => {
  const user = useSelector(({ user }) => user);

  return (
    <>
      <TitlePrevHeader title={"MY"} background={"black"} />
      <div>
        <div>
          <img src={user.thumbnail} alt="프로필 이미지" />
          <div>
            <div>{user.nickname}</div>
            <div>{`${user.gender}/${user.city}/${user.district}`}</div>
          </div>
        </div>
        <div>{/* 카테고리 출력 */}</div>
        <div>{/* 소개글 */}</div>
      </div>
    </>
  );
};
export default ProfileHeader;
