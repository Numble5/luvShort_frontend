import React from "react";
import styled from "styled-components";
import { AddCategoryBtn } from "../button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CategoryBackgroundColor } from "@/utils/interestColor";

export const Cateogories = ({ category }) => {
  return (
    <CategoryLi color={CategoryBackgroundColor[category]}>
      #{category}
    </CategoryLi>
  );
};

export const ProfileCategory = ({ categoryList }) => {
  return (
    <StyledProfileCategory>
      {categoryList.map((category) => (
        <Cateogories key={category} category={category} />
      ))}
    </StyledProfileCategory>
  );
};

export const MainCategory = ({ marginTop, setCurrentCategory, interests }) => {
  const handleShowCategory = ({ target }) => {
    setCurrentCategory(target.value);
  };

  return (
    <StyledCategory marginTop={marginTop}>
      <ul>
        {interests ? (
          interests.map((interest) => (
            <Cateogories key={interest} category={interest} />
          ))
        ) : (
          <></>
        )}
      </ul>
      <CategorySelect onChange={handleShowCategory}>
        <option value="전체">전체</option>
        <option value="FEMALE">여자</option>
        <option value="MALE">남자</option>
        <option value="우리동네">우리동네</option>
      </CategorySelect>
    </StyledCategory>
  );
};

const StyledCategory = styled.div`
  width: 97%;
  margin-top: ${(props) => props.marginTop};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ul {
    li {
      margin-right: 8px;
    }
  }
`;

const CategoryLi = styled.li`
  display: inline-block;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;

const CategorySelect = styled.select`
  background-color: #3d3d3d;
  color: white;
  height: 27px;
  font-weight: 600;
  border-radius: 5px;
  outline: none;
  padding: 3px 5px;
  option {
    color: white;
  }
`;

const StyledProfileCategory = styled.ul`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;

  li {
    margin-right: 6px;
  }
`;
