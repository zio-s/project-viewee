import { createSlice } from '@reduxjs/toolkit';
import { getContentDetail } from './getThunk';

const initialState = {
  searchData: null,
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearDetail: (state) => {
      state.detail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContentDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContentDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      })
      .addCase(getContentDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
