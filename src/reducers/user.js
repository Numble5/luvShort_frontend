import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: "",
  birthday: "",
  gender: "",
  state: "",
  city: "",
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
});

export const {
  changeNickname,
  changeBirthday,
  changeGender,
  changeState,
  changeCity,
} = userSlice.actions;

export default userSlice.reducer;
