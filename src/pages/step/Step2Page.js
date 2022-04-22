import styled from "styled-components";
import React, { useState } from "react";
import LeftArrow from "@/static/step/Vector 3.svg";
import RightArrow from "@/static/step/Vector 2.svg";
import Circle from "@pages/step/assets-step2/Ellipse 454.svg";
import Flight from "@pages/step/assets-step2/Vector.svg";
import Shopping from "@pages/step/assets-step2/shopping.svg";
import Sport from "@pages/step/assets-step2/sport.svg";
import Movie from "@pages/step/assets-step2/movie.svg";
import Game from "@pages/step/assets-step2/game.svg";
import Music from "@pages/step/assets-step2/music.svg";
import Animal from "@pages/step/assets-step2/animal.svg";
import Book from "@pages/step/assets-step2/book.svg";
import Cooking from "@pages/step/assets-step2/cooking.svg";

import { useSelector } from "react-redux";
import user, { submitUserInfo } from "@/reducers/user";

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

  .interest {
    .speech-bubble {
      position: relative;
      bottom: 30px;
      background: #5dccc6;
      padding: 0.4em 0.8em;
      font-size: 14px;
      color: white;
      border-radius: 14px;
    }
    .speech-bubble:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: #5dccc6;
      border-bottom: 0;
      margin-left: 0px;
      margin-bottom: -10px;
    }

    .interest-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .interest-item {
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
          color: inherit;
          font-size: inherit;
        }

        &.selected {
          border: 1px solid #5dccc6;
          color: #5dccc6;
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
      background: #c4c4c4;
      width: 100%;
      height: 80px;
      color: white;
      font-size: 18px;
      font-weight: bold;
      &.checked {
        background: #5dccc6;
        cursor: pointer;
      }
    }
  }
`;

const Step2Page = () => {
  const nickname = useSelector(({ user }) => user.nickname);
  const birthday = useSelector(({ user }) => user.birthday);
  const gender = useSelector(({ user }) => user.gender);
  const state = useSelector(({ user }) => user.state);
  const city = useSelector(({ user }) => user.city);

  const [interests, setInterests] = useState([
    {
      name: "여행",
      checked: false,
      imgSrc: Flight,
    },
    {
      name: "쇼핑",
      checked: false,
      imgSrc: Shopping,
    },
    {
      name: "스포츠",
      checked: false,
      imgSrc: Sport,
    },
    {
      name: "영화",
      checked: false,
      imgSrc: Movie,
    },
    {
      name: "게임",
      checked: false,
      imgSrc: Game,
    },
    {
      name: "음악",
      checked: false,
      imgSrc: Music,
    },
    {
      name: "반려동물",
      checked: false,
      imgSrc: Animal,
    },
    {
      name: "독서",
      checked: false,
      imgSrc: Book,
    },
    {
      name: "요리",
      checked: false,
      imgSrc: Cooking,
    },
  ]);

  const checkedInterestLength = interests.filter(
    (item) => item.checked === true
  ).length;

  const toggleInterest = (name) => {
    const newInterest = interests.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    const checkedInterestLength = newInterest.filter(
      (item) => item.checked === true
    ).length;
    if (checkedInterestLength === 4) {
      return;
    }
    setInterests(newInterest);
  };

  const submitInterests = () => {
    const selectedInterests = interests
      .filter((item) => item.checked === true)
      .map((item) => item.name);

    const user_info = {
      nickname,
      birthday,
      gender,
      state,
      city,
      user_info: selectedInterests,
    };
    submitUserInfo(user_info);
  };

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
      <div className="interest">
        <span className="speech-bubble">최소1개~최대3개 선택해주세요.</span>
        <div className="interest-list">
          {interests.map((item) => (
            <div
              className={
                item.checked ? "interest-item selected" : "interest-item"
              }
              onClick={() => toggleInterest(item.name)}
            >
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
        {checkedInterestLength >= 1 ? (
          <button
            type="submit"
            className="next-step-button checked"
            onClick={submitInterests}
          >
            다음
          </button>
        ) : (
          <button type="submit" className="next-step-button" disabled>
            다음
          </button>
        )}
      </div>
    </Step2PageBlock>
  );
};

export default Step2Page;
