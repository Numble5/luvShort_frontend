import TitlePrevHeader from "@/components/common/titlePrevHeader";
import Navigator from "@/components/navigator";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import "moment/locale/ko";

const AlarmBlock = styled.div`
  padding: 90px 23px 0;
  main {
    padding-bottom: 95px;
    .alarm-created {
      font-size: 12px;
      padding-bottom: 4px;
      border-bottom: 1px solid #c4c4c4;
      margin-bottom: 10px;
    }

    .alarm-list {
      .alarm-item {
        margin-bottom: 17px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .profile-img {
          margin-right: 8px;
        }

        .noti-content {
          font-size: 12px;
          margin-right: auto;
          &-container {
            p:nth-child(1) {
              margin-bottom: 3px;
            }
          }
        }
      }
    }
  }
`;

const Alarm = (props) => {
  moment.locale("ko");
  const today = moment().format("YYYY.MM.DD");
  const now = moment().format("YYYY.MM.DD, hh:mm");
  const t2 = moment("2022.05.11, 10:15", "YYYY.MM.DD, HH:mm").fromNow();
  console.log(t2);

  const [alarmList, setAlarmList] = useState([
    {
      createdAt: "2022.05.11",
      notiList: [
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.11, 12:28",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.11, 12:24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.11, 12:20",
        },
      ],
    },
    {
      createdAt: "2022.05.09",
      notiList: [
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
      ],
    },
    {
      createdAt: "2022.05.09",
      notiList: [
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
      ],
    },
    {
      createdAt: "2022.05.09",
      notiList: [
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
        {
          profileImg: "https://ifh.cc/g/f3hBfs.png",
          nickname: "89wlfdsfalsrkd",
          contentImg: "https://ifh.cc/g/XY7nPo.png",
          createdAt: "2022.05.09.12.24",
        },
      ],
    },
  ]);
  return (
    <>
      <AlarmBlock>
        <header>
          <TitlePrevHeader title="알림" />
        </header>
        <main>
          {alarmList.map((alarm) => (
            <>
              <p className="alarm-created">
                {alarm.createdAt === today ? "오늘" : alarm.createdAt}
              </p>
              <div className="alarm-list">
                {alarm.notiList.map((noti) => (
                  <div className="alarm-item">
                    <div className="profile-img">
                      <img src={noti.profileImg} alt="프로필이미지" />
                    </div>
                    <div className="noti-content">
                      <div className="noti-content-container">
                        <p>{noti.nickname}님이 이 영상을 좋아합니다. </p>
                        <p>
                          {alarm.createdAt === today
                            ? moment(
                                noti.createdAt,
                                "YYYY.MM.DD, HH:mm"
                              ).fromNow()
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className="noti-img">
                      <img src={noti.contentImg} alt="콘텐츠이미지" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </main>
      </AlarmBlock>
      <Navigator />
    </>
  );
};

export default Alarm;
