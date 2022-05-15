import request from "@/api/request";
import Spinner from "@/components/common/Spinner";
import { tempSetUser } from "@/redux/reducers/user";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const KakaoLogoutRedirectPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispath = useDispatch();

  const getSignout = async () => {
    try {
      await request("/api/logout", "delete");
      window.localStorage.clear();
      dispath(tempSetUser(null));
      setIsLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSignout();
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log(window.localStorage);
      navigate("/login");
    }
  }, [isLoading]);

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoLogoutRedirectPage;
