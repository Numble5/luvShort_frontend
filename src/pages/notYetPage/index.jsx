import Navigator from "@/components/navigator";
import { changeNavigator } from "@/redux/reducers/navigator";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotYetPage = () => {
  const [, pathname] = useLocation().pathname.split("/");
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
    dispatch(changeNavigator(pathname));
  }, []);

  return (
    <>
      <Navigator />
      <StyledNotYetPage>
        <div className="background"></div>
        <div className="modal">
          <div className="title">서비스 준비중입니다.</div>
          <div className="subtitle">*서비스 이용에 불편을 드려 죄송합니다.</div>
          <Link to="/">홈으로 가기</Link>
        </div>
      </StyledNotYetPage>
    </>
  );
};

export default NotYetPage;

const StyledNotYetPage = styled.div`
  .background {
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .modal {
    position: fixed;
    z-index: 20;
    background-color: white;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    border-radius: 10px;
    text-align: center;
    padding-top: 40px;

    overflow: hidden;

    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .subtitle {
      font-size: 15px;
      color: #f3576c;
    }

    a {
      display: block;
      margin-top: 30px;
      width: 100%;
      background-color: #5dccc6;
      border: none;
      padding: 20px 0;
      color: white;
    }
  }
`;
