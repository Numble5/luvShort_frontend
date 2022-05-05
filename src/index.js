import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routers from "@routes";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme, GlobalStyle } from "@styles";

import store from "@redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
