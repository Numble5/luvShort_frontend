import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const TitlePrevHeader = ({ title }) => {
  const navigate = useNavigate();

  const moveGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledTitlePrev>
      <span onClick={moveGoBack}>{`<`}</span>
      <h2>{title}</h2>
    </StyledTitlePrev>
  );
};

export default TitlePrevHeader;

const StyledTitlePrev = styled.div`
  margin-bottom: 18px;

  span,
  h2 {
    color: white;
  }

  span {
    font-size: 25px;
    font-weight: 700;
    position: absolute;
    left: 2%;
    top: 13px;
    padding: 3px 8px;
  }
  h2 {
    text-align: center;
    font-size: 18px;
  }
`;
