import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import request from "@/api/request";

import TitlePrevHeader from "@components/common/titlePrevHeader";
import Header from "@components/header";
import Navigator from "@components/navigator";
import { changeNavigator } from "@redux/reducers/navigator";
import upload from "./assets/upload.svg";
import Spinner from "@/components/common/Spinner";
import { changeModalFalse, changeModalTrue } from "@/redux/reducers/modal";
import { ChattingModal, UploadModal } from "@/components/common/modal";
import ModalBackground from "@/components/modalBackground";
import axios from "axios";
import { Link } from "react-router-dom";
import MyPageVideoList from "@/components/myPageVideoList";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(({ user }) => user.user);
  const [userInfo, setUserInfo] = useState({ interests: [] });
  const [videos, setVideos] = useState([]);
  const [isLogout, setIsLogout] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const handleModal = () => {
    setIsUpload(true);
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
                로그아웃
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
            />
          ) : isUpload ? (
            <ModalBackground children={<UploadModal />} setItem={setIsUpload} />
          ) : (
            <></>
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
            <VideoListWrapper>
              <MyPageVideoList videos={videos} />
            </VideoListWrapper>
          )}
        </>
      )}
      <Bottom />
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

const VideoListWrapper = styled.div`
  width: 97%;
  margin: 20px auto 10px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 80px;
`;
