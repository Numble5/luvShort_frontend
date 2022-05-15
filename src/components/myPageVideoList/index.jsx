import { changeModalTrue } from "@/redux/reducers/modal";
import calDate from "@/utils/calDate";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EditDeletedModal, UploadModal } from "../common/modal";
import ModalBackground from "../modalBackground";

import add from "./assets/add.svg";
import upload from "./assets/upload.svg";

const MyPageVideoList = ({ videos }) => {
  const [id, setId] = useState();
  const [isUpload, setIsUpload] = useState(false);
  const dispatch = useDispatch();

  const editVideo = ({ target }) => {
    const id = target.dataset.id;
    setId(id);
    dispatch(changeModalTrue());
    setIsUpload(false);
  };

  const openUploadModal = () => {
    setIsUpload(true);
    dispatch(changeModalTrue());
  };

  return (
    <>
      {isUpload ? (
        <ModalBackground children={<UploadModal />} />
      ) : (
        <EditDeletedModal id={id} />
      )}
      <StyledUl>
        <UploadItem>
          <button onClick={openUploadModal}>
            <img src={upload} alt="업로드 버튼" />
            <div>
              새로운 영상을 <br />
              업로드해보세요!
            </div>
          </button>
        </UploadItem>
        {videos.map(
          ({
            video_idx,
            videoUrl,
            createdDate,
            title,
            thumbnailUrl,
            uploader: { profileImgUrl, nickname },
          }) => (
            <VideoItem key={video_idx}>
              <Link to={`/${video_idx}`} className="thumbnails">
                <img src={thumbnailUrl} alt="썸네일 이미지" />
              </Link>
              <div className="wrapper">
                <div className="info_wrapper">
                  <div className="user_wrapper">
                    <UserProfileImgWrpper profileImgUrl={profileImgUrl} />
                    <span>{nickname}</span>
                  </div>
                  <div className="video_info">
                    <span>{calDate(createdDate)}</span>
                    <button onClick={({ target }) => editVideo({ target })}>
                      <img data-id={video_idx} src={add} alt="추가" />
                    </button>
                  </div>
                </div>
                <div className="item_title">{title}</div>
              </div>
            </VideoItem>
          )
        )}
      </StyledUl>
    </>
  );
};
export default MyPageVideoList;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const UploadItem = styled.li`
  width: 172px;
  height: 320px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  position: relative;

  button {
    width: 100%;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);

    * {
      color: #c4c4c4;
    }
  }
`;

const VideoItem = styled.li`
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
    z-index: -1;
    top: 0;
    left: 0;

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
    padding-top: 8px;
  }

  .user_wrapper {
    display: flex;
    align-items: center;

    span {
      width: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .video_info {
    display: flex;
    align-items: center;
    button {
      width: 15px;
      margin-left: 10px;
      background: transparent;
      background: red;
      border: none;
      position: relative;

      img {
        position: absolute;
        top: -4px;
        left: -6px;
        width: 20px;
      }
    }
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
  border: 1px solid #5dccc6;
  margin-right: 7px;
  background-image: url(${(props) => props.profileImgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;
