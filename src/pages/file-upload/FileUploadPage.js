import styled from "styled-components";
import React from "react";
import LeftArrow from "@/static/step/Vector 3.svg";
import FileUploadIcon from "@/pages/file-upload/assets/file-upload-icon.svg";
import Navigator from "@components/navigator";

const FileUploadPageBlock = styled.div`
  padding: 53px 30px 0 30px;
  .header-pagination {
    div:nth-child(2) {
      text-align: center;
      width: 100%;
      font-size: 18px;
      font-weight: bold;
    }
    display: flex;
    margin-bottom: 30px;
    .left-arrow {
      cursor: pointer;
    }
  }
  form {
    header {
      margin-bottom: 30px;

      > p {
        font-weight: 600;
        margin-bottom: 0.5em;
      }
      .video-file-upload {
        display: flex;
        align-items: center;

        .video-info {
          display: flex;
          flex: 1;
          justify-content: space-between;
          padding: 0.8em 1em;
          margin-right: 1em;
          border-radius: 8px;
          border: 1px solid #c4c4c4;
          span {
            color: #878787;
          }
        }

        .filebox {
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
    }

    main {
      margin-bottom: 3em;
      .video-title {
        margin-bottom: 40px;
        > p {
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        input {
          outline: none;
          padding: 0.8em 1em;
          border-radius: 8px;
          border: 1px solid #c4c4c4;
          width: 100%;
          box-sizing: border-box;
          &::placeholder {
            font-size: 16px;
            color: #878787;
          }
        }
      }
      .video-thumnail {
        > p {
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        &-image {
          width: 40%;
          height: 25vh;
          background: url("https://via.placeholder.com/100x200.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .filebox2 {
          margin-top: 0.8em;
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
        font-size: 18px;
        color: white;
        background: #5dccc6;
        border-radius: 8px;
      }
    }
  }
`;

const FileUploadPage = () => {
  return (
    <>
      <FileUploadPageBlock>
        <div className="header-pagination">
          <div className="left-arrow">
            <img src={LeftArrow} alt="좌측화살표" />
          </div>
          <div>영상 업로드</div>
        </div>
        <form>
          <header>
            <p>업로드영상</p>

            <div className="video-file-upload">
              <div className="video-info">
                <span>소개영상01.mp4</span>
                <span>0:22</span>
              </div>

              <div class="filebox">
                <label htmlFor="file">
                  <img src={FileUploadIcon} alt="파일업로드아이콘" />
                </label>
                <input type="file" id="file" />
              </div>
            </div>
          </header>
          <main>
            <div className="video-title">
              <p>제목</p>
              <div>
                <input type="text" placeholder="제목을 적어주세요" />
              </div>
            </div>
            <div className="video-thumnail">
              <p>썸네일 이미지</p>
              <div>
                <div className="video-thumnail-image" />
              </div>
              <div className="filebox2">
                <label htmlFor="file2">썸네일 이미지 변경</label>
                <input type="file" id="file2" />
              </div>
            </div>
          </main>
          <div className="submit-button-box">
            <button type="submit">업로드 하기</button>
          </div>
        </form>
      </FileUploadPageBlock>
      <Navigator />
    </>
  );
};

export default FileUploadPage;
