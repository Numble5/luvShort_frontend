import React from "react";
import ReactHelmet from "./ReactHelmet";
import Routers from "./routes";

const App = () => {
  return (
    <>
      <Routers />
      <ReactHelmet></ReactHelmet>
    </>
  );
};

export default App;
