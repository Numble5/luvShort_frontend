import { client } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitUserInfo = createAsyncThunk(
  "user/submitUserInfo",
  async (userInfo) => {
    const response = await client.post("/api/auth/register-submit", userInfo);
    return response.data;
  }
);

export const userCheck = createAsyncThunk("user/userCheck", async () => {
  const response = await client.get("/api/auth/check");
  return response.data;
});

export const nicknameCheck = createAsyncThunk(
  "user/nicknameCheck",
  async (nickname) => {
    const response = await client.get(`/api/auth/check/${nickname}`);
    return response.data;
  }
);

const initialState = {
  email: null,
  user: null,
  userCheckError: null,
  userCheckLoading: null,
  nicknameCheckError: null,
  nicknameCheckLoading: null,
  submitUserInfoError: null,
  submitUserInfoLoading: false,
  birthdayError: null,
  nickname: "",
  birthday: "",
  gender: "",
  city: "서울",
  district: "강동구",
  interests: "",
  thumbnail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tempSetUser(state, action) {
      state.user = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    changeNickname(state, action) {
      state.nickname = action.payload;
    },
    changeBirthday(state, action) {
      state.birthday = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
    changeCity(state, action) {
      state.city = action.payload;
    },
    changeDistrict(state, action) {
      state.district = action.payload;
    },
    changeBirtdayError(state, action) {
      state.birthdayError = action.payload;
    },
    setNicknameCheckNull(state, action) {
      state.nicknameCheckError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitUserInfo.pending, (state, action) => {
        state.submitUserInfoLoading = true;
      })
      .addCase(submitUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.submitUserInfoLoading = false;
        state.submitUserInfoError = false;
        state.interests = action.payload.selectedInterests;
      })
      .addCase(submitUserInfo.rejected, (state, action) => {
        state.submitUserInfoLoading = false;
        state.submitUserInfoError = action.error.message;
      })
      .addCase(userCheck.pending, (state, action) => {
        state.userCheckLoading = true;
      })
      .addCase(userCheck.fulfilled, (state, action) => {
        state.userCheckLoading = false;
        console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(userCheck.rejected, (state, action) => {
        state.userCheckLoading = false;
        state.user = null;
        state.userCheckError = true;
      })
      .addCase(nicknameCheck.pending, (state, action) => {
        state.nicknameCheckLoading = true;
      })
      .addCase(nicknameCheck.fulfilled, (state, action) => {
        state.nicknameCheckLoading = false;
        state.nicknameCheckError = false;
      })
      .addCase(nicknameCheck.rejected, (state, action) => {
        state.nicknameCheckLoading = false;
        state.nicknameCheckError = true;
      });
  },
});

export const {
  setEmail,
  changeNickname,
  changeBirthday,
  changeGender,
  changeCity,
  changeDistrict,
  changeBirtdayError,
  setNicknameCheckNull,
  tempSetUser,
} = userSlice.actions;

export default userSlice.reducer;
