import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoList = (props) => {
  return (
    <StyledSection>
      <h2>영상리스트</h2>
    </StyledSection>
  );
};
export default VideoList;

const StyledSection = styled.section`
  width: 90%;
  margin: 61px auto 0 auto;

  h2 {
    font-weight: 700;
    font-size: 16px;
  }
`;
