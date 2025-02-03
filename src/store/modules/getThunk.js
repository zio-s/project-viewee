import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// 🎥 비동기 Thunk: 인기 영화 가져오기
export const getTmdb = createAsyncThunk('movies/fetchPopular', async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`;
  try {
    const res = await axios.get(url);
    return res.data.results; // 영화 데이터 반환
  } catch (error) {
    throw new Error('영화 데이터를 불러오지 못했습니다.');
  }
});
