import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import request from "@/api/request";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import { MainLoginModal } from "@components/common/modal/modal";
import { FixedUploadBtn } from "@components/common/button";
import ModalBackground from "@components/modalBackground";
import { changeModalFalse, changeModalTrue } from "@redux/reducers/modal";
import { UploadModal } from "@components/common/modal/modal";
import { MainCategory } from "@components/common/categories";

const Main = () => {
  const user = useSelector(({ user }) => user);
  console.log(user);
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
          currentCategory === "여성" || currentCategory === "남성"
            ? currentCategory
            : null,
        city: currentCategory === "우리동네" ? user.city : null,
        district: currentCategory === "우리동네" ? user.district : null,
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
      <Header type={"main"} />
      <Navigator />

      <FixedUploadBtn />
      <Wrapper>
        <MainCategory
          marginTop={"23px"}
          setCurrentCategory={setCurrentCategory}
        />
      </Wrapper>
      <VideoList videos={videoList} />

      {/* {user.user ? (
        <ModalBackground children={<UploadModal />} />
      ) : (
        <ModalBackground children={<MainLoginModal />} />
      )} */}
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 97%;
  margin: 0 auto;
`;
