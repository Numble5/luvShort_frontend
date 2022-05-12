import styled from "styled-components";
import React, { useState } from "react";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import SubmitButton from "@/pages/chatScreen/assets/submit-button.svg";
import SubmitButtonChecked from "@/pages/chatScreen/assets/submit-button-checked.svg";

const ChatScreenBlock = styled.div`
  background: #fce8eb;
  min-height: 100%;
  padding-top: 56px;
  main {
    padding: 0 15px;
    padding-bottom: 90px;
    .chat-list {
      .chat-item {
        display: flex;
        align-items: center;
        &.me {
          justify-content: flex-end;
        }
        .profile-img {
          margin-right: 8px;
        }
        .content {
          margin-right: 4px;
          padding-top: 1em;
          .nickname {
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 3px;
          }
          .chat-text {
            padding: 10px;
            border-radius: 4px;
            font-size: 14px;
            background: #ffffff;
            max-width: 163px;
            &.me {
              margin-left: 4px;
              background: #ffa5b1;
            }
            &.ml-16 {
              margin-left: 48px;
            }
          }
        }
        .created-at {
          margin-top: auto;
          font-size: 10px;
        }
      }
    }
  }
  .chat-input-container {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 45px;
    display: flex;
    .input {
      flex: 1;
      input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        padding: 13.5px;
      }
    }
    .submit-button {
      border: none;
      outline: none;
      &.isSubmit {
        background: #f3576c;
      }
    }
  }
`;

const ChatScreen = () => {
  const [chat, setChat] = useState("");
  const [chatList, setChatList] = useState([
    {
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "보라스프",
      chatText: "좋은 아침이에요! 날씨도 좋은데 오늘 오후에 뭐할거에요?",
      createdAt: "오전 08:32",
      provider: "me",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "배드민턴 칠 거에요",
      createdAt: "오전 08:42",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "보라스프",
      chatText: "저도 할래요. 같이 공원가욥",
      createdAt: "오전 08:42",
      provider: "me",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "싫어요",
      createdAt: "오전 08:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "보라스프",
      chatText: "왜요",
      createdAt: "오전 08:52",
      provider: "me",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "보라스프",
      chatText: "좋은 아침이에요! 날씨도 좋은데 오늘 오후에 뭐할거에요?",
      createdAt: "오전 08:32",
      provider: "me",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "배드민턴 칠 거에요",
      createdAt: "오전 08:42",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "보라스프",
      chatText: "저도 할래요. 같이 공원가욥",
      createdAt: "오전 08:42",
      provider: "me",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "싫어요",
      createdAt: "오전 08:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "보라스프",
      chatText: "왜요",
      createdAt: "오전 08:52",
      provider: "me",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에요",
      createdAt: "오전 09:44",
      provider: "you",
    },
    {
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      chatText: "저 혼자 칠 거에",
      createdAt: "오전 09:44",
      provider: "you",
    },
  ]);
  const onChangeChat = (e) => {
    setChat(e.target.value);
  };
  return (
    <ChatScreenBlock>
      <header>
        <TitlePrevHeader title="개굴" background="#fce8eb" />
      </header>
      <main>
        <div className="chat-list">
          {chatList.map((chat, index) =>
            chat.provider === "you" ? (
              <div className="chat-item">
                {chatList[index - 1]?.provider !== chatList[index].provider && (
                  <div className="profile-img">
                    <img src={chat.profileImg} alt="프로필이미지" />
                  </div>
                )}
                <div className="content">
                  {chatList[index - 1]?.provider !==
                    chatList[index].provider && (
                    <div className="nickname">
                      <span>{chat.nickname}</span>
                    </div>
                  )}
                  {chatList[index - 1]?.provider !==
                  chatList[index].provider ? (
                    <div className="chat-text">
                      <p>{chat.chatText}</p>
                    </div>
                  ) : (
                    <div className="chat-text ml-16">
                      <p>{chat.chatText}</p>
                    </div>
                  )}
                </div>
                {chatList[index].provider !== chatList[index + 1]?.provider && (
                  <div className="created-at">
                    <span>{chat.createdAt}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="chat-item me">
                <div className="created-at">
                  <span>{chat.createdAt}</span>
                </div>
                <div className="content">
                  <div className="chat-text me">
                    <p>{chat.chatText}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </main>
      <form className="chat-input-container">
        <div className="input">
          <input
            type="text"
            name="chat"
            value={chat}
            onChange={(e) => onChangeChat(e)}
          />
        </div>
        {chat.length === 0 ? (
          <button className="submit-button" type="submit" disabled>
            <img src={SubmitButton} alt="입력버튼" />
          </button>
        ) : (
          <button className="submit-button" type="submit">
            <img src={SubmitButtonChecked} alt="입력버튼" />
          </button>
        )}
      </form>
    </ChatScreenBlock>
  );
};

export default ChatScreen;
