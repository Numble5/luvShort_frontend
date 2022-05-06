import React from "react";
import styled from "styled-components";
import { AddCategoryBtn } from "../button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = ({ marginTop, setCurrentCategory }) => {
  const user = useSelector(({ user }) => user.user);
  const interests = useSelector(({ user }) => user.interests);

  const handleShowCategory = ({ target }) => {
    setCurrentCategory(target.value);
  };

  return (
    <StyledCategory marginTop={marginTop}>
      <ul>
        {user ? {} : <></>}
        {interests ? (
          interests.map(({ link, title, color }) => (
            <CategoryLi key={title} color={color}>
              <Link to={link}>#{title}</Link>
            </CategoryLi>
          ))
        ) : (
          <></>
        )}
      </ul>
      <CategorySelect onChange={handleShowCategory}>
        <option value="전체">전체</option>
        <option value="여성">여자</option>
        <option value="남성">남자</option>
        <option value="우리동네">우리동네</option>
      </CategorySelect>
    </StyledCategory>
  );
};

export default Categories;

const StyledCategory = styled.div`
  margin-top: ${(props) => props.marginTop};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryLi = styled.li`
  display: inline-block;
  background-color: ${(props) => props.color};
  background-color: blue;
`;

const CategorySelect = styled.select`
  background-color: #3d3d3d;
  color: white;
  height: 27px;
  font-weight: 600;
  border-radius: 5px;
  outline: none;
  padding: 3px 5px;
`;
