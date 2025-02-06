import { createSlice } from '@reduxjs/toolkit';
import { getContent } from './getThunk';

const initialState = {
  movies: {
    data: [],
    currentPage: 1,
    totalPages: 1,
  },
  tvShows: {
    data: [],
    currentPage: 1,
    totalPages: 1,
  },
  loading: false,
  error: null,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setPage: (state, action) => {
      const { contentType, page } = action.payload;
      if (contentType === 'movie') {
        state.movies.currentPage = page;
      } else {
        state.tvShows.currentPage = page;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContent.fulfilled, (state, action) => {
        const { type, data, currentPage, totalPages } = action.payload;
        const contentState = type === 'movie' ? state.movies : state.tvShows;

        if (currentPage === 1) {
          contentState.data = data;
        } else {
          contentState.data = [...contentState.data, ...data];
        }

        contentState.currentPage = currentPage;
        contentState.totalPages = totalPages;
        state.loading = false;
        state.currentPage = currentPage;
        state.totalPages = totalPages;
        state.loading = false;
      })
      .addCase(getContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const tmdbActions = contentSlice.actions;
export default contentSlice.reducer;
