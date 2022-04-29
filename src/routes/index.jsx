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

const Routers = (props) => {
  return (
    <>
      <Routes>
        {/* <Route to="" element={}/> */}
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/register-success" element={<RegisterSuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/naver/auth/callback" element={<LoginCallbackPage />} />
        <Route path="/interest" element={<Interests />} />
        <Route path="/file-upload" element={<FileUploadPage />} />
      </Routes>
    </>
  );
};

export default Routers;
