import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./assets/error_logo.svg";
import NotFound from "./assets/errorNotFound.svg";

const ErrorPage = () => {
  return (
    <ErrorBlock>
      <Header>
        <img src={Logo} alt="logo" />
      </Header>
      <Text>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>
          요청하신 페이지의 주소가 잘못 입력되었거나,
          <br />
          변경, 혹은 삭제되어 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소를 다시 한번 확인해주세요!
        </h3>
      </Text>
      <ErrorImage notFound={NotFound} />
      <StyledLink to="/">럽쇼츠 메인화면 바로가기</StyledLink>
    </ErrorBlock>
  );
};
export default ErrorPage;

const ErrorBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 65px;
  background-color: #3d3d3d;
  img {
    position: absolute;
    left: 5%;
    top: 20px;
  }
`;

const Text = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 115px; //Header 65px + top : 50px
  h1 {
    font-weight: 900;
    font-size: 60px;
    color: #f3576c;
  }
  h2 {
    font-weight: 700;
    font-size: 30px;
    color: #3d3d3d;
  }
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #3d3d3d;
    letter-spacing: 0.09em;
  }
`;

const ErrorImage = styled.div`
  width: 263px;
  height: 200px;
  background-image: url(${(props) => props.notFound});
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #5dccc6;

  text-align: center;
  line-height: 80px;
  font-weight: 700;
  font-size: 16px;
  color: white;
`;
