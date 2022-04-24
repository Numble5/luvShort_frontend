import React from "react";
import styled from "styled-components";

const MainLoginModal = () => {
  return (
    <StyledModal>
      <ul>
        <li>
          <h2>자연스러운 매칭 서비스</h2>
          <div>
            조회수, 좋아요수는 필요 없어요!
            <br />
            그냥 서로의 영상에 하트를 누르면 자연스럽게 매칭돼요.
          </div>
        </li>
        {/* <li>
          <h2>관심사 기반의 추천</h2>
          <div>
            나와 관심사/취미가 비슷한 사람을 찾고 싶으신가요?
            <br />
            회원님의 관심사가 반영된 영상을 추천해드려요.
          </div>
        </li>
        <li>
          <h2>차별화된 소개방식</h2>
          <div>
            외모, 직업, 인기등급 다 좋지만, 좀 더 다양한 매력을
            <br />
            짧은 영상에 담아 나를 소개해보세요!
          </div>
        </li> */}
      </ul>
      <div></div>
      <button>로그인하고 시작하기</button>
    </StyledModal>
  );
};

export default MainLoginModal;

const StyledModal = styled.div`
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  > button {
    pointer: cursor;
    background-color: #5dccc6;
    font-weight: 700;
    color: #ffffff;
    border: none;
    width: 100%;
    font-size: 17px;
    height: 50px;
  }
`;
