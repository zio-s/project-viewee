import { createSlice } from '@reduxjs/toolkit';
import { getContent } from './getThunk';

const initialState = {
  data: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,
  error: null,
};
const dramaSlice = createSlice({
  name: 'drama',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearData: (state) => {
      state.data = [];
      state.currentPage = 1;
      state.totalPages = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContent.fulfilled, (state, action) => {
        if (action.payload.currentPage === 1) {
          state.data = action.payload.data;
        } else {
          const newData = action.payload.data.filter(
            (newItem) => !state.data.some((existingItem) => existingItem.id === newItem.id)
          );
          state.data = [...state.data, ...newData];
        }
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
export const dramaActions = dramaSlice.actions;
export default dramaSlice.reducer;
