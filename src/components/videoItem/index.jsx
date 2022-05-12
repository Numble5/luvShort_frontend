import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import calDate from "@/utils/calDate";
import { ChattingModal } from "../common/modal";
import { useSelector } from "react-redux";
import { toggleLiked } from "@/utils/toggleHeartState";
import { useEffect } from "react";

const VideoItem = ({
  video: {
    video_idx,
    title,
    heart,
    thumbnailUrl,
    createdDate,
    uploader: { user_idx, nickname, profileImgUrl },
  },
  type,
}) => {
  const date = calDate(createdDate);
  const { email } = useSelector(({ user }) => user.user);
  const [heartState, setHeartState] = useState(heart);
  const [modal, setModal] = useState(false);

  const toggleModalOk = () => {
    setModal(false);
    setHeartState(false);
  };

  const toggleModalClose = () => {
    setModal(false);
    setHeartState(true);
  };

  const toggleModalInterestPage = () => {
    setModal(false);
    window.location.replace("/liked");
  };

  return (
    <StyledLi key={video_idx}>
      {modal ? (
        type === "interest" ? (
          <ChattingModal
            title={"해당 영상을 관심영상에서 삭제할까요?"}
            description={"*취소해도 상대방에게 간 알림은 회수되지 않습니다."}
            leftButton={"아니요"}
            leftFunction={toggleModalClose}
            rightButton={"네, 삭제할래요"}
            rightFunction={toggleModalInterestPage}
          />
        ) : (
          <ChattingModal
            title={"하트를 취소할까요?"}
            description={"*취소해도 상대방에게 간 알림은 회수되지 않습니다."}
            leftButton={"아니요"}
            leftFunction={toggleModalClose}
            rightButton={"취소하기"}
            rightFunction={toggleModalOk}
          />
        )
      ) : (
        <></>
      )}
      <Link to={`/${video_idx}`} className="thumbnails">
        <img src={thumbnailUrl} alt="썸네일 이미지" />
      </Link>
      <div className="wrapper">
        <div className="info_wrapper">
          <Link to={`/mypage/${user_idx}`} className="user_wrapper">
            <UserProfileImgWrpper profileImgUrl={profileImgUrl} />
            <span>{nickname}</span>
          </Link>
          <div className="video_info">
            <span>{date}</span>
            {heartState ? (
              <img
                src="/assets/fullheart.svg"
                onClick={({ target }) => {
                  toggleLiked({
                    target,
                    heartState,
                    setModal,
                    setHeartState,
                    email,
                  });
                }}
                data-id={video_idx}
                alt="하트"
              />
            ) : (
              <img
                src="/assets/heart.svg"
                onClick={({ target }) => {
                  toggleLiked({
                    target,
                    heartState,
                    setModal,
                    setHeartState,
                    email,
                  });
                }}
                data-id={video_idx}
                alt="빈하트"
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
    cursor: pointer;
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
