import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import request from "@/api/request";

import TitlePrevHeader from "@components/common/titlePrevHeader";
import Header from "@components/header";
import Navigator from "@components/navigator";
import VideoList from "@components/videoList";
import { changeNavigator } from "@redux/reducers/navigator";
import upload from "./assets/upload.svg";
import Spinner from "@/components/common/Spinner";
import { changeModalFalse, changeModalTrue } from "@/redux/reducers/modal";
import { ChattingModal, UploadModal } from "@/components/common/modal";
import ModalBackground from "@/components/modalBackground";
import axios from "axios";
import { Link } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(({ user }) => user.user);
  const [userInfo, setUserInfo] = useState({ interests: [] });
  const [videos, setVideos] = useState([]);
  const [isLogout, setIsLogout] = useState(false);

  const handleModal = () => {
    dispatch(changeModalTrue());
  };

  const handleLogout = () => {
    setIsLogout(true);
    dispatch(changeModalTrue());
  };

  const cancelLogout = () => {
    setIsLogout(false);
    dispatch(changeModalFalse());
  };

  const SignOut = async () => {
    try {
    } catch (e) {}
  };

  const fetchData = async () => {
    try {
      const { profile, videos } = await request("/api/user/profile", "get", {
        userEmail: user.email,
      });

      setUserInfo(profile);
      setVideos(videos);
      setIsLoading(false);
    } catch (e) {}
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (!isLogout) {
      dispatch(changeModalFalse());
    }
    dispatch(changeNavigator("mypage"));
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <TitlePrevHeader
            title={"MY"}
            background={"black"}
            rightComponent={
              <ProfileTopButton onClick={handleLogout}>
                {/* // <a href="https://kauth.kakao.com/oauth/logout?client_id=cb35cf8c852a69a0ff7192f0f1ca071d&logout_redirect_uri=http://localhost:3000/oauth/logout/kakao"> */}
                로그아웃
                {/* </a> */}
              </ProfileTopButton>
            }
            topPx={"19px"}
          />
          <Header type={"MY"} userInfo={userInfo} />

          {isLogout ? (
            <ChattingModal
              title={"로그아웃 할까요?"}
              description={""}
              leftButton={"취소"}
              leftFunction={cancelLogout}
              rightButton={"로그아웃하기"}
              rightFunction={SignOut}
            />
          ) : (
            <ModalBackground children={<UploadModal />} />
          )}
          {videos.length === 0 ? (
            <>
              <Upload onClick={handleModal}>
                <img src={upload} alt="업로드" />
                <div>
                  새로운 영상을
                  <br /> 업로드해보세요!
                </div>
              </Upload>
            </>
          ) : (
            <VideoList videos={videos} />
          )}
        </>
      )}
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

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

const Upload = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 20%;
  margin-left: 50%;
  transform: translateX(-50%);
`;
