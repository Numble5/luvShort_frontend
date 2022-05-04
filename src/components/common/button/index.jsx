import styled from "styled-components";
import uploadBtn from "./assets/uploadBtn.svg";
export const FixedUploadBtn = () => {
  return (
    <UploadButtonWrapper>
      <img src={uploadBtn} alt="업로드 버튼" />
    </UploadButtonWrapper>
  );
};

const UploadButtonWrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 90px;
  z-index: 0;

  img {
    width: 45px;
  }
`;
