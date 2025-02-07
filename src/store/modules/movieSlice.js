import { createSlice } from '@reduxjs/toolkit';
import { getContent } from './getThunk';

const initialState = {
  data: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContent.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
      })
      .addCase(getContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
