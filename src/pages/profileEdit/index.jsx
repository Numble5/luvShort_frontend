import Navigator from "@/components/navigator";
import { changeNavigator } from "@/redux/reducers/navigator";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProfileEdit = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavigator("mypage"));
  }, []);

  return <Navigator />;
};

export default ProfileEdit;
