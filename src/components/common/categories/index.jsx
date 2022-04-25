import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AddCategoryBtn } from "../button";

const tempCategory = [
  {
    link: "cook",
    title: "요리",
    color: "#FFC9D0",
  },
  {
    link: "game",
    title: "게임",
    color: "#F9DAA0",
  },
];
const Categories = ({ marginTop }) => {
  return (
    <CategoryUl marginTop={marginTop}>
      {tempCategory.map(({ link, title, color }) => (
        <CategoryLi key={title} color={color}>
          <Link to={link}>#{title}</Link>
        </CategoryLi>
      ))}
    </CategoryUl>
  );
};

export default Categories;

const CategoryUl = styled.ul`
  margin-top: ${(props) => props.marginTop};
`;
const CategoryLi = styled.li`
  display: inline-block;
  margin: 0 2px;
  a {
    border-radius: 10px;
    display: inline-block;
    height: 20px;
    background-color: ${(props) => props.color};
    padding: 1px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
`;
