import { configureStore } from '@reduxjs/toolkit';
import tmdbR from './modules/tmdbSlice';
import movieR from './modules/movieSlice';
import aniR from './modules/aniSlice';
import kidsR from './modules/kidsSlice';
import dramaR from './modules/dramaSlice';
import comedyR from './modules/comedySlice';
import authR from './modules/authSlice';
import pageR from './modules/pageSlice';
export const store = configureStore({
  reducer: {
    tmdbR,
    movieR,
    aniR,
    kidsR,
    dramaR,
    comedyR,
    authR,
    pageR,
  },
});
