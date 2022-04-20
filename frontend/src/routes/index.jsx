import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigator from "@components/navigator";
import Login from "@/pages/login";
import OnBoarding from "@/pages/onBoarding";
import Step1Page from "@/pages/step/Step1Page";

const Routers = (props) => {
  return (
    <>
      <Routes>
        {/* <Route to="" element={}/> */}
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/step1" element={<Step1Page />} />
      </Routes>
      {/*<Navigator />*/}
    </>
  );
};

export default Routers;
