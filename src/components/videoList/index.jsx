import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoItem from "../videoItem.jsx";
import request from "@/api/request";
import { useSelector } from "react-redux";

const VideoList = ({ currentCategory }) => {
  const user = useSelector(({ user }) => user);

  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    try {
      const payload = {
        category1: user.interests[0],
        category2: user.interests[1],
        category3: user.interests[2],
        gender:
          currentCategory === "여자" || currentCategory === "남자"
            ? currentCategory
            : null,
        city: currentCategory === "우리동네" ? user.state : null,
        district: currentCategory === "우리동네" ? user.city : null,
      };

      const { data } = user.user
        ? await request("/api/videos/filter", "post", {}, payload)
        : await request("/api/videos", "get");

      setVideoList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentCategory]);

  return (
    <VideoListWrapper>
      <h2 className="sr-only">영상리스트</h2>
      <StyledUl>
        {videoList.map((video) => {
          return <VideoItem key={video.video_idx} video={video} />;
        })}
      </StyledUl>
    </VideoListWrapper>
  );
};
export default VideoList;

const VideoListWrapper = styled.section`
  padding-bottom: 100px;
`;

const StyledUl = styled.ul`
  @media ${({ theme }) => theme.mobile} {
    justify-content: space-around;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
