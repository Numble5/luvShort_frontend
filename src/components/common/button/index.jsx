import { changeModalTrue } from "@/redux/reducers/modal";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uploadBtn from "./assets/uploadBtn.svg";

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

const UploadButtonWrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 90px;
  z-index: 1;
  cursor: pointer;

  img {
    width: 45px;
  }
`;
