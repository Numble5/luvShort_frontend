import React from "react";
import { Link } from "react-router-dom";
import { Navigation, NavigationList } from "./navigator.styled";

const Navigator = (props) => {
  const menu = [
    { link: "msg", name: "메시지" },
    { link: "msg", name: "관심영상" },
  ];

  return (
    <Navigation>
      <ul>
        {menu.map(({ link, name }) => (
          <NavigationList>
            <Link key={name} to={`/${link}`}>
              <img src="" alt={`${name}아이콘`} />
              <h2>{name}</h2>
            </Link>
          </NavigationList>
        ))}
      </ul>
    </Navigation>
  );
};

export default Navigator;
