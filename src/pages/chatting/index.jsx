import styled from "styled-components";
import React, { useState } from "react";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import EmptyMessage from "@/pages/chatting/assets/empty-message.svg";
import Navigator from "@components/navigator";
import ExitButton from "@/components/chatting/ExitButton";
import EmptyCheck from "@/pages/chatting/assets/empty-check.svg";
import CheckedIcon from "@/pages/chatting/assets/checked.svg";
import { useSelector } from "react-redux";
import { ChattingModal } from "@/components/common/modal";

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
      lastMessage: "?????? ???????????????! ????????? ????????? ?????? ????????? ????????????????",
      createdAt: "?????? 11:32",
      alarmCount: "2",
    },
    {
      roomId: "2",
      profileImg: "https://ifh.cc/g/Q9m4jO.jpg",
      nickname: "????????????",
      lastMessage: "???????????????:)",
      createdAt: "?????? 08:32",
      alarmCount: "1",
    },
    {
      roomId: "3",
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "??????",
      lastMessage: "????????? ???????????????..!??????",
      createdAt: "2022.04.25",
      alarmCount: "",
    },
    {
      roomId: "4",
      profileImg: "https://ifh.cc/g/AJtqvA.png",
      nickname: "????????????",
      lastMessage: "?????????!",
      createdAt: "2022.04.24",
      alarmCount: "1",
    },
    {
      roomId: "5",
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "89wlalsrkd",
      lastMessage: "?????? ???????????????! ????????? ????????? ?????? ????????? ????????????????",
      createdAt: "?????? 11:32",
      alarmCount: "2",
    },
    {
      roomId: "6",
      profileImg: "https://ifh.cc/g/Q9m4jO.jpg",
      nickname: "????????????",
      lastMessage: "???????????????:)",
      createdAt: "?????? 08:32",
      alarmCount: "1",
    },
    {
      roomId: "7",
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "??????",
      lastMessage: "????????? ???????????????..!??????",
      createdAt: "2022.04.25",
      alarmCount: "",
    },
    {
      roomId: "8",
      profileImg: "https://ifh.cc/g/AJtqvA.png",
      nickname: "????????????",
      lastMessage: "?????????!",
      createdAt: "2022.04.24",
      alarmCount: "1",
    },
    {
      roomId: "9",
      profileImg: "https://ifh.cc/g/f3hBfs.png",
      nickname: "89wlalsrkd",
      lastMessage: "?????? ???????????????! ????????? ????????? ?????? ????????? ????????????????",
      createdAt: "?????? 11:32",
      alarmCount: "2",
    },
    {
      roomId: "10",
      profileImg: "https://ifh.cc/g/Q9m4jO.jpg",
      nickname: "????????????",
      lastMessage: "???????????????:)",
      createdAt: "?????? 08:32",
      alarmCount: "1",
    },
    {
      roomId: "11",
      profileImg: "https://ifh.cc/g/361cfs.png",
      nickname: "??????",
      lastMessage: "????????? ???????????????..!??????",
      createdAt: "2022.04.25",
      alarmCount: "",
    },
    {
      roomId: "12",
      profileImg: "https://ifh.cc/g/AJtqvA.png",
      nickname: "????????????",
      lastMessage: "?????????!",
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
        <TitlePrevHeader title="?????????" />
        {rooms.length > 0 ? (
          isEdit ? (
            editCheckList.length > 0 ? (
              <button className="edit" onClick={onClickIsEdit}>
                ????????????
              </button>
            ) : (
              <button className="" onClick={onClickIsEdit}>
                ????????????
              </button>
            )
          ) : (
            <button className="edit" onClick={onClickIsEdit}>
              ??????
            </button>
          )
        ) : (
          <button disabled="true">??????</button>
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
                      alt="???????????????"
                      onClick={() => toggleEditCheck(room.roomId)}
                    />
                  ) : (
                    <img
                      src={EmptyCheck}
                      alt="?????????????????????"
                      onClick={() => toggleEditCheck(room.roomId)}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="profile_img">
                <img src={room.profileImg} alt="??????????????????" />
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
            <p>????????? ?????? ????????? ????????? ??????????????????!</p>
            <div className="empty-message-container">
              <img src={EmptyMessage} alt="???????????? ??????" />
            </div>
          </>
        )}
      </main>
      <ExitButton isEdit={isEdit} editCheckList={editCheckList} />
      <Navigator />
      {isModal && (
        <ChattingModal
          title="????????? ????????? ????????? ??????????"
          description="*?????? ????????? ??????????????? ????????? ??? ????????????."
          leftButton="??????"
          rightButton="?????????"
        />
      )}
    </ChattingBlock>
  );
};

export default Chatting;
