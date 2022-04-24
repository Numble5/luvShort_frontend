import { client } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitUserInfo = createAsyncThunk(
  "user/submitUserInfo",
  async (userInfo) => {
    const response = await client.post("백엔드 지정 주소", userInfo);
    return response.data;
  }
);

export const userCheck = createAsyncThunk("user/userCheck", async () => {
  const response = await client.get("/api/auth/check");
  return response.data;
});

const initialState = {
  user: null,
  userCheckError: null,
  userCheckLoading: null,
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
      })
      .addCase(userCheck.pending, (state, action) => {
        state.userCheckLoading = true;
      })
      .addCase(userCheck.fulfilled, (state, action) => {
        state.userCheckLoading = false;
        state.user = action.payload;
      })
      .addCase(userCheck.rejected, (state, action) => {
        state.userCheckLoading = false;
        state.user = null;
        state.userCheckError = true;
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
