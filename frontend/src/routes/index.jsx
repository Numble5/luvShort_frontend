import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigator from "@components/navigator";
<<<<<<< HEAD
import Main from "@pages/main";
=======
import Login from "@/pages/login";
import OnBoarding from "@/pages/onBoarding";
>>>>>>> 028dc43e57c42ee1cde07e25ea0942356821e814

const Routers = (props) => {
  return (
    <>
<<<<<<< HEAD
      <Navigator />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
=======
      <Routes>
        {/* <Route to="" element={}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<OnBoarding />} />
      </Routes>
      {/*<Navigator />*/}
>>>>>>> 028dc43e57c42ee1cde07e25ea0942356821e814
    </>
  );
};

export default Routers;
