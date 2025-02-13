import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { detailActions } from './detailSlice';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const baseOptions = {
  api_key: API_KEY,
  language: 'ko-KR',
  include_adult: false,
  certification: 'ALL,12,15',
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

//컨텐츠 조회
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

//상세페이지
const preloadImage = async (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => resolve(imageUrl);
    img.onerror = reject;
  });
};

export const getContentDetail = createAsyncThunk('content/getContentDetail', async ({ type, id }, { dispatch }) => {
  const url = `${BASE_URL}/${type}/${id}`;

  try {
    const response = await axios.get(url, {
      params: {
        ...baseOptions,
        append_to_response: 'credits,videos,similar,recommendations',
      },
    });

    const data = response.data;
    const imageUrl = `https://image.tmdb.org/t/p/w1280${data.backdrop_path || data.poster_path}`;

    try {
      await preloadImage(imageUrl);
      dispatch(
        detailActions.cacheImage({
          path: data.backdrop_path || data.poster_path,
          imageUrl,
        })
      );
    } catch (error) {
      console.error('Image preload failed:', error);
    }

    const videoData = {
      trailer:
        data.videos?.results?.find((video) => video.type === 'Trailer' && video.official) ||
        data.videos?.results?.find((video) => video.type === 'Trailer') ||
        null,
    };

    return {
      ...data,
      videoData,
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

//검색
export const searchContent = createAsyncThunk('content/searchContent', async ({ query, page = 1 }) => {
  const searchUrl = `${BASE_URL}/search/multi`;
  if (!query.trim()) return;
  try {
    const response = await axios.get(searchUrl, {
      params: {
        ...baseOptions,
        query,
        page,
        include_adult: false,
      },
    });

    const results = response.data.results.filter((item) => ['movie', 'tv', 'person'].includes(item.media_type));

    const processedResults = results.map((item) => {
      if (item.media_type === 'person') {
        return {
          ...item,
          known_for: item.known_for?.filter((work) => work.media_type === 'movie' || work.media_type === 'tv'),
        };
      }
      return item;
    });

    return {
      data: processedResults,
      totalPages: response.data.total_pages,
      currentPage: response.data.page,
    };
  } catch (error) {
    console.error('Search API Error:', error);
    throw error;
  }
});
