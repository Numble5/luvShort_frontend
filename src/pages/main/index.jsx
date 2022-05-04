import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import Categories from "@/components/common/categories";
import MainLoginModal from "@components/common/modal/modal";
import { FixedUploadBtn } from "@components/common/button";
import request from "@/api/request";
import ModalBackground from "@/components/modalBackground";
import { changeModalFalse, changeModalTrue } from "@/redux/reducers/modal";

const Main = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    try {
      const payload = {
        category1: user.interests[0],
        category2: user.interests[1],
        category3: user.interests[2],
        gender:
          currentCategory === "여자" || currentCategory === "남자"
            ? currentCategory
            : null,
        city: currentCategory === "우리동네" ? user.state : null,
        district: currentCategory === "우리동네" ? user.city : null,
      };

      const result = await request("/api/videos/filter", "post", {}, payload);

      setVideoList(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const userInfo = user.user;
    if (userInfo) {
      dispatch(changeModalFalse());
    } else {
      dispatch(changeModalTrue());
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentCategory]);

  return (
    <>
      <Header />
      <Navigator />
      {/* {user.user ? (
        <FixedUploadBtn />
      ) : (
        <>
          <ModalBackground />
          <MainLoginModal />
        </>
      )} */}
      <ModalBackground children={<MainLoginModal />} />
      <Wrapper>
        <Categories
          marginTop={"23px"}
          setCurrentCategory={setCurrentCategory}
        />
        <VideoList videos={videoList} />
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 97%;
  margin: 0 auto;
`;
