import { createSlice } from '@reduxjs/toolkit';
import { getCollection, getContentDetail, getEpisodeDetails, getSeasonDetails } from './getThunk';

const initialState = {
  detail: null,
  loading: false,
  error: null,
  cachedImages: {},
  collection: null,
  seasonDetails: null,
  episodeDetails: {},
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    clearDetail: (state) => {
      state.detail = null;
      state.error = null;
      state.collection = null;
      state.seasonDetails = null;
      state.episodeDetails = {};
    },
    cacheImage: (state, action) => {
      state.cachedImages[action.payload.path] = action.payload.imageUrl;
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
      })
      .addCase(getCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCollection.fulfilled, (state, action) => {
        state.collection = action.payload;
        state.loading = false;
      })
      .addCase(getCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSeasonDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSeasonDetails.fulfilled, (state, action) => {
        state.seasonDetails = action.payload;
        state.loading = false;
      })
      .addCase(getSeasonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getEpisodeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEpisodeDetails.fulfilled, (state, action) => {
        state.episodeDetails[action.payload.seasonNumber] = action.payload.episodes;
        state.loading = false;
      })
      .addCase(getEpisodeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
