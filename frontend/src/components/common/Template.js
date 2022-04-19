import styled from "styled-components";
import React from "react";

const TemplateBlock = styled.div`
  position: relative;
  background-color: white;
  margin: 0 auto;
  margin-top: 3em;
  overflow: auto;
  width: 375px;
  height: 812px;
  border-radius: 8px;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
