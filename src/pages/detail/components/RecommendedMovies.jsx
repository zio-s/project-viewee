import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { RecommendeddBox } from '../style';
import { useSelector } from 'react-redux';

const RecommendedMovies = () => {
  const { detail, loading, error } = useSelector((state) => state.detailR);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {error}</div>;
  if (!detail || !detail.recommendations) return null;

  const recommendedList = detail.recommendations.results;

  return (
    <>
    <RecommendeddBox>
      <h2>추천 영화</h2>
      <Swiper spaceBetween={10} slidesPerView={'auto'}>
        {recommendedList.map((movie) => (
          <SwiperSlide key={movie.id} className="movie-slide">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendeddBox>
    <RecommendeddBox>
      <h2>연관 작품</h2>
      <Swiper spaceBetween={10} slidesPerView={'auto'}>
        {recommendedList.map((movie) => (
          <SwiperSlide key={movie.id} className="movie-slide">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendeddBox>
    </>
  );
};

export default RecommendedMovies;
