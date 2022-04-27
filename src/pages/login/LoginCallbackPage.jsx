import { client } from "@/lib/api";
import { userCheck } from "@/redux/reducers/user";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const { naver } = window;

const LoginCallbackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(({ user }) => user.user);

  const naverLogin = new naver.LoginWithNaverId({
    clientId: "ifHDEHFmeaVaiNSc4KOn",
    callbackUrl: "http://localhost:3000/naver/auth/callback",
    isPopup: false, // popup 형식으로 띄울것인지 설정
    callbackHandle: true,
  });
  naverLogin.init();

  window.addEventListener("load", async () => {
    if (!location.hash) return;
    const access_token = location.hash.split("=")[1].split("&")[0];
    const result = await client.post(
      "/api/auth/naver-login",
      {
        access_token,
      },
      {
        withCredentials: true,
      }
    );
    if (result.data.redirectUrl === "/step1") {
      navigate("/step1");
    } else if (result.data.redirectUrl === "/") {
      dispatch(userCheck());
    }
  });

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬스토리지가 작동 안해요.");
      }
    }
  }, [user]);

  return <div></div>;
};

export default LoginCallbackPage;
