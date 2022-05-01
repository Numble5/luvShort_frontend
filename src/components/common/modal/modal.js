import React from "react";
import styled from "styled-components";
import Carousel from "../../carousel/carousel";

const MainLoginModal = () => {
  const items = [
    {
      idx: "carousel1",
      title: "자연스러운 매칭 서비스",
      content1: "조회수, 좋아요수는 필요 없어요!",
      content2: "그냥 서로의 영상에 하트를 누르면 자연스럽게 매칭돼요.",
    },
    {
      idx: "carousel2",
      title: "관심사 기반의 추천",
      content1: "나와 관심사/취미가 비슷한 사람을 찾고 싶으신가요?",
      content2: "회원님의 관심사가 반영된 영상을 추천해드려요.",
    },
    {
      idx: "carousel3",
      title: "차별화된 소개방식",
      content1:
        "외모, 직업, 인기등급 다 좋지만, 좀 더 다양한 매력을 짧은 영상에 담아 나를 소개해보세요!",
    },
  ];

  return (
    <StyledModal>
      <div className="loginModal_wrapper">
        <Carousel items={items} />
      </div>
      <a href="/login">로그인하고 시작하기</a>
    </StyledModal>
  );
};

export default MainLoginModal;

const StyledModal = styled.div`
  position: absolute;
  width: 95%;
  z-index: 2;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  .loginModal_wrapper {
    margin: 12px;
    margin-bottom: 25px;
  }

  > a {
    display: block;
    text-align: center;
    line-height: 50px;
    background-color: #5dccc6;
    font-weight: 700;
    color: #ffffff;
    border: none;
    width: 100%;
    font-size: 17px;
    height: 50px;
  }

  .slick-dots {
    bottom: -20px;
  }

  .slick-dots li.slick-active button:before {
    color: #5dccc6;
  }

  .slick-dots li {
    margin: 0;
  }
`;
