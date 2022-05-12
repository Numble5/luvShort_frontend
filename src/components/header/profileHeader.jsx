import request from "@/api/request";
import { calAge } from "@/utils/calAge";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProfileCategory } from "../common/categories";
import TitlePrevHeader from "../common/titlePrevHeader";

const ProfileHeader = ({ type }) => {
  const userIdx = useLocation().pathname.split("mypage")[1].slice(1);
  const user = useSelector(({ user }) => user.user);

  const [userInfo, setUserInfo] = useState({
    nickname: "",
    email: "",
    profileImg: "",
    city: "",
    district: "",
    age: "",
    genderType: "",
    interests: [],
  });

  const fetchUserData = async () => {
    try {
      const result = await request(`/api/user/${userIdx}`, "get");
      setUserInfo(result);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchLoginUserData = async () => {
    try {
      const result = await request(`/api/user/${user.email}`, "get");

      setUserInfo(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (userIdx) {
      fetchUserData();
    } else {
      fetchLoginUserData();
    }
  }, [userIdx, user]);

  return (
    <>
      {userIdx ? (
        <TitlePrevHeader
          title={type}
          background={"black"}
          rightComponent={<button>메시지</button>}
        />
      ) : (
        <TitlePrevHeader
          title={type}
          background={"black"}
          rightComponent={<ProfileTopButton>로그아웃</ProfileTopButton>}
          topPx={"19px"}
        />
      )}
      <ProfileWrapper>
        <div className="profile_info">
          <div className="profile_info-Imgwrapper">
            <img src={userInfo.profileImg} alt="프로필 이미지" />
          </div>
          <div className="profile_infoType">
            <div className="profile_infoType-nickname">{userInfo.nickname}</div>
            <div className="profile_infoType-others">{`${calAge(
              userInfo.age
            )}세/${userInfo.genderType === "FEMALE" ? "여" : "남"}/${
              userInfo.city
            } ${userInfo.district}`}</div>
          </div>
          <div>
            {userIdx ? (
              <ProfileResult result={"매칭성공"} className="profile_side">
                매칭성공
              </ProfileResult>
            ) : (
              <Link to="/mypage/edit" className="profile_side-edit">
                프로필편집
              </Link>
            )}
          </div>
        </div>
        <ProfileCategory categoryList={userInfo.interests} />
        <div> 소개글 </div>
      </ProfileWrapper>
    </>
  );
};
export default ProfileHeader;

const ProfileTopButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-weight: 600;
`;

const ProfileWrapper = styled.div`
  .profile_side-edit,
  .profile_info {
    * {
      color: white;
    }
  }

  .profile_info {
    display: flex;
    align-items: center;
    width: 93%;
    justify-content: space-between;
    margin: 0 auto;
  }

  .profile_infoType {
    flex: 2 1 0;

    .profile_infoType-nickname {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .profile_infoType-others {
      font-size: 15px;
    }
  }

  .profile_info-Imgwrapper {
    width: 70px;
    height: 70px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    margin-right: 5px;
    background-color: white;

    > img {
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .profile_side-edit {
    background-color: #5dccc6;
    border: none;
    border-radius: 5px;
    padding: 2px 8px;
  }
`;

export const ProfileResult = styled.div`
background-color:${({ result }) =>
  result === "매칭성공"
    ? "#F3576C;"
    : result === "하트없음"
    ? "#979797;"
    : "#5DCCC6;"}
  border-radius: 5px;
  padding: 2px 8px;
`;
