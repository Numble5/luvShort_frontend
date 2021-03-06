import user from "@/redux/reducers/user";
import React from "react";

import styled from "styled-components";
import Union from "./assets/Union.svg";
import MainHeader from "./mainHeader";
import ProfileHeader from "./profileHeader";

const Header = ({ type, userInfo }) => {
  return (
    <StyledHeader>
      {type === "main" ? (
        <MainHeader userInfo={userInfo} />
      ) : (
        <ProfileHeader type={type} userInfo={userInfo} />
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding-top: 20px;
  width: 100%;
  min-height: 240px;

  margin: 0 auto;
  background-image: url(${Union});
  background-repeat: no-repeat;
  background-size: cover;
`;
