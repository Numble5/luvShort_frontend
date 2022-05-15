import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import heart from "./assets/heart.svg";

const VideoItem = ({
  video: {
    video_idx,
    title,
    nickname,
    thumbnailUrl,
    profileImgUrl,
    updatedDate,
  },
}) => {
  const calUpdateDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    console.log(updatedDate);
    let result = "1시간";
    return result;
  };

  const date = calUpdateDate();

  return (
    <StyledLi key={video_idx}>
      <Link to={`/${video_idx}`}></Link>
      <div className="wrapper">
        <div className="thumbnail_wrapper">
          {/* <img src={thumbnailUrl} alt={`${nickname}동영상`} /> */}
        </div>
        <div className="info_wrapper">
          <div className="user_wrapper">
            <UserProfileImgWrpper profileImgUrl={profileImgUrl} />
            <span>{nickname}</span>
          </div>
          <div className="video_info">
            <span>{date}전</span>
            <span>
              <img src={heart} alt="하트"></img>
            </span>
          </div>
        </div>
        <div className="item_title">{title}</div>
      </div>
    </StyledLi>
  );
};

export default VideoItem;

const StyledLi = styled.li`
  background-color: #e3e3e3;
  position: relative;
  min-height: 260px;
  min-width: 158px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
    div {
      display: block;
      background-color: green;
      width: 100%;
      height: 100%;
    }
  }

  .wrapper {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 65px;
    bottom: 0;
  }

  .info_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .video_info,
  .user_wrapper,
  .item_title {
    color: #ffffff;
    > span {
      color: #ffffff;
    }
  }

  .user_wrapper {
    margin-left: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;

    > span {
      margin-left: 2px;
    }
  }

  .video_info {
    display: flex;
    align-items: center;

    > span {
      font-size: 13px;
      > img {
        width: 28px;
        padding: 5px;
      }
    }
  }

  .item_title {
    font-size: 14px;
    margin: 0 5px;
  }
`;

const UserProfileImgWrpper = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${(props) => props.profileImgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #f3576c;
`;
