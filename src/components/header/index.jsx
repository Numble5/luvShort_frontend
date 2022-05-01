import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Union from "./assets/Union.svg";

const Header = () => {
  const user = useSelector(({ user }) => user);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <h1>
          <img src="assets/logo+name(white).svg" alt="로고" />
          <span className="sr-only">럽쇼츠</span>
        </h1>
        {user ? (
          <div className="header__userProfile">
            <span>{user.nickname}</span>
            <div className="profile__img">
              {/* <img src={user.thumbsnail} alt="프로필 이미지" /> */}
            </div>
          </div>
        ) : (
          <></>
        )}
      </HeaderWrapper>
      <HeaderGreeting>
        {user.user ? (
          <div>
            <span className="greeting_bold">{user.nickname}</span>
            <span className="greeting_mid">님,</span>
          </div>
        ) : (
          <div className="greeting_mid">로그인후,</div>
        )}
        <div className="greeting_mid">짧은 영상을 업로드하고</div>
        <div className="greeting_mid">신개념 랜선 소개팅을 경험해 보세요!</div>
        <Link to="">{`업로드 하러가기`}</Link>
      </HeaderGreeting>
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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .header__userProfile {
    > span {
      color: #d4d4d4;
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

  a {
    font-size: 16px;
    display: block;
    margin-top: 10px;
    color: #5dccc6;
  }
`;
