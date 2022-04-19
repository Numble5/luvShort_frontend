import React from "react";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";

const Main = () => {
  return (
    <>
      <Header />
      <VideoList />
      <Navigator />
    </>
  );
};

export default Main;
