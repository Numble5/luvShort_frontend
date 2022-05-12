import React from "react";
import styled from "styled-components";

const InterestCategories = ({ title, categories }) => {
  return (
    <StyledCategoryWrapper>
      <label className="interest_title">{title}</label>
      <ul className="interest_ul">
        {categories.length !== 0 ? (
          categories.map((category) => (
            <li>
              <span>{category}</span>
              <button>X</button>
            </li>
          ))
        ) : (
          <li>
            <button>+추가</button>
          </li>
        )}
        <button>+</button>
      </ul>
    </StyledCategoryWrapper>
  );
};

export default InterestCategories;

const StyledCategoryWrapper = styled.div`
  .interest_title {
    margin-bottom: 8px;
  }

  .interest_ul {
    display: flex;
    background-color: blue;
    padding: 5px;
    border-radius: 10px;
  }
`;
