import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const TitlePrevHeader = ({ title, background, rightComponent, topPx }) => {
  const navigate = useNavigate();

  const moveGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledTitlePrev title={title} background={background}>
      <span onClick={moveGoBack}>{`<`}</span>
      <h2>{title}</h2>
      <RightComponent top={topPx}>{rightComponent}</RightComponent>
    </StyledTitlePrev>
  );
};

export default TitlePrevHeader;

const RightComponent = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: 3%;
`;
const StyledTitlePrev = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding-top: ${({ title }) =>
    title === "MY" || title === "프로필" ? "0px;" : "20px;"};
  padding-bottom: 18px;
  background-color: ${({ background }) =>
    background === "black" ? "#3D3D3D;" : "#FFFFFF;"};
  background: ${({ background }) => background === "#fce8eb" && background};

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
    top: 14px;
    padding: 3px 8px;
    cursor: pointer;
  }

  h2 {
    text-align: center;
    font-size: 18px;
  }
`;
