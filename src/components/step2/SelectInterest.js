import styled from "styled-components";
import React, { useState } from "react";
import Flight from "@pages/step/assets-step2/Vector.svg";
import Shopping from "@pages/step/assets-step2/shopping.svg";
import Sport from "@pages/step/assets-step2/sport.svg";
import Movie from "@pages/step/assets-step2/movie.svg";
import Game from "@pages/step/assets-step2/game.svg";
import Music from "@pages/step/assets-step2/music.svg";
import Animal from "@pages/step/assets-step2/animal.svg";
import Book from "@pages/step/assets-step2/book.svg";
import Cooking from "@pages/step/assets-step2/cooking.svg";
import Circle from "@pages/step/assets-step2/Ellipse 454.svg";
import { submitUserInfo } from "@/redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";

const SelectInterestBlock = styled.div``;

const SelectInterest = () => {
  const dispatch = useDispatch();
  const email = useSelector(({ user }) => user.email);
  const nickname = useSelector(({ user }) => user.nickname);
  const birthday = useSelector(({ user }) => user.birthday);
  const gender = useSelector(({ user }) => user.gender);
  const city = useSelector(({ user }) => user.city);
  const district = useSelector(({ user }) => user.district);
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
      email,
      nickname,
      birthday,
      gender,
      city,
      district,
      selectedInterests: selectedInterests,
    };
    console.log(user_info);
    dispatch(submitUserInfo(user_info));
  };

  return (
    <SelectInterestBlock>
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
    </SelectInterestBlock>
  );
};

export default SelectInterest;
