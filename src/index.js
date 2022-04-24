import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme, GlobalStyle } from "@styles";
import Routers from "@routes";
import store from "@redux/store/configureStore";

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
