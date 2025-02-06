import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const baseOptions = {
  api_key: API_KEY,
  language: 'ko-KR',
};

// 콘텐츠 타입별 장르 ID
const GENRES = {
  movie: {
    action: 28,
    animation: 16,
    comedy: 35,
    drama: 18,
    family: 10751,
  },
  tv: {
    animation: 16,
    comedy: 35,
    drama: 18,
    reality: 10764,
    kids: 10762,
  },
};

// 카테고리별 엔드포인트
const ENDPOINTS = {
  now_playing: {
    movie: 'movie/now_playing',
    tv: 'tv/on_the_air',
  },
  popular: {
    movie: 'movie/popular',
    tv: 'tv/popular',
  },
  top_rated: {
    movie: 'movie/top_rated',
    tv: 'tv/top_rated',
  },
};

export const getContent = createAsyncThunk(
  'content/getContent',
  async ({ type = 'movie', category = 'now_playing', genre }) => {
    const endpoint = ENDPOINTS[category][type];
    const url = `${BASE_URL}/${endpoint}`;

    try {
      const options = {
        ...baseOptions,
        with_genres: genre ? GENRES[type][genre] : undefined,
      };

      const response = await axios.get(url, { params: options });
      return {
        type,
        category,
        genre,
        data: response.data.results,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
