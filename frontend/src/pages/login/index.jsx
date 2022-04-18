import React from "react";

const Login = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const LoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const Logout = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${REDIRECT_URI}`;
  return (
    <>
      <a href={LoginUrl}>카카오톡으로 로그인하기</a>
      <a href={Logout}>로그아웃</a>
    </>
  );
};

export default Login;
