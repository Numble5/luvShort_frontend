import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { debounce } from "lodash";
import heart from "./assets/heart.svg";
import request from "@/api/request";
import calDate from "@/utils/calDate";

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
  const date = calDate(updatedDate);

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
        <div className="thumbnail_wrapper">
          {/* <img src={thumbnailUrl} alt={`${nickname}동영상`} /> */}
        </div>
        <div className="info_wrapper">
          <div className="user_wrapper">
            <UserProfileImgWrpper profileImgUrl={profileImgUrl} />
            <span>{nickname}</span>
          </div>
          <div className="video_info">
            <span>{date}</span>
            <span onClick={toggleLiked} data-id={video_idx}>
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

const StyledLi = styled.li``;

const UserProfileImgWrpper = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${(props) => props.profileImgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #f3576c;
`;
