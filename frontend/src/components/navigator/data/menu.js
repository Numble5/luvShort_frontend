import msg from "../assets/msg.svg";
import alarm from "../assets/alarm.svg";
import home from "../assets/home.svg";
import liked from "../assets/liked.svg";
import my from "../assets/my.svg";

export const menu = [
  {
    icon: `${msg}`,
    title: "메시지",
    link: "/message",
  },
  {
    icon: `${liked}`,
    title: "관심영상",
    link: "/liked",
  },
  {
    icon: `${home}`,
    title: "홈",
    link: "/home",
  },
  {
    icon: `${alarm}`,
    title: "알림",
    link: "/alarm",
  },
  {
    icon: `${my}`,
    title: "MY",
    link: "/myPage",
  },
];
