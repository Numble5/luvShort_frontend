import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
];
const VideoList = (props) => {
  return (
    <VideoListWrapper>
      <h2 className="sr-only">영상리스트</h2>
      <StyledUl>
        {videos?.map((video) => {
          return (
            <StyledLi key={video.idx}>
              <Link to={`/${video.videoUrl}`}>
                <div className="info_wrapper">
                  <div className="user_wrapper">
                    {/* <img src={video.profileImgUrl} alt={`${video.nickname}`} /> */}
                    <span>{video.nickname}</span>
                  </div>
                  <div className="video_info">
                    <span>{video.uploadeDate}</span>
                    <span>
                      <img src="" alt="하트"></img>
                    </span>
                  </div>
                </div>
                <div>{video.title}</div>
              </Link>
            </StyledLi>
          );
        })}
      </StyledUl>
    </VideoListWrapper>
  );
};
export default VideoList;

const VideoListWrapper = styled.section``;

const StyledUl = styled.ul``;
const StyledLi = styled.li``;
