import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import user from "@redux/reducers/user";
import navigator from "@redux/reducers/navigator";
import modal from "@redux/reducers/modal";
import video from "@redux/reducers/video";
import userAccessCount from "@redux/reducers/userAccessCount";

const reducers = combineReducers({
  user,
  navigator,
  modal,
  userAccessCount,
  video,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
