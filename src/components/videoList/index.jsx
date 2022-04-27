import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoItem from "../videoItem.jsx";
import request from "@/api/request";

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    try {
      const result = await request("/api/videos", "get");
      console.log(result);

      setVideos([...videos, ...result]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <VideoListWrapper>
      <h2 className="sr-only">영상리스트</h2>
      <StyledUl>
        {videos?.map((video) => {
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
