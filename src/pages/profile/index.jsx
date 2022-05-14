import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import request from "@/api/request";
import VideoList from "@/components/videoList";
import Spinner from "@/components/common/Spinner";
import novideos from "./assets/novideos.svg";

const Profile = () => {
  const userIdx = useLocation().pathname.split("mypage")[1].slice(1);
  const user = useSelector(({ user }) => user);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({ interests: [] });
  const [videos, setVideos] = useState([]);

  const fetchUserData = async () => {
    try {
      const result = await request(`/api/user/profile/${userIdx}`, "get", {
        userEmail: user.user.email,
      });

      if (result !== "PROFILE_NOT_FOUND") {
        const { isMatched, profile, videos } = result;
        setUserInfo({ ...profile, isMatched });
        setVideos(videos);
        setIsLoading(false);
      } else {
        navigate("/error/404");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <TitlePrevHeader title={"프로필"} background={"black"} />
          <Header type={"프로필"} userInfo={userInfo} />

          {videos.length === 0 ? (
            <NoVideos back={novideos}>
              <div></div>
            </NoVideos>
          ) : (
            <VideoList videos={videos} />
          )}
        </>
      )}
    </>
  );
};

export default Profile;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

const NoVideos = styled.button`
  width: 100%;
  height: 110px;
  position: relative;

  div {
    width: 153px;
    height: 110px;
    background-image: url(${({ back }) => back});
    background-repeat: no-repeat;
    background-size: cover;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
