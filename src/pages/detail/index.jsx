import request from "@/api/request";
import Navigator from "@components/navigator";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { FixedUploadBtn } from "@components/common/button";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import calDate from "@/utils/calDate";
import { Cateogories } from "@/components/common/categories";
import styled from "styled-components";

const Detail = (props) => {
  const [, pathname] = useLocation().pathname.split("/");
  const [videoInfo, setVideoInfo] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const changeShowContent = () => {
    setShowContent(!showContent);
  };

  const fetchData = async () => {
    try {
      const data = await request(`/api/videos/${pathname}`, "get");
      setVideoInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Navigator />
      <TitlePrevHeader title={"View"} background={"black"} />
      <StyledDetail>
        <div className="videoInfo">
          <div className="videoInfo__user-info">
            <div className="videoInfo__img-wrapper">
              <img
                src={videoInfo?.uploader?.profileImgUrl}
                alt="프로필 이미지"
              />
            </div>
            <div>
              <span className="videoInfo_nickname">
                {videoInfo?.uploader?.nickname}
              </span>
              <ul className="videoInfo__category">
                {videoInfo?.categories.map((category) => (
                  <Cateogories category={category} />
                ))}
              </ul>
            </div>
          </div>
          <div className="videoInfo__heart">
            <img src="assets/heart.svg" alt="빈하트" />
          </div>
        </div>

        <div className="videoContent">
          <div>{videoInfo?.title}</div>
          <div className="videoCotent__left">
            {showContent ? (
              <button onClick={changeShowContent}>▴</button>
            ) : (
              <button onClick={changeShowContent}>▼</button>
            )}
            <div>{calDate(videoInfo?.createdDate)}</div>
          </div>
        </div>
        {showContent ? (
          <div className="videoContent_content">{videoInfo?.content}</div>
        ) : (
          <></>
        )}
      </StyledDetail>
      <VideoWrapper>
        <video>
          <source src={videoInfo?.videoUrl} />
        </video>
      </VideoWrapper>
    </section>
  );
};

export default Detail;

export const StyledDetail = styled.div`
  background-color: #3d3d3d;
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 20px;

  .videoInfo {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }

  .videoInfo__user-info {
    display: flex;
    align-items: center;

    .videoInfo_nickname {
      font-size: 16px;
      color: white;
    }
  }

  .videoInfo__category {
    margin-top: 5px;
    li {
      margin-right: 4px;
    }
  }

  .videoInfo__heart {
    img {
      width: 45px;
      height: 45px;
    }
  }

  .videoInfo__img-wrapper {
    width: 55px;
    height: 55px;
    background-color: red;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #f3576c;
    margin-right: 10px;

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
    }
  }

  .videoContent {
    display: flex;
    width: 90%;
    margin: 20px auto;
    justify-content: space-between;
    align-items: center;

    * {
      color: white;
    }
  }
  .videoCotent__left {
    display: flex;
    align-items: center;

    > button {
      font-size: 16px;
      background-color: transparent;
      border: none;
      margin-right: 15px;
    }
  }

  .videoContent_content {
    width: 90%;
    margin: 0 auto;
    line-height: 1.5;
    color: #cecece;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
`;
