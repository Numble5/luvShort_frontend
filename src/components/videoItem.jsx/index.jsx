import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoItem = ({ video }) => {
  return (
    <StyledLi key={video.idx}>
      <Link to={`/${video.videoUrl}`}>
        <div className="info_wrapper">
          <div className="user_wrapper">
            <img src={video.profileImgUrl} alt={`${video.nickname}`} />
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
};

export default VideoItem;

const StyledLi = styled.li``;
