import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigator from "@components/navigator";
import Main from "@pages/main";

const Routers = (props) => {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default Routers;
