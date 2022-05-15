import user from "@/redux/reducers/user";
import React from "react";

import styled from "styled-components";
import Union from "./assets/Union.svg";
import MainHeader from "./mainHeader";
import ProfileHeader from "./profileHeader";

const Header = ({ type, userInfo }) => {
  return (
    <StyledHeader>
<<<<<<< HEAD
      <HeaderWrapper>
        <h1>
          <img src="assets/logo+name(white).svg" alt="로고" />
          <span className="sr-only">럽쇼츠</span>
        </h1>
        <div className="header__userProfile">
          <span>빙고</span>
          <div className="profile__img"></div>
        </div>
      </HeaderWrapper>
      <HeaderGreeting>
        <div>
          <span className="greeting_bold">빙고</span>
          <span className="greeting_mid">님,</span>
        </div>
        <div className="greeting_mid">짧은 영상을 업로드하고</div>
        <div className="greeting_mid">신개념 랜선 소개팅을 경험해 보세요!</div>
        <Link to="">{`업로드 하러가기`}</Link>
      </HeaderGreeting>
=======
      {type === "main" ? (
        <MainHeader userInfo={userInfo} />
      ) : (
        <ProfileHeader type={type} userInfo={userInfo} />
      )}
>>>>>>> develop
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding-top: 20px;
  width: 100%;
  min-height: 240px;

  margin: 0 auto;
  background-image: url(${Union});
  background-repeat: no-repeat;
  background-size: cover;
`;
