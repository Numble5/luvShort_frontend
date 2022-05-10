import request from "@/api/request";
import { calAge } from "@/utils/calAge";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProfileCategory } from "../common/categories";
import TitlePrevHeader from "../common/titlePrevHeader";

const ProfileHeader = ({ type }) => {
  const userIdx = useLocation().pathname.split("mypage")[1].slice(1);
  const user = useSelector(({ user }) => user);

  const [userInfo, setUserInfo] = useState({});

  const fetchUserData = async () => {
    try {
      const result = await request("/api/user/userIdx", "get");
      setUserInfo(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (userIdx) {
      fetchUserData();
    } else {
      setUserInfo(user);
    }
  }, [userIdx, user]);

  return (
    <>
      <TitlePrevHeader title={type} background={"black"} />

      {userInfo ? (
        <ProfileWrapper>
          <div>
            <img src={user.thumbnail} alt="프로필 이미지" />
            <div>
              <div>{user.nickname}</div>
              <div>{`${calAge(user.birthday)}세/${
                user.gender === "FEMALE" ? "여" : "남"
              }/${user.city} ${user.district}`}</div>
            </div>
          </div>
          <div>
            {userIdx ? (
              <div>매칭성공</div>
            ) : (
              <Link to="/mypage/edit">프로필편집</Link>
            )}
          </div>
          {/* <ProfileCategory /> */}
          <div>{/* 소개글 */}</div>
        </ProfileWrapper>
      ) : (
        // 404 페이지 보여줘야함
        <></>
      )}
    </>
  );
};
export default ProfileHeader;

export const ProfileWrapper = styled.div`
  * {
    color: white;
  }
`;
