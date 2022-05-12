import styled from "styled-components";
import React, { useState } from "react";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import EmptyMessage from "@/pages/chatting/assets/empty-message.svg";
import Navigator from "@components/navigator";
import ExitButton from "@/components/chatting/ExitButton";
import EmptyCheck from "@/pages/chatting/assets/empty-check.svg";
import CheckedIcon from "@/pages/chatting/assets/checked.svg";
import { useSelector } from "react-redux";
import { ChattingModal } from "@/components/common/modal/index";

const ChattingBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 56px;
  header {
    position: relative;
    margin-bottom: 24px;
    > button {
      outline: none;
      border: none;
      position: fixed;
      top: 1.5em;
      right: 4%;
      font-size: 14px;
      background: #c4c4c4;
      color: white;
      padding: 0.3em;
      border-radius: 4px;
      cursor: pointer;
      &.edit {
        background: #5dccc6;
      }
    }
  }

  main {
    flex: 1;
    padding: 0 23px;
    > p {
      text-align: center;
      font-size: 14px;
      color: #979797;
    }
    .empty-message-container {
      height: calc(100% - 148px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .room {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 29px;
      .checkbox {
        img {
          margin-right: 9px;
        }
      }
      .profile_img {
        margin-right: 8px;
      }
      .content {
        text-align: left;
        flex: 1;
        p {
          font-size: 14px;
        }
        p:nth-child(1) {
          color: #3d3d3d;
          font-weight: 600;
        }
      }
      .created_at_and_alarm {
        text-align: right;
        font-size: 12px;
        .created_at {
          margin-bottom: 6px;
        }
        .alarm {
          > div {
            margin-left: auto;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            border-radius: 50%;
            span {
              color: white;
            }
          }
        }
      }
    }
  }
`;

const Chatting = () => {
  const isModal = useSelector(({ modal }) => modal.value);
  const [rooms, setRooms] = useState([
    {
      roomId: "1",
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "89wlalsrkd",
      lastMessage: "좋은 아침이에요! 날씨도 좋은데 오늘 오후에 뭐할거에요?",
      createdAt: "오전 11:32",
      alarmCount: "2",
    },
    {
      roomId: "2",
      profileImg: "https://ifh.cc/g/Q9m4jO.jpg",
      nickname: "보라스프",
      lastMessage: "안녕하세요:)",
      createdAt: "오전 08:32",
      alarmCount: "1",
    },
    {
      roomId: "3",
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      lastMessage: "아마도 그럴거에요..!ㅎㅎ",
      createdAt: "2022.04.25",
      alarmCount: "",
    },
    {
      roomId: "4",
      profileImg: "https://ifh.cc/g/AJtqvA.png",
      nickname: "몬스테라",
      lastMessage: "굿모닝!",
      createdAt: "2022.04.24",
      alarmCount: "1",
    },
    {
      roomId: "5",
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "89wlalsrkd",
      lastMessage: "좋은 아침이에요! 날씨도 좋은데 오늘 오후에 뭐할거에요?",
      createdAt: "오전 11:32",
      alarmCount: "2",
    },
    {
      roomId: "6",
      profileImg: "https://ifh.cc/g/Q9m4jO.jpg",
      nickname: "보라스프",
      lastMessage: "안녕하세요:)",
      createdAt: "오전 08:32",
      alarmCount: "1",
    },
    {
      roomId: "7",
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      lastMessage: "아마도 그럴거에요..!ㅎㅎ",
      createdAt: "2022.04.25",
      alarmCount: "",
    },
    {
      roomId: "8",
      profileImg: "https://ifh.cc/g/AJtqvA.png",
      nickname: "몬스테라",
      lastMessage: "굿모닝!",
      createdAt: "2022.04.24",
      alarmCount: "1",
    },
    {
      roomId: "9",
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "89wlalsrkd",
      lastMessage: "좋은 아침이에요! 날씨도 좋은데 오늘 오후에 뭐할거에요?",
      createdAt: "오전 11:32",
      alarmCount: "2",
    },
    {
      roomId: "10",
      profileImg: "https://ifh.cc/g/Q9m4jO.jpg",
      nickname: "보라스프",
      lastMessage: "안녕하세요:)",
      createdAt: "오전 08:32",
      alarmCount: "1",
    },
    {
      roomId: "11",
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "개굴",
      lastMessage: "아마도 그럴거에요..!ㅎㅎ",
      createdAt: "2022.04.25",
      alarmCount: "",
    },
    {
      roomId: "12",
      profileImg: "https://ifh.cc/g/AJtqvA.png",
      nickname: "몬스테라",
      lastMessage: "굿모닝!",
      createdAt: "2022.04.24",
      alarmCount: "1",
    },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [editCheckList, setEditCheckList] = useState([]);

  const onClickIsEdit = () => {
    setEditCheckList([]);
    setIsEdit((prev) => !prev);
  };

  const toggleEditCheck = (id) => {
    if (editCheckList.includes(id)) {
      const newEidtCheckList = editCheckList.filter(
        (checkId) => checkId !== id
      );
      setEditCheckList(newEidtCheckList);
    } else {
      const newEditCheckList = [...editCheckList, id];
      setEditCheckList(newEditCheckList);
    }
  };
  return (
    <ChattingBlock>
      <header>
        <TitlePrevHeader title="메세지" />
        {rooms.length > 0 ? (
          isEdit ? (
            editCheckList.length > 0 ? (
              <button className="edit" onClick={onClickIsEdit}>
                선택해제
              </button>
            ) : (
              <button className="" onClick={onClickIsEdit}>
                선택해제
              </button>
            )
          ) : (
            <button className="edit" onClick={onClickIsEdit}>
              편집
            </button>
          )
        ) : (
          <button disabled="true">편집</button>
        )}
      </header>
      <main>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div className="room">
              <div className="checkbox">
                {isEdit ? (
                  editCheckList.includes(room.roomId) ? (
                    <img
                      src={CheckedIcon}
                      alt="체크아이콘"
                      onClick={() => toggleEditCheck(room.roomId)}
                    />
                  ) : (
                    <img
                      src={EmptyCheck}
                      alt="빈칸체크아이콘"
                      onClick={() => toggleEditCheck(room.roomId)}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="profile_img">
                <img src={room.profileImg} alt="프로필이미지" />
              </div>
              <div className="content">
                <p>{room.nickname}</p>
                <p>{room.lastMessage}</p>
              </div>
              <div className="created_at_and_alarm">
                <div className="created_at">
                  <span>{room.createdAt}</span>
                </div>
                <div className="alarm">
                  {room.alarmCount && (
                    <div>
                      <span>{room.alarmCount}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>마음에 드는 상대와 채팅을 시작해보세요!</p>
            <div className="empty-message-container">
              <img src={EmptyMessage} alt="빈메시지 로고" />
            </div>
          </>
        )}
      </main>
      <ExitButton isEdit={isEdit} editCheckList={editCheckList} />
      <Navigator />
      {isModal && (
        <ChattingModal
          title="선택한 채팅을 나가기 할까요?"
          description="*나간 후에는 채팅내용을 복구할 수 없습니다."
          leftButton="취소"
          rightButton="나가기"
        />
      )}
    </ChattingBlock>
  );
};

export default Chatting;
