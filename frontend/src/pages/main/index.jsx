import React, { Suspense } from "react";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import { FixedUploadBtn } from "@components/common/button";

const Main = () => {
  return (
    <>
      {/* <Suspense fallback={<OnBoarding />}> */}
      <Header />
      <Navigator />
      <VideoList />
      <FixedUploadBtn />
      {/* </Suspense> */}
    </>
  );
};

export default Main;
