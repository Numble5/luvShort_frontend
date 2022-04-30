import msg from "../assets/msg.svg";
import alarm from "../assets/alarm.svg";
import home from "../assets/home.svg";
import liked from "../assets/liked.svg";
import my from "../assets/my.svg";

import focushome from "../assets/focushome.svg";
import focusmsg from "../assets/focusmsg.svg";
import focusliked from "../assets/focusliked.svg";
import focusalarm from "../assets/focusalarm.svg";
import focusmy from "../assets/focusmy.svg";

export const menu = [
  {
    icon: `${home}`,
    focus: `${focushome}`,
    title: "홈",
    link: "",
  },
  {
    icon: `${msg}`,
    focus: `${focusmsg}`,
    title: "메시지",
    link: "message",
  },
  {
    icon: `${liked}`,
    focus: `${focusliked}`,
    title: "관심영상",
    link: "liked",
  },
  {
    icon: `${alarm}`,
    focus: `${focusalarm}`,
    title: "알림",
    link: "alarm",
  },
  {
    icon: `${my}`,
    focus: `${focusmy}`,
    title: "MY",
    link: "mypage",
  },
];
