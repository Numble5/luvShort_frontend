import styled from "styled-components";
import React, { useEffect, useState } from "react";
import LeftArrow from "@/pages/step/assets/Vector 3.svg";
import RightArrow from "@/pages/step/assets/Vector 2.svg";

import { useDispatch, useSelector } from "react-redux";
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
`;

const Step2Page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const userinfo = useSelector(({ user }) => user);

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
            <span>'{userinfo.nickname}'</span>님의 관심사/취미를 알려주세요!
          </p>
        </div>
        <SelectInterest />
      </Step2PageBlock>
      {isModal && <Modal step2="step2" onClickModal={onClickModal} />}
    </>
  );
};

export default Step2Page;
