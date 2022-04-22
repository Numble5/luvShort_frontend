import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const submitUserInfo = createAsyncThunk(
  "user/submitUserInfo",
  async (userInfo) => {
    const response = await axios.post("백엔드 지정 주소", userInfo);
    return response.data;
  }
);

const initialState = {
  stepTWoLoading: false,
  nickname: "",
  birthday: "",
  gender: "",
  state: "",
  city: "",
  interest: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeNickname(state, action) {
      state.nickname = action.payload;
    },
    changeBirthday(state, action) {
      state.birthday = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
    changeState(state, action) {
      state.state = action.payload;
    },
    changeCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitUserInfo.pending, (state, action) => {
        state.stepTWoLoading = true;
      })
      .addCase(submitUserInfo.fulfilled, (state, action) => {
        state = { ...action.payload, stepTWoLoading: false };
      });
  },
});

export const {
  changeNickname,
  changeBirthday,
  changeGender,
  changeState,
  changeCity,
} = userSlice.actions;

export default userSlice.reducer;
