import request from "@/api/request";
import Spinner from "@/components/common/Spinner";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const KakaoLogoutRedirectPage = (props) => {
  const navigate = useNavigate();

  const getSignout = async () => {
    try {
      await request("/api/logout", "delete");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSignout();
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("persist:root");

    navigate("/login");
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoLogoutRedirectPage;
