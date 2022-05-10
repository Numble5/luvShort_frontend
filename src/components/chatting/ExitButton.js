import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { changeModalTrue } from "@/redux/reducers/modal";

const ExitButtonBlock = styled.div`
  height: 56px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: ${(props) => (props.isEdit ? "79px" : "0")};
  transition: all 0.2s ease-in;
  background: ${(props) =>
    props.editCheckList.length > 0 ? "#F3576C" : "#e8e8e8"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.editCheckList.length > 0 ? "white" : "#979797")};
  cursor: pointer;
`;

const ExitButton = ({ isEdit, editCheckList }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModalTrue());
  };
  return (
    <ExitButtonBlock
      isEdit={isEdit}
      editCheckList={editCheckList}
      onClick={openModal}
    >
      채팅방 나가기
    </ExitButtonBlock>
  );
};

export default ExitButton;
