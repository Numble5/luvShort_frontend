import React, { useEffect } from "react";
import styled from "styled-components";
import VideoItem from "../videoItem.jsx";

const videos = [
  {
    idx: 1212,
    thumbnailUrl: "",
    title: "임시 타이틀입니다.",
    videoUrl: "sadldsal",
    profileImgUrl:
      "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_262/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
    nickname: "김첨지",
    uploadeDate: "1시간전",
  },
  {
    idx: 1212,
    thumbnailUrl: "",
    title: "임시 타이틀입니다.",
    videoUrl: "sadldsal",
    profileImgUrl:
      "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_262/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
    nickname: "김첨지",
    uploadeDate: "1시간전",
  },
  {
    idx: 1212,
    thumbnailUrl: "",
    title: "임시 타이틀입니다.",
    videoUrl: "sadldsal",
    profileImgUrl:
      "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_262/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
    nickname: "김첨지",
    uploadeDate: "1시간전",
  },
];

const VideoList = (props) => {
  return (
    <VideoListWrapper>
      <h2 className="sr-only">영상리스트</h2>
      <StyledUl>
        {videos?.map((video) => (
          <VideoItem key={video.idx} video={video} />
        ))}
      </StyledUl>
    </VideoListWrapper>
  );
};
export default VideoList;

const VideoListWrapper = styled.section`
  padding-bottom: 90px;
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
