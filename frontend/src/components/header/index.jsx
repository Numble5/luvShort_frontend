import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo>
        <img src="assets/logo+name.svg" alt="로고" />
        <span className="sr-only">럽쇼츠</span>
      </HeaderLogo>
      <HeaderGreeting>
        <div>
          <span className="greeting_bold">빙고</span>
          <span className="greeting_mid">님,</span>
        </div>
        <div className="greeting_mid">짧은 영상을 업로드하고</div>
        <div className="greeting_mid">신개념 랜선 소개팅을 경험해 보세요!</div>
        <Link to="">{`> 업로드 하러가기`}</Link>
      </HeaderGreeting>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin-top: 20px;
`;

const HeaderLogo = styled.h1`
  text-align: right;
  margin-right: 5%;
`;
const HeaderGreeting = styled.div`
  margin-left: 5%;
  margin-top: 28px;

  .greeting_bold,
  .greeting_mid {
    font-weight: 700;
    line-height: 26px;
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
  }
`;
