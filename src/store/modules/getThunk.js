import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const baseOptions = {
  api_key: API_KEY,
  language: 'ko-KR',
};

const CATEGORY_CONFIG = {
  movie: {
    type: 'movie',
    endpoint: 'discover/movie',
    genreId: null,
  },
  drama: {
    type: 'tv',
    endpoint: 'discover/tv',
    genreId: 18,
  },
  comedy: {
    type: 'tv',
    endpoint: 'discover/tv',
    genreId: 35,
  },
  animation: {
    type: 'movie',
    endpoint: 'discover/movie',
    genreId: 16,
  },
  kids: {
    type: 'tv',
    endpoint: 'discover/tv',
    genreId: 10762,
  },
};

export const getContent = createAsyncThunk('content/getContent', async ({ category, page = 1 }) => {
  const config = CATEGORY_CONFIG[category];
  if (!config) throw new Error('불러온 데이터가 없습니다.');

  const url = `${BASE_URL}/${config.endpoint}`;

  try {
    const options = {
      ...baseOptions,
      page,
      with_genres: config.genreId,
    };

    const response = await axios.get(url, { params: options });

    return {
      data: response.data.results,
      totalPages: response.data.total_pages,
      currentPage: response.data.page,
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

export const getContentDetail = createAsyncThunk('content/getContentDetail', async ({ type, id }) => {
  const url = `${BASE_URL}/${type}/${id}`;

  try {
    const response = await axios.get(url, {
      params: {
        ...baseOptions,
        append_to_response: 'credits,videos',
      },
    });

    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});
