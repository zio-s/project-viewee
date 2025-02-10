import { createSlice } from '@reduxjs/toolkit';
import { getContentDetail } from './getThunk';

const initialState = {
  detail: null,
  loading: false,
  error: null,
};

const detailSlice = createSlice({
  name: 'detail',
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

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
