import Header from "@/components/header";
import Navigator from "@/components/navigator";
import { changeNavigator } from "@/redux/reducers/navigator";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
  }, []);

  return (
    <>
      <Header type={"MY"} />
      <Navigator />
    </>
  );
};

export default MyPage;
