import { createSlice } from '@reduxjs/toolkit';
import { MainPageData } from './getThunk';
const initialState = {
  trending: [],
  hot: [],
  review: [],
  upcoming: [],
  nowPlaying: [],
  loading: false,
  error: null,
};

const tmdbRSlice = createSlice({
  name: 'tmdbR',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(MainPageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(MainPageData.fulfilled, (state, action) => {
        state.trending = action.payload.trending;
        state.hot = action.payload.hot;
        state.upcoming = action.payload.upcoming;
        state.nowPlaying = action.payload.nowPlaying;
        state.review = action.payload.review;
        state.loading = false;
      })
      .addCase(MainPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { addToRecentlyViewed, addToContinueWatching } = tmdbRSlice.actions;
export default tmdbRSlice.reducer;
