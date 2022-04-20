import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login";
import Main from "@/pages/main";

const Routers = (props) => {
  return (
    <>
      <Routes>
        {/* <Route to="" element={}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
      {/*<Navigator />*/}
    </>
  );
};

export default Routers;
