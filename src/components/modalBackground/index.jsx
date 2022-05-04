import { changeModalFalse, selectedModal } from "@/redux/reducers/modal";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ModalBackground = ({ children }) => {
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
  };

  return (
    <>
      {selected ? (
        <>
          {children}
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
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0.7;
`;
