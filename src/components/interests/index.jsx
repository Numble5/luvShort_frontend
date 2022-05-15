import { changeModalFalse, changeModalTrue } from "@/redux/reducers/modal";
import { CategoryBackgroundColor } from "@/utils/interestColor";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const InterestCategories = ({ title, categories, border }) => {
  const dispatch = useDispatch();
  return (
    <StyledCategoryWrapper
      border={border}
      onClick={() => {
        dispatch(changeModalTrue());
      }}
    >
      <label className="interest_title">{title}</label>
      <div className="interests_container">
        <ul className="interest_ul">
          {categories?.length !== 0 ? (
            categories?.map((category, index) => {
              return (
                <li className={category} key={index}>
                  <div className="interests_item">
                    <span>{category}</span>
                    <button>X</button>
                  </div>
                </li>
              );
            })
          ) : (
            <span className="add_category">추가+</span>
          )}
          <button className="add_interest">+</button>
        </ul>
      </div>
    </StyledCategoryWrapper>
  );
};

export default InterestCategories;

const StyledCategoryWrapper = styled.div`
  margin-bottom: 12px;
  .interest_title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .interests_container {
    border: ${(props) => (props.border ? "1px solid #c4c4c4" : "")};
    border-radius: 8px;
    .interest_ul {
      display: flex;
      padding: 0.5em;

      .add_category {
        font-size: 12px;
        padding: 4px 6px;
        border-radius: 8px;
        border: 1px solid #c4c4c4;
      }
      li {
        margin-right: 6px;
        padding: 4px 6px;
        border-radius: 8px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.여행 {
          background: ${CategoryBackgroundColor["여행"]};
        }
        &.스포츠 {
          background: ${CategoryBackgroundColor["스포츠"]};
        }
        &.쇼핑 {
          background: ${CategoryBackgroundColor["쇼핑"]};
        }
        &.음악 {
          background: ${CategoryBackgroundColor["음악"]};
        }
        &.게임 {
          background: ${CategoryBackgroundColor["게임"]};
        }
        &.독서 {
          background: ${CategoryBackgroundColor["독서"]};
        }
        &.요리 {
          background: ${CategoryBackgroundColor["요리"]};
        }
        &.영화시청 {
          background: ${CategoryBackgroundColor["영화시청"]};
        }
        &.반려동물 {
          background: ${CategoryBackgroundColor["반려동물"]};
        }

        .interests_item {
          span {
            margin-right: 4px;
            color: black;
          }

          button {
            background: none;
            outline: none;
            border: 1px solid black;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            color: black;
            font-size: 10px;
          }
        }
      }
      .add_interest {
        background: none;
        outline: none;
        margin-left: auto;
        width: 17px;
        height: 17px;
        border: 1px solid #c4c4c4;
        border-radius: 50%;
        color: #c4c4c4;
      }
    }
  }
`;
