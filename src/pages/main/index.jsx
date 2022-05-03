import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import Categories from "@/components/common/categories";
import MainLoginModal from "@components/common/modal/modal";
import { FixedUploadBtn } from "@components/common/button";

const Main = () => {
  const user = useSelector(({ user }) => user.user);
  const [currentCateogry, setCurrentCategory] = useState("전체");
  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(currentCateogry);
  }, []);

  return (
    <>
      <Header />
      <Navigator />
      {/* {user ? (
        <></>
      ) : (
        <>
          <TempBackground />
          <MainLoginModal />
        </>
      )} */}
      <Wrapper>
        <Categories
          marginTop={"23px"}
          setCurrentCategory={setCurrentCategory}
        />
        {/* <VideoList currentCateogry={currentCateogry} /> */}
      </Wrapper>
      <FixedUploadBtn />
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 97%;
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
