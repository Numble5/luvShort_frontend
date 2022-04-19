import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigator from "@components/navigator";
import Login from "@/pages/login";
import OnBoarding from "@/pages/onBoarding";

const Routers = (props) => {
  return (
    <>
      <Routes>
        {/* <Route to="" element={}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<OnBoarding />} />
      </Routes>
      {/*<Navigator />*/}
    </>
  );
};

export default Routers;
