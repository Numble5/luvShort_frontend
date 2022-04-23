import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { menu } from "./data/menu";

const Navigator = () => {
  const [selcted, setSelected] = useState("");

  const changeMenu = (e) => {
    while (e.target.nodeName !== "LI") {
      e.target = e.target.parentNode;
    }
    setSelected(e.target.dataset.id);
  };

  return (
    <Navigation>
      <NavigationList>
        {menu.map(({ icon, focus, link, title }) => (
          <NavigationItem
            key={title}
            data-id={link}
            onClick={(e) => changeMenu(e)}
          >
            <Link to={`/${link}`}>
              {selcted === link ? (
                <img src={focus} alt={`${title}아이콘`} />
              ) : (
                <img src={icon} alt={`${title}아이콘`} />
              )}
              <h2>{title}</h2>
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
    </Navigation>
  );
};

export default Navigator;

const Navigation = styled.nav`
  background-color: #fafafa;

  position: fixed;
  width: 100%;
  bottom: 0;
`;

const NavigationList = styled.ul`
  height: 79px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavigationItem = styled.li`
  padding: 8px;
  text-align: center;
  h2 {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 700;
    color: #4d4d4d;
  }

  img {
    width: 33px;
    height: 33px;
  }
`;
