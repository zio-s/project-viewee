import { createSlice } from '@reduxjs/toolkit';
import { searchContent } from './getThunk';

const initialState = {
  searchData: [],
  totalPages: 0,
  currentPage: 1,
  isLoading: false,
  error: null,
  searchQuery: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchData = [];
      state.searchQuery = '';
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchContent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchData = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(searchContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
