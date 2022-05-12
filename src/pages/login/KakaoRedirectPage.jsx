import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "@/components/common/Spinner";
import { client } from "@/lib/api";
import { useNavigate } from "react-router";
import { setEmail, userCheck } from "@/redux/reducers/user";
import axios from "axios";

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Kakao } = window;
  let code = new URL(window.location.href).searchParams.get("code");

  const sendAccessToken = async function (authObj) {
    let result = await client.post("/api/auth/kakao-login", {
      access_token: authObj.access_token,
    });
    if (result.data.redirectUrl === "/") {
      dispatch(userCheck());
    } else if (result.data.redirectUrl === "/step1") {
      console.log(authObj.access_token);
      axios
        .get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: "Bearer " + authObj.access_token,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        })
        .then((res) => {
          const kakao_account = res.kakao_account;
          dispatch(setEmail(kakao_account.email));
        });
      navigate("/step1");
    }
  };

  // const getKakaoTokenHandler = async (code) => {
  //   console.log(code);
  //   const data = {
  //     grant_type: "authorization_code",
  //     client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
  //     redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  //     code: code,
  //   };
  //   const queryString = Object.keys(data)
  //     .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
  //     .join("&");

  //   //토큰 발급 REST API
  //   client
  //     .post("https://kauth.kakao.com/oauth/token", queryString, {
  //       headers: {
  //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //     })
  //     .then((res) => {
  //       //서버에 토큰 전송
  //       // sendKakaoTokenToServer(res.data.access_token);
  //       console.log(res);
  //       sendAccessToken(res.data);
  //     });
  // };

  function requestToken(code) {
    const JS_APP_KEY = "42f138356c44e8bdcbcae522929a5117";
    const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
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
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      url: "https://kauth.kakao.com/oauth/token",
      data: makeFormData({
        grant_type: "authorization_code",
        client_id: JS_APP_KEY,
        redirect_uri: REDIRECT_URI,
        code,
      }),
    }).then((res) => {
      //서버에 토큰 전송
      // sendKakaoTokenToServer(res.data.access_token);
      console.log(res);
      sendAccessToken(res.data);
    });
  }
  useEffect(() => {
    requestToken(code);
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default KakaoRedirect;
