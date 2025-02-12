import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { RecommendeddBox } from '../style';


const RecommendedMovies = () => {
  const recommendedList = [
    { id: 1, title: '영화 1', thumbnail: 'https://via.placeholder.com/200x300' },
    { id: 2, title: '영화 2', thumbnail: 'https://via.placeholder.com/200x300' },
    { id: 3, title: '영화 3', thumbnail: 'https://via.placeholder.com/200x300' },
    { id: 4, title: '영화 4', thumbnail: 'https://via.placeholder.com/200x300' },
    { id: 5, title: '영화 5', thumbnail: 'https://via.placeholder.com/200x300' },
  ];

  return (
    <RecommendeddBox>
      <h2>타이틀</h2>
      <Swiper spaceBetween={10} slidesPerView={'auto'}>
        {recommendedList.map((movie) => (
          <SwiperSlide key={movie.id} className="movie-slide">
            <img src={movie.thumbnail} alt={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendeddBox>
  );
};

export default RecommendedMovies;