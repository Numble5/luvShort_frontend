import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { debounce } from "lodash";

import request from "@/api/request";
import calDate from "@/utils/calDate";

const VideoItem = ({
  video: {
    video_idx,
    title,
    heart,
    thumbnailUrl,
    createdDate,
    uploader: { user_idx, nickname, profileImgUrl },
  },
}) => {
  const date = calDate(createdDate);
  const [heartState, setHeartState] = useState(heart);
  const [modal, setModal] = useState(false);

  const toggleLiked = debounce(async ({ target }) => {
    try {
      const id = target.dataset.id;

      if (heart) {
        // 트루면 삭제
        // setModal(true);
      } else {
        await request(`/api/hearts/${id}`, "post", {
          userEmail: "syhan97@naver.com",
        });
        setHeartState(true);
      }
    } catch (e) {
      console.log(e);
    }
  }, 200);

  return (
    <StyledLi key={video_idx}>
      {/* {modal ? <div>안녕하세요</div> : <></>} */}
      <Link to={`/${video_idx}`} className="thumbnails">
        <img src={thumbnailUrl} alt="썸네일 이미지" />
      </Link>
      <div className="wrapper">
        <div className="info_wrapper">
          <Link to={`mypage/${user_idx}`} className="user_wrapper">
            <UserProfileImgWrpper profileImgUrl={profileImgUrl} />
            <span>{nickname}</span>
          </Link>
          <div className="video_info">
            <span>{date}</span>
            {heartState ? (
              <img
                src="assets/fullheart.svg"
                onClick={toggleLiked}
                data-id={video_idx}
                alt="하트"
              />
            ) : (
              <img
                src="assets/heart.svg"
                onClick={toggleLiked}
                data-id={video_idx}
                alt="하트"
              />
            )}
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

  .thumbnails {
    display: block;
    width: 100%;
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
