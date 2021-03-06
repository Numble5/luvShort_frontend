import { changeModalFalse, selectedModal } from "@/redux/reducers/modal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ModalBackground = ({ children, setItem = () => {} }) => {
  const selected = useSelector(selectedModal);
  const user = useSelector(({ user }) => user.user);

  const dispath = useDispatch();

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selected]);

  const closeModal = () => {
    if (user) {
      dispath(changeModalFalse());
    }
    setItem(false);
  };

  return (
    <>
      {selected ? (
        <>
          <ModalChild>{children}</ModalChild>
          <TempBackground onClick={closeModal} />;
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default ModalBackground;

const TempBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  opacity: 0.7;
`;

const ModalChild = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 25;
`;
