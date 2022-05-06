import styled from "styled-components";
import React, { useEffect, useState } from "react";
import LeftArrow from "@/static/step/Vector 3.svg";
import Navigator from "@components/navigator";
import FileUploadIcon from "@/pages/file-upload/assets/file-upload-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { client } from "@/lib/api";

const FileUploadPageBlock = styled.div`
  padding: 28px 23px 0 23px;
  .header-pagination {
    display: flex;
    align-items: center;
    margin-bottom: 44px;
    div:nth-child(2) {
      text-align: center;
      width: 100%;
      font-weight: bold;
    }
    .left-arrow {
      cursor: pointer;
    }
  }
  form {
    header {
      margin-bottom: 20px;

      > p {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0.5em;
      }
      .video-file-upload {
        display: flex;
        align-items: center;
        &.error {
          border: 1px solid red;
          color: red;
        }
        .video-info {
          display: flex;
          flex: 1;
          font-size: 14px;
          justify-content: space-between;
          padding: 0.7em 1em;
          border-radius: 8px;
          border: 1px solid #c4c4c4;
          input {
            border: none;
            outline: none;
          }
          &.error {
            border: 1px solid red;
            color: #f3576c;
            input {
              color: #f3576c;
            }
            span {
              color: #f3576c;
            }
          }
          span {
            color: #878787;
          }
        }

        .filebox {
          margin-left: 1em;
          > label {
            cursor: pointer;
          }
          input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
        }
      }
      .video-file-upload-error {
        color: #f3576c;
        margin: 8px 0 0 6px;
        font-size: 12px;
      }
    }
    main {
      margin-bottom: 25px;
      .video-title {
        margin-bottom: 40px;
        > p {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        input {
          outline: none;
          padding: 0.65em 1em;
          font-size: 14px;
          border-radius: 8px;
          border: 1px solid #c4c4c4;
          width: 100%;
          box-sizing: border-box;
          &::placeholder {
            font-size: 14px;
            color: #878787;
          }
        }
      }
      .video-description {
        margin-bottom: 22px;
        > p {
          font-weight: bold;
          margin-bottom: 0.5em;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 12px;
            font-weight: 300;
            color: #878787;
          }
        }
        textarea {
          outline: none;
          padding: 0.8em 1em;
          border-radius: 8px;
          border: 1px solid #c4c4c4;
          width: 100%;
          height: 90px;
          box-sizing: border-box;
          resize: none;
          font-size: 14px;
          &::placeholder {
            font-size: 14px;
            color: #878787;
          }
        }
      }
      .video-thumnail {
        > p {
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 5px;
        }
        &-image {
          width: 102px;
          height: 136px;
          background: ${(props) =>
            props.thumbnailSrc
              ? `url(${props.thumbnailSrc})`
              : "url(https://via.placeholder.com/136x102.png)"};
          background-position: center;
          background-repeat: no-repeat;
          background-size: ${(props) =>
            props.thumbnailSrc ? `contain` : "cover"};
        }
        .filebox2 {
          margin-top: 5px;
          > label {
            font-size: 12px;
            padding: 0.2em 0.4em;
            color: white;
            background: #5dccc6;
            border-radius: 4px;
            cursor: pointer;
          }
          input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
        }
      }
    }

    .submit-button-box {
      button {
        position: fixed;
        bottom: 85px;
        left: 5%;
        outline: none;
        border: none;
        padding: 0.5em 0;
        width: 90%;
        height: 50px;
        color: white;
        background: #c4c4c4;
        border-radius: 8px;
        cursor: pointer;
        &.selected {
          background: #5dccc6;
        }
        @media screen and (min-width: 800px) {
          width: 98%;
          left: 1%;
        }
      }
    }
  }
`;

