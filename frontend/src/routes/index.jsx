import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigator from "@components/navigator";

const Routers = (props) => {
  return (
    <>
      <Navigator />
      <Routes>{/* <Route to="" element={}/> */}</Routes>
    </>
  );
};

export default Routers;
