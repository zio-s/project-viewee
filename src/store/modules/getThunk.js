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
const GENRES = {
  ACTION: 28,
  ADVENTURE: 12,
  ANIMATION: 16,
  COMEDY: 35,
  CRIME: 80,
  DOCUMENTARY: 99,
  DRAMA: 18,
  FAMILY: 10751,
  FANTASY: 14,
  HORROR: 27,
  MYSTERY: 9648,
  ROMANCE: 10749,
  SCIFI: 878,
  THRILLER: 53,
  KIDS: 10762,
  REALITY: 10764,
  SOAP: 10766,
  TALK: 10767,
};

const CATEGORY_CONFIG = {
  movie: {
    type: 'movie',
    endpoint: 'discover/movie',
    params: {
      include_adult: false,
      include_video: false,
      sort_by: 'popularity.desc',
      'vote_average.gte': 7.0,
      'vote_count.gte': 100,
      with_original_language: 'ko',
      region: 'KR',
    },
  },
  drama: {
    type: 'tv',
    endpoint: 'discover/tv',
    params: {
      with_genres: GENRES.DRAMA,
      sort_by: 'popularity.desc',
      'vote_average.gte': 5.0,
      'vote_count.gte': 20,
      with_original_language: 'ko',
      origin_country: 'KR',
    },
  },
  comedy: {
    type: 'tv',
    endpoint: 'discover/tv',
    params: {
      with_genres: GENRES.COMEDY,
      sort_by: 'popularity.desc',
      'vote_average.gte': 5.0,
      'vote_count.gte': 20,
      with_original_language: 'ko',
      origin_country: 'KR',
    },
  },
  animation: {
    type: 'movie',
    endpoint: 'discover/movie',
    params: {
      with_genres: GENRES.ANIMATION,
      include_adult: false,
      'vote_average.gte': 5.0,
      'vote_count.gte': 20,
      with_original_language: 'ja',
      region: 'JP',
      sort_by: 'release_date.desc',
    },
  },
  kids: {
    type: 'tv',
    endpoint: 'discover/tv',
    params: {
      with_genres: `${GENRES.KIDS}`,
      'vote_average.gte': 3.0,
      'vote_count.gte': 5,
      with_original_language: 'ko,ja',
      origin_country: 'KR,JP,US',
      sort_by: 'first_air_date.desc',
    },
  },
};
//컨텐츠 조회
const removeDuplicatesById = (array) => {
  const seen = new Set();
  return array.filter((item) => {
    if (seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
};
export const getContent = createAsyncThunk('content/getContent', async ({ category, page = 1 }) => {
  const config = CATEGORY_CONFIG[category];
  if (!config) throw new Error('Invalid category');

  try {
    if (category === 'kids') {
      const mainOptions = {
        ...baseOptions,
        ...config.params,
        page,
      };

      const fallbackOptions = {
        ...baseOptions,
        with_genres: `${GENRES.ANIMATION},${GENRES.FAMILY}`,
        'vote_average.gte': 5.0,
        'vote_count.gte': 10,
        origin_country: 'KR',
        sort_by: 'first_air_date.desc',
        page,
      };

      const [mainResponse, fallbackResponse] = await Promise.all([
        axios.get(`${BASE_URL}/${config.endpoint}`, { params: mainOptions }),
        axios.get(`${BASE_URL}/${config.endpoint}`, { params: fallbackOptions }),
      ]);

      const combinedResults = removeDuplicatesById([...mainResponse.data.results, ...fallbackResponse.data.results]);

      return {
        data: combinedResults,
        totalPages: Math.max(mainResponse.data.total_pages, fallbackResponse.data.total_pages),
        currentPage: page,
      };
    }

    const options = {
      ...baseOptions,
      ...config.params,
      page,
    };
    if (config.type === 'tv') {
      const [primaryResponse, backupResponse] = await Promise.all([
        axios.get(`${BASE_URL}/${config.endpoint}`, { params: options }),
        axios.get(`${BASE_URL}/tv/top_rated`, {
          params: {
            ...baseOptions,
            with_original_language: 'ko',
            origin_country: 'KR',
            page,
          },
        }),
      ]);

      const combinedResults = removeDuplicatesById([...primaryResponse.data.results, ...backupResponse.data.results]);

      const filteredResults = combinedResults.filter((item) => {
        if (category === 'drama') {
          return item.genre_ids.includes(GENRES.DRAMA);
        } else if (category === 'comedy') {
          return item.genre_ids.includes(GENRES.COMEDY);
        }
        return true;
      });

      return {
        data: filteredResults,
        totalPages: Math.max(primaryResponse.data.total_pages, backupResponse.data.total_pages),
        currentPage: page,
      };
    }

    if (category === 'animation') {
      const [primaryResponse, popularResponse] = await Promise.all([
        axios.get(`${BASE_URL}/${config.endpoint}`, { params: options }),
        axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            ...baseOptions,
            with_genres: GENRES.ANIMATION,
            with_original_language: 'ko',
            region: 'KR',
            page,
          },
        }),
      ]);

      const combinedResults = removeDuplicatesById([...primaryResponse.data.results, ...popularResponse.data.results]);

      const filteredResults = combinedResults.filter((item) => item.genre_ids.includes(GENRES.ANIMATION));

      return {
        data: filteredResults,
        totalPages: Math.max(primaryResponse.data.total_pages, popularResponse.data.total_pages),
        currentPage: page,
      };
    }
    const response = await axios.get(`${BASE_URL}/${config.endpoint}`, { params: options });
    return {
      data: response.data.results,
      totalPages: response.data.total_pages,
      currentPage: page,
    };
  } catch (error) {
    console.error('Content fetch error:', error);
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
        append_to_response: 'credits,videos,similar,recommendations,release_dates,content_ratings',
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
    if (data.belongs_to_collection) {
      dispatch(getCollection(data.belongs_to_collection.id));
    }

    if (type === 'tv' && data.seasons) {
      dispatch(getSeasonDetails({ tvId: id, seasons: data.seasons }));
    }
    return {
      ...data,
      videoData,
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

//컬렉션
export const getCollection = createAsyncThunk('content/getCollection', async (collectionId) => {
  try {
    const collectionResponse = await axios.get(`${BASE_URL}/collection/${collectionId}`, { params: baseOptions });

    const parts = collectionResponse.data.parts || [];

    const detailedParts = await Promise.all(
      parts.map(async (part) => {
        const movieResponse = await axios.get(`${BASE_URL}/movie/${part.id}`, { params: baseOptions });

        if (movieResponse.data.backdrop_path || movieResponse.data.poster_path) {
          const imageUrl = `https://image.tmdb.org/t/p/w500${
            movieResponse.data.backdrop_path || movieResponse.data.poster_path
          }`;
          try {
            await preloadImage(imageUrl);
          } catch (error) {
            console.error('Collection movie image preload failed:', error);
          }
        }

        return movieResponse.data;
      })
    );

    return {
      ...collectionResponse.data,
      parts: detailedParts,
    };
  } catch (error) {
    console.error('Collection API Error:', error);
    throw error;
  }
});

//시즌
export const getSeasonDetails = createAsyncThunk('content/getSeasonDetails', async ({ tvId, seasons }) => {
  try {
    const seasonPromises = seasons.map(async (season) => {
      const seasonResponse = await axios.get(`${BASE_URL}/tv/${tvId}/season/${season.season_number}`, {
        params: baseOptions,
      });
      if (seasonResponse.data.poster_path) {
        const imageUrl = `https://image.tmdb.org/t/p/w500${seasonResponse.data.poster_path}`;
        try {
          await preloadImage(imageUrl);
        } catch (error) {
          console.error('Season image preload failed:', error);
        }
      }
      return seasonResponse.data;
    });
    const seasonDetails = await Promise.all(seasonPromises);
    return seasonDetails;
  } catch (error) {
    console.error('Season Details API Error:', error);
    throw error;
  }
});

export const getEpisodeDetails = createAsyncThunk('content/getEpisodeDetails', async ({ tvId, seasonNumber }) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvId}/season/${seasonNumber}`, {
      params: {
        ...baseOptions,
      },
    });
    const episodes = response.data.episodes.map((episode) => ({
      ...episode,
      overview: episode.overview || '줄거리 정보가 없습니다.',
    }));

    return {
      seasonNumber,
      episodes,
    };
  } catch (error) {
    console.error('Episode Details API Error:', error);
    throw error;
  }
});

//검색
const addSpaceToKorean = (query) => {
  return query
    .replace(/([가-힣]+)([A-Za-z0-9]+)/g, '$1 $2')
    .replace(/([A-Za-z0-9]+)([가-힣]+)/g, '$1 $2')
    .replace(/([가-힣])([가-힣]{2,})/g, '$1 $2');
};
export const searchContent = createAsyncThunk('content/searchContent', async ({ query, page = 1 }) => {
  const searchUrl = `${BASE_URL}/search/multi`;
  if (!query.trim()) return;
  const modifiedQuery = addSpaceToKorean(query);

  try {
    const response1 = await axios.get(searchUrl, {
      params: {
        ...baseOptions,
        query,
        page,
        include_adult: false,
        language: 'ko-KR',
      },
    });

    let results = response1.data.results.filter((item) => ['movie', 'tv', 'person'].includes(item.media_type));

    if (results.length === 0) {
      const response2 = await axios.get(searchUrl, {
        params: {
          ...baseOptions,
          query: modifiedQuery,
          page,
          include_adult: false,
          language: 'ko-KR',
        },
      });

      results = response2.data.results.filter((item) => ['movie', 'tv', 'person'].includes(item.media_type));
    }

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
      totalPages: response1.data.total_pages,
      currentPage: response1.data.page,
    };
  } catch (error) {
    console.error('Search API Error:', error);
    throw error;
  }
});

//필터
export const getFilteredContent = createAsyncThunk(
  'content/getFilteredContent',
  async ({ category, filterOptions, page = 1 }) => {
    const config = CATEGORY_CONFIG[category];
    if (!config) throw new Error('Invalid category');

    try {
      const options = {
        ...baseOptions,
        ...config.params,
        page,
      };

      // 정렬 옵션 적용
      if (filterOptions.sortBy) {
        options.sort_by = filterOptions.sortBy;
      }

      // 장르 필터 적용
      if (filterOptions.genres?.length > 0) {
        const genreList = filterOptions.genres.join(',');
        options.with_genres = config.params.with_genres ? `${config.params.with_genres},${genreList}` : genreList;
      }

      // 연도 필터 적용
      if (filterOptions.year) {
        if (config.type === 'movie') {
          options.primary_release_year = filterOptions.year;
        } else {
          options.first_air_date_year = filterOptions.year;
        }
      }

      // 국가 필터 적용
      if (filterOptions.country) {
        if (config.type === 'movie') {
          options.region = filterOptions.country;
        } else {
          options.origin_country = filterOptions.country;
        }
      }

      // 방송 상태 필터 (TV 시리즈)
      if (filterOptions.status && config.type === 'tv') {
        options.with_status = filterOptions.status;
      }

      // 방송사 필터 (TV 시리즈)
      if (filterOptions.networks?.length > 0 && config.type === 'tv') {
        options.with_networks = filterOptions.networks.join(',');
      }

      // 러닝타임 필터 (영화)
      if (filterOptions.runtime && config.type === 'movie') {
        options['with_runtime.gte'] = filterOptions.runtime.min;
        options['with_runtime.lte'] = filterOptions.runtime.max;
      }

      // 시즌 수 필터 (TV 시리즈)
      if (filterOptions.seasons && config.type === 'tv') {
        options['with_seasons.gte'] = filterOptions.seasons.min;
        options['with_seasons.lte'] = filterOptions.seasons.max;
      }

      // 평점 필터
      if (filterOptions.ratings) {
        options['vote_average.gte'] = filterOptions.ratings;
      }

      // 연령 등급 필터 (키즈)
      if (filterOptions.ageRating && category === 'kids') {
        options.certification = filterOptions.ageRating;
      }

      const response = await axios.get(`${BASE_URL}/${config.endpoint}`, {
        params: options,
      });

      return {
        data: response.data.results,
        totalPages: response.data.total_pages,
        currentPage: page,
      };
    } catch (error) {
      console.error('Filter API Error:', error);
      throw error;
    }
  }
);

//메인에 넣어줄 데이터
export const MainPageData = createAsyncThunk('tmdbR/MainPage', async () => {
  try {
    const [topRated, tvShows, nowPlayingMovies, upcomingMovies] = await Promise.all([
      axios.get(`${BASE_URL}/discover/movie`, {
        params: {
          ...baseOptions,
          'vote_count.gte': 200,
          with_origin_country: 'KR',
          page: 1,
        },
      }),
      axios.get(`${BASE_URL}/discover/tv`, {
        params: {
          ...baseOptions,
          'vote_count.gte': 200,
          with_origin_country: 'KR',
          page: 1,
        },
      }),
      axios.get(`${BASE_URL}/movie/now_playing`, {
        params: {
          ...baseOptions,
          page: 1,
        },
      }),
      axios.get(`${BASE_URL}/movie/upcoming`, {
        params: {
          ...baseOptions,
          page: 1,
        },
      }),
    ]);

    let koreanTrending = [];
    let currentPage = 1;
    const BATCH_SIZE = 3;

    while (koreanTrending.length < 20) {
      const pagePromises = [];
      for (let i = 0; i < BATCH_SIZE; i++) {
        const page = currentPage + i;
        pagePromises.push(
          axios.get(`${BASE_URL}/trending/all/week`, {
            params: {
              ...baseOptions,
              page,
            },
          })
        );
      }

      const responses = await Promise.all(pagePromises);
      const newKoreanContent = responses.flatMap((response) =>
        response.data.results.filter((item) => item.origin_country?.includes('KR') || item.original_language === 'ko')
      );
      if (responses.some((response) => response.data.results.length === 0)) {
        break;
      }
      koreanTrending = [...koreanTrending, ...newKoreanContent];
      currentPage += BATCH_SIZE;
      if (responses[0].data.total_pages < currentPage) {
        break;
      }
    }

    return {
      trending: koreanTrending.slice(0, 20),
      hot: topRated.data.results,
      review: tvShows.data.results,
      upcoming: upcomingMovies.data.results,
      nowPlaying: nowPlayingMovies.data.results,
    };
  } catch (error) {
    console.error('Main page data fetch error:', error);
    throw error;
  }
});
