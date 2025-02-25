import { configureStore } from '@reduxjs/toolkit';
import tmdbR from './modules/tmdbSlice';
import movieR from './modules/movieSlice';
import aniR from './modules/aniSlice';
import kidsR from './modules/kidsSlice';
import dramaR from './modules/dramaSlice';
import comedyR from './modules/comedySlice';
import authR from './modules/authSlice';
import pageR from './modules/pageSlice';
import detailR from './modules/detailSlice';
import couponR from './modules/couponSlice';
import searchR from './modules/searchSlice';
import gsapR from './modules/gsapSlice';
import genre from './modules/genreSlice';

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
    detailR,
    couponR,
    searchR,
    gsapR,
    genre,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['animation/setAnimationProgress', 'animation/setAnimationPlaying'],
        ignoredPaths: ['animations.card', 'animations.scroll'],
      },
    }),
});
