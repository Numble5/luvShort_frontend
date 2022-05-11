import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

import { changeNavigator, selectedNavigator } from "@/redux/reducers/navigator";

import { menu } from "./data/menu";

const Navigator = () => {
  const selected = useSelector(selectedNavigator);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeMenu = ({ target }) => {
    const id = target.dataset.id;
    dispatch(changeNavigator(id));
    navigate(`/${id}`);
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
            {selected === link ? (
              <img src={focus} alt={`${title}아이콘`} />
            ) : (
              <img src={icon} alt={`${title}아이콘`} />
            )}
            <h2>{title}</h2>
          </NavigationItem>
        ))}
      </NavigationList>
    </Navigation>
  );
};

export default Navigator;

const Navigation = styled.nav`
  background-color: #fafafa;
  z-index: 1;

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
  text-align: center;
  cursor: pointer;

  a {
    padding: 8px;

    display: block;
    width: 100%;
  }

  h2 {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 700;
    pointer-events: none;
    color: #4d4d4d;
  }

  img {
    pointer-events: none;
    width: 33px;
    height: 33px;
  }
`;
