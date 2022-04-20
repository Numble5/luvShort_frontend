import styled from "styled-components";
import React, { useState } from "react";
import LeftArrow from "@/static/step/Vector 3.svg";
import RightArrow from "@/static/step/Vector 2.svg";
import flight from "@/pages/step/assets-step2/Vector.svg";
import Circle from "@/pages/step/assets-step2/Ellipse 454.svg";

const Step2PageBlock = styled.div`
  padding: 53px 30px 0 30px;
  .header-pagination {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }

  .title {
    margin-bottom: 67px;
    h1 {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 14px;
    }
    > p {
      > span {
        color: #5dccc6;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .hobby {
    .hobby-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .hobby-item {
        padding: 0.8em 1.2em;
        display: flex;
        align-items: center;
        border: 1px solid #c4c4c4;
        border-radius: 25px;

        img {
          margin-right: 6px;
        }
        @media screen and (max-width: 488px) {
          font-size: 11px;
        }
        @media screen and (min-width: 488px) {
          width: calc((100% - 165px) / 3);
        }
        @media screen and (min-width: 1024px) {
          width: calc((100% - 165px) / 3);
        }

        > span {
          font-size: inherit;
        }
      }
    }
    .next-step-button {
      position: absolute;
      box-sizing: border-box;
      display: block;
      bottom: 0;
      left: 0;
      border: 0;
      background: #5dccc6;
      width: 100%;
      height: 80px;
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const Step2Page = () => {
  const [hobbyList, setHobbyList] = useState([
    {
      name: "여행",
      checked: true,
      imgSrc: flight,
    },
    {
      name: "게임",
      checked: false,
    },
    {
      name: "스포츠",
      checked: false,
    },
    {
      name: "영화",
      checked: false,
    },
    {
      name: "뷰티/패션",
      checked: false,
    },
    {
      name: "음악",
      checked: false,
    },
    {
      name: "반려동물",
      checked: false,
    },
    {
      name: "독서",
      checked: false,
    },
    {
      name: "요리",
      checked: false,
    },
  ]);

  return (
    <Step2PageBlock>
      {" "}
      <div className="header-pagination">
        <div className="left-arrow">
          <img src={LeftArrow} alt="좌측화살표" />
        </div>
        <span>2/2</span>
        <div className="right-arrow">
          <img src={RightArrow} alt="우측화살표" />
        </div>
      </div>
      <div className="title">
        <h1>Step2</h1>
        <p>
          <span>'빙고'</span>님의 관심사/취미를 알려주세요!
        </p>
      </div>
      <div className="hobby">
        <div className="hobby-list">
          {hobbyList.map((item) => (
            <div className="hobby-item">
              <div>
                <img
                  src={item.checked ? item.imgSrc : Circle}
                  alt="취미아이콘"
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <button type="submit" className="next-step-button">
          다음
        </button>
      </div>
    </Step2PageBlock>
  );
};

export default Step2Page;
