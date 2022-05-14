import { client } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVideoInfo = createAsyncThunk(
  "video/getVideoInfo",
  async (videoInfo) => {
    console.log(videoInfo);
    const response = await client.get(
      `/api/videos/${videoInfo.id}?userEmail=${videoInfo.useremail}`
    );
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  videoLoadingError: null,
  video: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo(state, action) {
      state.video = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideoInfo.pending, (state, action) => {
        state.videoLoadingError = true;
      })
      .addCase(getVideoInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.videoLoadingError = false;
        state.video = action.payload;
      })
      .addCase(getVideoInfo.rejected, (state, action) => {
        state.videoLoadingError = false;
      });
  },
});

export const { setVideo } = videoSlice.actions;

export default videoSlice.reducer;
