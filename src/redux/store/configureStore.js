import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@redux/reducers/user";
import navigatorReducer from "@redux/reducers/navigator";

const store = configureStore({
  reducer: {
    user: userReducer,
    navigator: navigatorReducer,
  },
});

export default store;
