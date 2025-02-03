import { createSlice } from '@reduxjs/toolkit';
import { getDB } from './getThunk';
// 🎬 초기 상태
const initialState = {
  movies: [],
  status: 'idle', // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

// 🎬 Redux 슬라이스 생성
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDB.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDB.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(getDB.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
