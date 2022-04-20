import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "@/pages/login";
import OnBoarding from "@/pages/onBoarding";
import Step1Page from "@/pages/step/Step1Page";
import Main from "@pages/main";
import Step2Page from "@/pages/step/Step2Page";

const Routers = (props) => {
  return (
    <>
      <Routes>
        {/* <Route to="" element={}/> */}
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/on" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
      {/*<Navigator />*/}
    </>
  );
};

export default Routers;
