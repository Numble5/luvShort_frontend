import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const TitlePrevHeader = ({ title, background }) => {
  const navigate = useNavigate();

  const moveGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledTitlePrev title={title} background={background}>
      <span onClick={moveGoBack}>{`<`}</span>
      <h2>{title}</h2>
    </StyledTitlePrev>
  );
};

export default TitlePrevHeader;

const StyledTitlePrev = styled.div`
  padding-top: ${({ title }) => (title === "MY" ? "0px;" : "20px;")}
  padding-bottom: 18px;
  background-color: ${({ background }) =>
    background === "black" ? "#3D3D3D;" : "#FFFFFF;"};

  span,
  h2 {
    color: ${({ background }) =>
      background === "black" ? "#FFFFFF;" : "#3D3D3D;"};
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
