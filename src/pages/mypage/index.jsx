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
import { changeModalTrue } from "@/redux/reducers/modal";
import { UploadModal } from "@/components/common/modal";
import ModalBackground from "@/components/modalBackground";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(({ user }) => user.user);
  const [userInfo, setUserInfo] = useState({ interests: [] });
  const [videos, setVideos] = useState([]);

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
            rightComponent={<ProfileTopButton>로그아웃</ProfileTopButton>}
            topPx={"19px"}
          />
          <Header type={"MY"} userInfo={userInfo} />
          {videos.length === 0 ? (
            <Upload>
              <img src={upload} alt="업로드" />
              <div>
                새로운 영상을
                <br /> 업로드해보세요!
              </div>
            </Upload>
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
