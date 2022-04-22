import React, { Suspense } from "react";
import styled from "styled-components";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import Categories from "@/components/common/categories";
import { FixedUploadBtn } from "@components/common/button";

const Main = () => {
  return (
    <>
      {/* <Suspense fallback={<OnBoarding />}> */}
      <Header />
      <Navigator />
      <Wrapper>
        <Categories marginTop={"23px"} />
        <VideoList />
      </Wrapper>
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
