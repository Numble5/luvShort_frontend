import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme, GlobalStyle } from "@styles";

import store from "@redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { tempSetUser, userCheck } from "./redux/reducers/user";
import App from "./App";
import { initVConsole } from "./lib/initVConsole";

function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) {
      window.location.href("/");
      console.log("아아");
    }
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(userCheck());
  } catch (e) {
    console.log("localStroage is not working");
  }
}

loadUser();

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);
