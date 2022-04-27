import React, { Suspense, useState } from "react";
import styled from "styled-components";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import Categories from "@/components/common/categories";
import OnBoarding from "../onBoarding";

import { FixedUploadBtn } from "@components/common/button";
import MainLoginModal from "@components/common/modal/modal";

const Main = () => {
  let [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* <Suspense fallback={<OnBoarding />}> */}
      <Header />
      <Navigator />
      {isLogin ? (
        <Wrapper>
          <Categories marginTop={"23px"} />
          <VideoList />
        </Wrapper>
      ) : (
        <>
          <TempBackground />
          <MainLoginModal />
        </>
      )}
      <FixedUploadBtn />
      {/* </Suspense> */}
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const TempBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0.7;
`;
