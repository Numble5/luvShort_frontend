const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: "",
};

const navigatorSlice = createSlice({
  name: "navigator",
  initialState,
  reducers: {
    changeNavigator: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeNavigator } = navigatorSlice.actions;
export const selectedNavigator = (state) => state.navigator.value;
export default navigatorSlice.reducer;
