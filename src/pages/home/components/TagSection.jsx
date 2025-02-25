import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tag from '../../../ui/tag/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { setGenre, fetchGenreContent } from '../../../store/modules/genreSlice';
import {
  TagSectionWrapper,
  NewSwiperContainer,
  NewSwiperSlide,
  NewCustomButtonPrev,
  NewCustomButtonNext,
  GenreTitle,
} from '../style';

const GENRE_IDS = {
  액션: 28,
  미스터리: 9648,
  로맨스: 10749,
  스릴러: 53,
  코미디: 35,
  SF: 878,
  리얼리티: 10764,
  모험: 12,
  드라마: 18,
};

const TagSection = () => {
<<<<<<<<< Temporary merge branch 1
=========
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    navigate(`/category?search=${encodeURIComponent(tag)}`);
  };

>>>>>>>>> Temporary merge branch 2
  return (
    <TagSectionWrapper>
      <div style={{ marginBottom: '30px' }}>
        <Swiper spaceBetween={10} slidesPerView={'auto'}>
          {Object.keys(GENRE_IDS).map((tag, index) => (
            <SwiperSlide key={index} onClick={() => handleTagClick(tag)}>
              <Tag className="tagSlide">{tag}</Tag>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedGenre && contentList.length > 0 && (
        <NewSwiperContainer style={{ marginTop: '30px' }}>
          {selectedGenre && <GenreTitle>{selectedGenre}</GenreTitle>}
          <Swiper
            modules={[Navigation]}
            slidesPerView={'auto'}
            spaceBetween={20}
            navigation={{
              nextEl: '.new-swiper-button-next',
              prevEl: '.new-swiper-button-prev',
            }}
          >
            {contentList.slice(0, 10).map((movie) => (
              <SwiperSlide key={movie.id}>
                <NewSwiperSlide>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </NewSwiperSlide>
              </SwiperSlide>
            ))}
          </Swiper>

          <NewCustomButtonPrev className="new-swiper-button-prev"></NewCustomButtonPrev>
          <NewCustomButtonNext className="new-swiper-button-next"></NewCustomButtonNext>
        </NewSwiperContainer>
      )}
    </TagSectionWrapper>
  );
};

export default TagSection;
