import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import user from "@redux/reducers/user";
import navigator from "@redux/reducers/navigator";

const reducers = combineReducers({
  user,
  navigator,
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [],
  // whitelist 이용시 그것만 제외됨
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
