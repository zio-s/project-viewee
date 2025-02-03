import { configureStore } from '@reduxjs/toolkit';
import tmdbR from './modules/getThunk';
export const store = configureStore({
  reducer: {
    tmdbR,
  },
});
