import { configureStore } from '@reduxjs/toolkit';
import tmdbR from './modules/tmdbSlice';
export const store = configureStore({
  reducer: {
    tmdbR,
  },
});
