import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router";

const ModalBlock = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);

  .modal-box {
    width: 80%;
    height: 20vh;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;

    &-top {
      height: 15vh;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      @media screen and (max-width: 720px) {
        height: 10vh;
        font-size: 14px;
      }
    }

    &-bottom {
      height: 5vh;
      display: flex;
      border-top: 1px solid #cfcfcf;
      @media screen and (max-width: 720px) {
        height: 5vh;
        font-size: 12px;
      }
      button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
      }

      button:nth-child(1) {
        width: 50%;
        background-color: #f6f6f6;
        color: #5dccc6;
      }
      button:nth-child(2) {
        width: 50%;
        background-color: #5dccc6;
        color: white;
      }
    }
    @media screen and (max-width: 720px) {
      height: 15vh;
    }
  }
`;

const Modal = ({ onClickModal }) => {
  const navigate = useNavigate();
  return (
    <ModalBlock>
      <div className="modal-box">
        <p className="modal-box-top">회원가입을 중단할까요?</p>
        <div className="modal-box-bottom">
          <button onClick={() => navigate("/login")}>나중에 하기</button>
          <button onClick={onClickModal}>이어서 진행하기</button>
        </div>
      </div>
    </ModalBlock>
  );
};

export default Modal;
