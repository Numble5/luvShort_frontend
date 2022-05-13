import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import request from "@/api/request";

import Header from "@components/header";
import VideoList from "@components/videoList";
import Navigator from "@components/navigator";
import { MainLoginModal, UploadModal } from "@components/common/modal";
import { FixedUploadBtn, FixedTopBtn } from "@components/common/button";
import ModalBackground from "@components/modalBackground";
import { changeModalFalse, changeModalTrue } from "@redux/reducers/modal";
import { MainCategory } from "@components/common/categories";
import { changeNavigator } from "@/redux/reducers/navigator";
import {
  accessAplication,
  selectUserAccess,
} from "@/redux/reducers/userAccessCount";
import Intro from "@pages/intro";
import { MainFetchData, MainFirstFetchData } from "@/hooks/infiniteScroll";

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  const accessCount = useSelector(selectUserAccess);
  const [target, setTarget] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [videoList, setVideoList] = useState([]);
  const [lastIdx, setlastIdx] = useState(100000);

  const makePayload = () => {
    const payload = {
      category: user.user.interests,
      gender:
        currentCategory === "FEMALE" || currentCategory === "MALE"
          ? currentCategory
          : null,
      city: currentCategory === "우리동네" ? user.city : null,
      district: currentCategory === "우리동네" ? user.district : null,
    };

    return payload;
  };

  useEffect(() => {
    const payload = makePayload();
    MainFirstFetchData({
      email: user.user.email,
      payload: payload,
      lastIdx: lastIdx,
      setLastIdx: setlastIdx,
      setVideoList: setVideoList,
    });
  }, [currentCategory]);

  useEffect(() => {
    const payload = makePayload();
    let observer;
    if (target) {
      observer = new IntersectionObserver(
        ([entry], observer) => {
          if (videoList.length === 0) {
            return;
          }
          MainFetchData({
            entry,
            payload,
            email: user.user.email,
            lastIdx: lastIdx,
            setLastIdx: setlastIdx,
            setVideoList: setVideoList,
          });
        },
        {
          rootMargin: "0px",
          threshold: 0.4,
        }
      );
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, videoList.length]);

  useEffect(() => {
    dispatch(changeNavigator(""));

    if (user.user) {
      dispatch(changeModalFalse());
    } else {
      dispatch(changeModalTrue());
    }
  }, []);

  useEffect(() => {
    if (!accessCount) {
      setTimeout(() => {
        dispatch(accessAplication());
      }, 1000);
    }
  }, []);

  return (
    <>
      {accessCount ? (
        <>
          <Header type={"main"} />
          <Navigator />
          <FixedTopBtn />
          <FixedUploadBtn />
          <Wrapper>
            {user.user ? (
              <MainCategory
                marginTop={"23px"}
                setCurrentCategory={setCurrentCategory}
                interests={user.user.interests}
              />
            ) : (
              <></>
            )}
          </Wrapper>

          <VideoList videos={videoList} />
          <Infinite className="infinite" ref={setTarget}></Infinite>
          {user.user ? (
            <ModalBackground children={<UploadModal />} />
          ) : (
            <ModalBackground children={<MainLoginModal />} />
          )}
        </>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 97%;
  margin: 0 auto;
`;

const Infinite = styled.div`
  width: 100%;
  height: 60px;
`;
