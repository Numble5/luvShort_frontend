import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "@pages/login";
import Step1Page from "@pages/step/Step1Page";
import Main from "@pages/main";
import Step2Page from "@pages/step/Step2Page";
import RegisterSuccessPage from "@/pages/step/RegisterSuccessPage";
import Interests from "@pages/Interests/noInterests";
import LoginCallbackPage from "@pages/login/LoginCallbackPage";
import FileUploadPage from "@pages/file-upload/FileUploadPage";
import Detail from "@pages/detail";
import Alarm from "@/pages/alarm";
import MyPage from "@/pages/mypage";

const Routers = (props) => {
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
        <Route path="/file-upload" element={<FileUploadPage />} />
        <Route
          path="/file-upload/embed"
          element={<FileUploadPage embed="embed" />}
        />
        {/* 아래에서부터는 링크 */}
        <Route path="/liked" element={<Interests />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
};

export default Routers;
