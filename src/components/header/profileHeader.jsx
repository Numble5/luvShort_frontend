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

  // const fetchUserData = async () => {
  //   try {
  //     const result = await request("/api/user/userIdx", "get");
  //     setUserInfo(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const fetchLoginUserData = async () => {
  //   try {
  //     const tempemail = "kjy1@naver.com";
  //     // const result = await request(`/api/user/${user.email}`, "get");
  //     const result = await request(`/api/user/${tempemail}`, "get");
  //     console.log(result);
  //     setUserInfo(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   if (userIdx) {
  //     fetchUserData();
  //   } else {
  //     fetchLoginUserData();
  //   }
  // }, [userIdx, user]);

  useEffect(() => {
    const tempuserInfo = {
      nickname: "랄랄",
      email: "alswlkku@gmail.com",
      profileImg:
        "data:image/jpeg;base64,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",
      city: "부산시",
      district: "북구",
      age: "19970502",
      genderType: "FEMALE",
      interests: ["스포츠", "여행"],
    };
    setUserInfo(tempuserInfo);
  }, []);

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
