import { configureStore } from '@reduxjs/toolkit';
import tmdbR from './modules/tmdbSlice';
import authR from './modules/authSlice';
import pageR from './modules/pageSlice';
export const store = configureStore({
  reducer: {
    tmdbR,
    authR,
    pageR,
  },
});
