import { client } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Flight from "@pages/step/assets-step2/Vector.svg";
import Shopping from "@pages/step/assets-step2/shopping.svg";
import Sport from "@pages/step/assets-step2/sport.svg";
import Movie from "@pages/step/assets-step2/movie.svg";
import Game from "@pages/step/assets-step2/game.svg";
import Music from "@pages/step/assets-step2/music.svg";
import Animal from "@pages/step/assets-step2/animal.svg";
import Book from "@pages/step/assets-step2/book.svg";
import Cooking from "@pages/step/assets-step2/cooking.svg";

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
  categories: [],
  interests: [
    {
      name: "여행",
      checked: false,
      imgSrc: Flight,
    },
    {
      name: "쇼핑",
      checked: false,
      imgSrc: Shopping,
    },
    {
      name: "스포츠",
      checked: false,
      imgSrc: Sport,
    },
    {
      name: "영화시청",
      checked: false,
      imgSrc: Movie,
    },
    {
      name: "게임",
      checked: false,
      imgSrc: Game,
    },
    {
      name: "음악",
      checked: false,
      imgSrc: Music,
    },
    {
      name: "반려동물",
      checked: false,
      imgSrc: Animal,
    },
    {
      name: "독서",
      checked: false,
      imgSrc: Book,
    },
    {
      name: "요리",
      checked: false,
      imgSrc: Cooking,
    },
  ],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo(state, action) {
      state.video = null;
    },
    setCategories(state, action) {
      state.categories = [];
    },
    setCategoriesInterests(state, action) {
      state.categories = action.payload.beforeCategories;
      state.interests = action.payload.beforeInterests;
    },
    setInterests(state, action) {
      state.interests = initialState.interests;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideoInfo.pending, (state, action) => {
        state.videoLoadingError = true;
      })
      .addCase(getVideoInfo.fulfilled, (state, action) => {
        state.videoLoadingError = false;
        state.video = action.payload;
      })
      .addCase(getVideoInfo.rejected, (state, action) => {
        state.videoLoadingError = false;
      });
  },
});

export const { setVideo, setCategoriesInterests, setCategories, setInterests } =
  videoSlice.actions;

export default videoSlice.reducer;
