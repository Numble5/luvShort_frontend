import { changeModalTrue } from "@/redux/reducers/modal";
import calDate from "@/utils/calDate";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EditDeletedModal, UploadModal } from "../common/modal";
import ModalBackground from "../modalBackground";
import MyVideoEdit from "../myVideoEdit";

import upload from "./assets/upload.svg";

const MyPageVideoList = ({ videos }) => {
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [isUpload, setIsUpload] = useState(false);
  const dispatch = useDispatch();

  const openUploadModal = () => {
    setIsUpload(true);
    dispatch(changeModalTrue());
  };

  return (
    <>
      {isUpload ? (
        <ModalBackground children={<UploadModal />} />
      ) : (
        <EditDeletedModal id={id} videoType={type} />
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
            videoType,
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
                    <MyVideoEdit
                      video_idx={video_idx}
                      videoType={videoType}
                      setId={setId}
                      setType={setType}
                      setIsUpload={setIsUpload}
                    />
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
  position: relative;

  .thumbnails {
    display: block;
    width: 100%;
    height: 240px;
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;

    img {
      display: block;
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 160%;
      min-height: 250px;
      z-index: -1;
      pointer-events: none;
    }
  }

  .wrapper {
    background-color: #3d3d3d;
    height: 80px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

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
      width: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
  border: 1px solid #5dccc6;
  margin-right: 7px;
  background-image: url(${(props) => props.profileImgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;
