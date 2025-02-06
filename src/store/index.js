import { configureStore } from '@reduxjs/toolkit';
import tmdbR from './modules/tmdbSlice';
import authR from './modules/authSlice';
export const store = configureStore({
  reducer: {
    tmdbR,
    authR,
  },
});
