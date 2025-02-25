import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '8dfd8b4b950575a80ae0f23599980a76';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchGenreContent = createAsyncThunk('genre/fetchGenreContent', async (genreId) => {
  const response = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=ko-KR`
  );
  return response.data.results;
});

const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    selectedGenre: null,
    contentList: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setGenre(state, action) {
      state.selectedGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenreContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenreContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contentList = action.payload;
      })
      .addCase(fetchGenreContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setGenre } = genreSlice.actions;
export default genreSlice.reducer;
