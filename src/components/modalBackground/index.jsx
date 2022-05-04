import { selectedModal } from "@/redux/reducers/modal";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ModalBackground = ({ children }) => {
  const selected = useSelector(selectedModal);

  useEffect(() => {
    console.log(selected);
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selected]);

  return (
    <>
      {children}
      <TempBackground />;
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
