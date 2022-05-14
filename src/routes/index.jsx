import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "@pages/login";
import Step1Page from "@pages/step/Step1Page";
import Main from "@pages/main";
import Step2Page from "@pages/step/Step2Page";
import RegisterSuccessPage from "@/pages/step/RegisterSuccessPage";
import Interests from "@pages/Interests";
import LoginCallbackPage from "@pages/login/LoginCallbackPage";
import FileUploadPage from "@pages/file-upload/FileUploadPage";
import Detail from "@pages/detail";
import Alarm from "@pages/alarm";
import MyPage from "@pages/mypage";
import Profile from "@pages/profile";
import ProfileEdit from "@pages/profileEdit";
//import AccountManage from "@pages/accountManage";
import Chatting from "@/pages/chatting";
import ChatScreen from "@/pages/chatScreen";
import ErrorPage from "@/pages/404Error";
import KakaoRedirectPage from "@/pages/login/KakaoRedirectPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/register-success" element={<RegisterSuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/naver/auth/callback" element={<LoginCallbackPage />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirectPage />} />
        <Route path="/file-upload" element={<FileUploadPage />} />
        <Route
          path="/file-upload/embed"
          element={<FileUploadPage embed="embed" />}
        />
        {/* 아래에서부터는 링크 */}
        <Route path="/liked" element={<Interests />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/chatting/:roomid" element={<ChatScreen />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<ProfileEdit />} />
        <Route path="/mypage/:id" element={<Profile />} />
        <Route path="/videos/edit/:id" element={<FileUploadPage />} />
        <Route
          path="/videos/embed/edit/:id"
          element={<FileUploadPage embed="embed" />}
        />
        {/*<Route path="/manage" element={<AccountManage />} />*/}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Routers;
