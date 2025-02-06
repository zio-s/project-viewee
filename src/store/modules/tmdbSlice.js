import { createSlice } from '@reduxjs/toolkit';
import { getContent } from './getThunk';

const initialState = {
  movies: [], // 영화 데이터
  tvShows: [], // TV 프로그램 데이터
  loading: false,
  error: null,
  currentContent: null,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setCurrentContent: (state, action) => {
      state.currentContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContent.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        if (type === 'movie') {
          state.movies = data;
        } else {
          state.tvShows = data;
        }
        state.loading = false;
      })
      .addCase(getContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentContent } = contentSlice.actions;
export default contentSlice.reducer;
