import React, { useState } from "react";
import Header from "@/components/header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import request from "@/api/request";
import VideoList from "@/components/videoList";

const Profile = () => {
  const userIdx = useLocation().pathname.split("mypage")[1].slice(1);
  const user = useSelector(({ user }) => user);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ interests: [] });
  const [videos, setVideos] = useState([]);

  const fetchUserData = async () => {
    try {
      const result = await request(`/api/user/profile/${userIdx}`, "get", {
        userEmail: user.email,
      });

      if (result) {
        const { isMatched, profile, videos } = result;
        setUserInfo({ ...profile, isMatched });
        setVideos(videos);
      } else {
        navigate("/wrong");
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
      <TitlePrevHeader
        title={"프로필"}
        background={"black"}
        rightComponent={<button>메시지</button>}
      />
      <Header type={"프로필"} userInfo={userInfo} />
      <VideoList videos={videos} />
    </>
  );
};

export default Profile;
