import { changeModalTrue } from "@/redux/reducers/modal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = ({ userInfo }) => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const openUploadModal = () => {
    dispatch(changeModalTrue());
  };

  return (
    <>
      <HeaderWrapper>
        <h1>
          <img src="assets/logo+name(white).svg" alt="로고" />
          <span className="sr-only">럽쇼츠</span>
        </h1>
        {userInfo ? (
          <Link to="/mypage" className="header__userProfile">
            <span>{userInfo.nickname}</span>
            <div className="profile__img">
              <img src={userInfo.profileImg} alt="프로필 이미지" />
            </div>
          </Link>
        ) : (
          <></>
        )}
      </HeaderWrapper>
      <HeaderGreeting>
        {user.user ? (
          <div>
            <span className="greeting_bold">{user.user.nickname}</span>
            <span className="greeting_mid">님,</span>
          </div>
        ) : (
          <div className="greeting_mid">로그인후,</div>
        )}
        <div className="greeting_mid">짧은 영상을 업로드하고</div>
        <div className="greeting_mid">신개념 랜선 소개팅을 경험해 보세요!</div>
        <button onClick={openUploadModal}>업로드 하러가기 ▶</button>
      </HeaderGreeting>
    </>
  );
};

export default MainHeader;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .header__userProfile {
    display: flex;
    align-items: center;

    > span {
      color: #d4d4d4;
    }
  }

  .profile__img {
    width: 30px;
    height: 30px;
    overflow: hidden;
    position: relative;
    margin-left: 5px;
    border-radius: 50%;
    background-color: white;

    img {
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const HeaderGreeting = styled.div`
  margin: 40px auto 0 auto;
  width: 90%;

  .greeting_bold,
  .greeting_mid {
    font-weight: 700;
    line-height: 26px;
    color: #e6e6e6;
  }
  .greeting_bold {
    font-size: 21px;
  }

  .greeting_mid {
    font-size: 18px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin-top: 10px;
    color: #5dccc6;
  }
`;
