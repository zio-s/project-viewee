import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { RecommendeddBox } from '../style';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RecommendedMovies = () => {
  const navigate = useNavigate();
  const { detail, loading, error } = useSelector((state) => state.detailR);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {error}</div>;
  if (!detail || !detail.recommendations) return null;

  const recommendedList = detail.recommendations.results;

  const handleMovieClick = (movie) => {
    let category = "movie"; // 기본값: 영화

    if (movie.type === "드라마") category = "drama";
    else if (movie.type === "예능") category = "comedy";
    else if (movie.type === "애니") category = "animation";
    else if (movie.type === "키즈") category = "kids";

    navigate(`/${category}/${movie.id}`);
  };

  return (
    <>
      <RecommendeddBox>
        <h2>추천 영화</h2>
        <Swiper spaceBetween={10} slidesPerView={'auto'}>
          {recommendedList.map((movie) => (
            <SwiperSlide key={movie.id} className="movie-slide">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie)}
                style={{ cursor: 'pointer' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </RecommendeddBox>

      <RecommendeddBox>
  <h2>연관 작품</h2>
  <Swiper spaceBetween={10} slidesPerView={'auto'}>
    {detail.similar?.results?.map((movie) => (
      <SwiperSlide key={movie.id} className="movie-slide">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          onClick={() => handleMovieClick(movie)}
          style={{ cursor: 'pointer' }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</RecommendeddBox>
    </>
  );
};

export default RecommendedMovies;
