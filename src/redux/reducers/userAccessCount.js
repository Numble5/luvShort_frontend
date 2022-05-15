const { createSlice } = require("@reduxjs/toolkit");

const userAccessCountSlice = createSlice({
  name: "userAccess",
  initialState: {
    value: false,
  },
  reducers: {
    accessAplication: (state) => {
      state.value = true;
    },
  },
});

export default userAccessCountSlice.reducer;
export const { accessAplication } = userAccessCountSlice.actions;
export const selectUserAccess = (state) => state.userAccessCount.value;
