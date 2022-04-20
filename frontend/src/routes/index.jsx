import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "@pages/main";
import Login from "@pages/login";
import OnBoarding from "@pages/onBoarding";

const Routers = (props) => {
  return (
    <>
      <Routes>
        <Route path="/on" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
      {/*<Navigator />*/}
    </>
  );
};

export default Routers;
