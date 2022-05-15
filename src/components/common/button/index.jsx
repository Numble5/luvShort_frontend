import { changeModalTrue } from "@/redux/reducers/modal";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import uploadBtn from "./assets/uploadBtn.svg";
import topBtn from "./assets/top.svg";

export const FixedTopBtn = ({ bottom }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FixedTopButtonWrapper onClick={scrollToTop} bottom={bottom}>
      <img src={topBtn} alt="top" />
    </FixedTopButtonWrapper>
  );
};

export const FixedUploadBtn = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModalTrue());
  };

  return (
    <UploadButtonWrapper onClick={openModal}>
      <img src={uploadBtn} alt="업로드 버튼" />
    </UploadButtonWrapper>
  );
};

const UploadButtonWrapper = styled.button`
  position: fixed;
  right: 5%;
  bottom: 90px;
  z-index: 1;
  cursor: pointer;
  background-color: transparent;
  border: none;

  img {
    filter: drop-shadow(0px 0px 4px #c4c4c4);
  }
`;

const FixedTopButtonWrapper = styled.button`
  position: fixed;
  z-index: 1;
  bottom: ${({ bottom }) => (bottom ? bottom : "135px")};
  right: 5%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    filter: drop-shadow(0px 0px 4px #c4c4c4);
  }
`;