const FileUploadPage = ({ embed }) => {
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [selectedThumbnailFile, setSelectedThumbnailFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFileError, setVideoFileError] = useState("");
  const useremail = useSelector(({ user }) => user.user?.email);
  const [thumbnailSrc, setThumbnailSrc] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");

  const onChangeVideoFile = (e) => {
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    if (file.type !== "video/mp4" || fileExt !== "mp4") {
      setVideoFileError("mp4 파일만 업로드 가능합니다.");
      return;
    }
    setSelectedVideoFile(file);
    setVideoFileError(null);
  };

  const onChangeEmbedUrl = (e) => {
    setEmbedUrl(e.target.value);
    const youtubeEmd = e.target.value;
    const result = youtubeEmd.includes("youtube.com/watch?v=");
    if (result === false) {
      setVideoFileError("유튜브 영상 주소만 업로드 가능합니다!");
      return;
    }
    setVideoFileError(null);
  };

  const onChangeThumbnailFile = (e) => {
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      fileExt !== "jpg" &&
      fileExt !== "png"
    ) {
      alert("jpg, png 파일만 업로드 가능합니다.");
      return;
    }

    setSelectedThumbnailFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setThumbnailSrc(reader.result);
        resolve();
      };
    });
  };

  const onChangeVideoTitle = (e) => {
    setVideoTitle(e.target.value);
    if (e.target.value.length > 10) {
      setVideoTitle(e.target.value.slice(0, 10));
    }
  };

  const onChangeVideoDescription = (e) => {
    setVideoDescription(e.target.value);
    if (e.target.value.length > 80) {
      setVideoDescription(e.target.value.slice(0, 80));
    }
  };

  const submitVideoFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (!embed) {
      const info = {
        email: "pm5555pm@naver.com",
        title: videoTitle,
        content: videoDescription,
        videoUrl: "",
        thumbUrl: "",
        videoType: "",
      };
      formData.append("videoFile", selectedVideoFile);
      formData.append("thumbFile", selectedThumbnailFile);
      formData.append(
        "info",
        new Blob([JSON.stringify(info)], { type: "application/json" })
      );

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      const result = await client.post(
        "/api/videos/upload/direct",
        formData,
        config
      );
      console.log(result);
    } else if (embed) {
      const result = await client.post("/api/videos/upload/embed", {
        email: "pm5555pm@naver.com",
        title: videoTitle,
        content: videoDescription,
        videoUrl: embedUrl,
        thumbUrl: "",
        videoType: "",
      });
      console.log(result);
    }
  };

  return (
    <>
      <FileUploadPageBlock thumbnailSrc={thumbnailSrc}>
        <div className="header-pagination">
          <div className="left-arrow">
            <img src={LeftArrow} alt="좌측화살표" />
          </div>
          <div>직접 영상 업로드</div>
        </div>
        <form>
          <header>
            <p>{embed ? "영상 임베드 링크" : "업로드영상"}</p>
            {/* <div>{showAlert && <div>업로드 진행률: {progress}</div>}</div> */}
            <div className="video-file-upload">
              <div
                className={videoFileError ? "video-info error" : "video-info"}
              >
                {embed ? (
                  <input
                    type="text"
                    placeholder="유튜브 주소를 적어주세요!"
                    value={embedUrl}
                    onChange={onChangeEmbedUrl}
                  />
                ) : (
                  <>
                    <span>
                      {selectedVideoFile
                        ? selectedVideoFile.name
                        : "파일을 업로드해주세요"}
                    </span>
                  </>
                )}
              </div>
              {!embed && (
                <div class="filebox">
                  <label htmlFor="file">
                    <img src={FileUploadIcon} alt="파일업로드아이콘" />
                  </label>
                  <input type="file" id="file" onChange={onChangeVideoFile} />
                </div>
              )}
            </div>
            <div className="video-file-upload-error">
              {videoFileError && videoFileError}
            </div>
          </header>
          <main>
            <div className="video-title">
              <p>영상 제목</p>
              <div>
                <input
                  type="text"
                  value={videoTitle}
                  onChange={onChangeVideoTitle}
                  placeholder="제목을 적어주세요"
                />
              </div>
            </div>
            <div className="video-description">
              <p>
                영상 설명<span>80자 이내</span>
              </p>
              <div>
                <textarea
                  type="text"
                  placeholder="내용을 적어주세요"
                  value={videoDescription}
                  onChange={onChangeVideoDescription}
                />
              </div>
            </div>
            {!embed && (
              <div className="video-thumnail">
                <p>썸네일 이미지</p>
                <div>
                  <div className="video-thumnail-image" />
                </div>
                <div className="filebox2">
                  <label htmlFor="file2">썸네일 이미지 변경</label>
                  <input
                    type="file"
                    id="file2"
                    onChange={onChangeThumbnailFile}
                  />
                </div>
              </div>
            )}
          </main>
          <div className={"submit-button-box"}>
            {embed ? (
              <button
                type="submit"
                className={
                  videoFileError === null &&
                  embedUrl &&
                  videoTitle &&
                  videoDescription &&
                  "selected"
                }
                onClick={(e) => submitVideoFile(e)}
                disabled={
                  videoFileError === null &&
                  embedUrl &&
                  videoTitle &&
                  videoDescription
                    ? false
                    : true
                }
              >
                업로드 하기
              </button>
            ) : (
              <button
                type="submit"
                className={
                  selectedVideoFile &&
                  videoTitle &&
                  videoDescription &&
                  thumbnailSrc &&
                  "selected"
                }
                onClick={(e) => submitVideoFile(e)}
                disabled={
                  selectedVideoFile &&
                  videoTitle &&
                  videoDescription &&
                  thumbnailSrc
                    ? false
                    : true
                }
              >
                업로드 하기
              </button>
            )}
          </div>
        </form>
      </FileUploadPageBlock>
      <Navigator />
    </>
  );
};

export default FileUploadPage;
