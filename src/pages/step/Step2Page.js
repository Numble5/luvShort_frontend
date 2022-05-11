import styled from "styled-components";
import React, { useEffect, useState } from "react";
import LeftArrow from "@/static/step/Vector 3.svg";
import RightArrow from "@/static/step/Vector 2.svg";

import { useDispatch, useSelector } from "react-redux";
import { submitUserInfo } from "@redux/reducers/user";
import { useNavigate } from "react-router";
import { userCheck } from "@/redux/reducers/user";
import Modal from "@/components/step1/modal";
import SelectInterest from "@/components/step2/SelectInterest";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const user = useSelector(({ user }) => user.user);
  const submitUserInfoError = useSelector(
    ({ user }) => user.submitUserInfoError
  );

  const onClickModal = () => {
    if (isModal === true) {
      setIsModal(false);
    } else {
      setIsModal(true);
    }
  };

  useEffect(() => {
    if (submitUserInfoError === false) {
      dispatch(userCheck());
    }
  }, [submitUserInfoError]);

  useEffect(() => {
    if (user) {
      navigate("/register-success");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬스토리지가 작동 안해요.");
      }
    }
  }, [user]);

  return (
    <>
      <Step2PageBlock>
        {" "}
        <div className="header-pagination">
          <div className="left-arrow" onClick={onClickModal}>
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
        <SelectInterest />
      </Step2PageBlock>
      {isModal && <Modal step2="step2" onClickModal={onClickModal} />}
    </>
  );
};

export default Step2Page;
