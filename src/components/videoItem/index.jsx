import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { debounce } from "lodash";

import request from "@/api/request";
import calDate from "@/utils/calDate";

const VideoItem = ({
  video: {
    video_idx,
    title,
    thumbnailUrl,
    createdDate,
    uploader: { nickname, profileImgUrl },
  },
}) => {
  const date = calDate(createdDate);

  const toggleLiked = debounce(async ({ target }) => {
    try {
      const id = target.parentNode.dataset.id;
      const result = await request(`/api/hearts/${id}`, "post");
    } catch (e) {
      console.log(e);
    }
  }, 200);

  return (
    <StyledLi key={video_idx}>
      <Link to={`/${video_idx}`}>
        <img src={thumbnailUrl} alt="썸네일 이미지" />
      </Link>
      <div className="wrapper">
        <div className="info_wrapper">
          <div className="user_wrapper">
            <UserProfileImgWrpper profileImgUrl={profileImgUrl} />
            <span>{nickname}</span>
          </div>
          <div className="video_info">
            <span>{date}</span>
            <img
              src="assets/heart.svg"
              onClick={toggleLiked}
              data-id={video_idx}
              alt="하트"
            />
          </div>
        </div>
        <div className="item_title">{title}</div>
      </div>
    </StyledLi>
  );
};

export default VideoItem;

const StyledLi = styled.li`
  width: 172px;
  height: 320px;

  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 5px;

  a {
    display: block;
    width: 100%;
    background-color: blue;
    height: 240px;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: auto;
      min-height: 240px;
      z-index: 0;
    }
  }

  .wrapper {
    background-color: #3d3d3d;
    height: 80px;

    * {
      color: white;
      font-size: 15px;
    }
  }

  .info_wrapper {
    display: flex;
    justify-content: space-between;

    padding: 0 4px;
  }

  .user_wrapper {
    display: flex;
    align-items: center;
  }

  .video_info {
    display: flex;
    align-items: center;
    span {
      margin-right: 2px;
    }
  }

  .item_title {
    margin: 10px 5px 10px 5px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const UserProfileImgWrpper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #f3576c;
  margin-right: 7px;
  background-image: url(${(props) => props.profileImgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;
