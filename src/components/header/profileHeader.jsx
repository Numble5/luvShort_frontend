import React from "react";
import { calAge } from "@/utils/calAge";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProfileCategory } from "../common/categories";

const ProfileHeader = ({ type, userInfo }) => {
  return (
    <>
      <ProfileWrapper>
        <div className="profile_info">
          <div className="profile_info-Imgwrapper">
            <img src={userInfo.profileImg} alt="프로필 이미지" />
          </div>
          <div className="profile_infoType">
            <div className="profile_infoType-nickname">{userInfo.nickname}</div>
            <div className="profile_infoType-others">{`${calAge(
              userInfo.birthday
            )}세/${userInfo.gender === "FEMALE" ? "여" : "남"}/${
              userInfo.city
            } ${userInfo.district}`}</div>
          </div>
          <div className="profile_side-Wrapper">
            {type === "프로필" ? (
              <ProfileResult
                result={userInfo.isMatched}
                className="profile_side"
              >
                {userInfo.isMatched}
              </ProfileResult>
            ) : (
              <Link to="/mypage/edit" className="profile_side-edit">
                프로필 편집
              </Link>
            )}
          </div>
        </div>
        <ProfileCategory categoryList={userInfo.interests} />
        <div className="profile__introduce">
          {!userInfo.introduce
            ? "아직 한 줄 소개가 없습니다."
            : userInfo.introduce}
        </div>
      </ProfileWrapper>
    </>
  );
};
export default ProfileHeader;

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
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
  }

  .profile_infoType {
    flex: 2 1 0;

    .profile_infoType-nickname {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
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
    margin-right: 8px;
    background-color: white;

    > img {
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .profile_side-Wrapper {
    position: absolute;
    top: 0;
    right: 0;
  }

  .profile_side-edit {
    background-color: #5dccc6;
    border: none;
    border-radius: 5px;
    padding: 2px 8px;
  }

  .profile__introduce {
    color: white;
    width: 90%;
    margin: 20px auto 0 auto;
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
