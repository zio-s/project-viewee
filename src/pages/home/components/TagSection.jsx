import React, { useState } from 'react';
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
  const dispatch = useDispatch();

  // ✅ 선택된 장르 상태 추가
  const [selectedGenre, setSelectedGenre] = useState(null);

  // ✅ Redux에서 콘텐츠 리스트 가져오기
  const contentList = useSelector((state) => state.genre.contentList || []);

  const handleTagClick = (tag) => {
    if (selectedGenre === tag) {
      // ✅ 같은 태그 클릭 시 초기화 (토글 기능)
      setSelectedGenre(null);
    } else {
      // ✅ 선택한 장르 업데이트 및 데이터 요청
      setSelectedGenre(tag);
      dispatch(setGenre(tag));
      dispatch(fetchGenreContent(GENRE_IDS[tag]));
    }
  };

  return (
    <TagSectionWrapper>
      <div style={{ marginBottom: '30px' }}>
        <Swiper spaceBetween={10} slidesPerView={'auto'}>
          {Object.keys(GENRE_IDS).map((tag, index) => (
            <SwiperSlide key={index} onClick={() => handleTagClick(tag)}>
              <Tag className={`tagSlide ${selectedGenre === tag ? 'active' : ''}`}>{tag}</Tag>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ 선택한 장르가 있을 경우 스와이퍼 표시 */}
      {selectedGenre && contentList.length > 0 && (
        <NewSwiperContainer style={{ marginTop: '30px' }}>
          <GenreTitle>{selectedGenre}</GenreTitle>
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
