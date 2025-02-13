import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postData: [],
  postsperPage: 10,
  currentPage: 1,
  totalPage: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePostsPerPage: (state, action) => {
      state.postsperPage = action.payload;
    },
    addData: (state, action) => {
      state.postData = action.payload;
    },
    totalData: (state, action) => {
      state.totalPage = Math.ceil(state.postData.length / state.postsperPage);
    },
    nextPage: (state, action) => {
      if (state.currentPage < state.totalPage) {
        state.currentPage++;
      }
    },
    currentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;
export default pageSlice.reducer;
