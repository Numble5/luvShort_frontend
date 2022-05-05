const { createSlice } = require("@reduxjs/toolkit");

const modalslice = createSlice({
  name: "modal",
  initialState: {
    value: false,
  },
  reducers: {
    changeModalFalse: (state) => {
      state.value = false;
    },
    changeModalTrue: (state) => {
      state.value = true;
    },
  },
});

export default modalslice.reducer;
export const { changeModalFalse, changeModalTrue } = modalslice.actions;
export const selectedModal = (state) => state.modal.value;
