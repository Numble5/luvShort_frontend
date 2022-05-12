import TitlePrevHeader from "@/components/common/titlePrevHeader";
import Header from "@/components/header";
import Navigator from "@/components/navigator";
import { changeNavigator } from "@/redux/reducers/navigator";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
  }, []);

  return (
    <>
      <TitlePrevHeader
        title={"MY"}
        background={"black"}
        rightComponent={<ProfileTopButton>로그아웃</ProfileTopButton>}
        topPx={"19px"}
      />
      {/* <Header type={"MY"} /> */}
      <Navigator />
    </>
  );
};

export default MyPage;

const ProfileTopButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-weight: 600;
`;
