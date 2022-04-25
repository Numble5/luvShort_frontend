import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme, GlobalStyle } from "@styles";
import Routers from "@routes";
import store from "@redux/store/configureStore";
import { tempSetUser, userCheck } from "./redux/reducers/user";

function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(userCheck());
  } catch (e) {
    console.log("localStroage is not working");
  }
}

loadUser();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routers />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
