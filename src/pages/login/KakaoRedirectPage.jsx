import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@/components/common/Spinner";
import { client } from "@/lib/api";
import { useNavigate } from "react-router";
import { setEmail, userCheck } from "@/redux/reducers/user";
import axios from "axios";

const KakaoRedirect = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");
  const location = window.location.host;
  const KAKAO_AUTH_URL =
    location === "localhost:3000"
      ? process.env.REACT_APP_REDIRECT_URI_LOCAL
      : process.env.REACT_APP_REDIRECT_URI_DEPLOY;

  const sendAccessToken = async function (authObj) {
    let result = await client.post("/api/auth/kakao-login", {
      access_token: authObj.access_token,
    });
    if (result.data.redirectUrl === "/") {
      dispatch(userCheck());
    } else if (result.data.redirectUrl === "/step1") {
      dispatch(setEmail(result.data.user_email));
      navigate("/step1");
    }
  };

  function requestToken(code) {
    const makeFormData = (params) => {
      const searchParams = new URLSearchParams();
      Object.keys(params).forEach((key) => {
        searchParams.append(key, params[key]);
      });

      return searchParams;
    };

    axios({
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      url: "https://kauth.kakao.com/oauth/token",
      data: makeFormData({
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
        redirect_uri: `${KAKAO_AUTH_URL}`,
        code,
      }),
    }).then((res) => {
      sendAccessToken(res.data);
    });
  }

  requestToken(code);

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

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoRedirect;
