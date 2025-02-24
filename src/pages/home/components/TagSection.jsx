import React from 'react';
import Tag from '../../../ui/tag/index';
import { TagSectionWrapper } from '../style';
import { getContentByGenre } from '../../../store/modules/genreThunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch } from 'react-redux';

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

const TagSection = ({ onSelectGenre }) => {
  const dispatch = useDispatch();

  const handleTagClick = (tag) => {
    const genreId = GENRE_IDS[tag];
    if (genreId) {
      console.log('🎯 선택한 장르 ID:', genreId);
      dispatch(getContentByGenre({ genreId }));
      onSelectGenre(genreId);
    }
  };
  return (
    <TagSectionWrapper>
      <Swiper spaceBetween={10} slidesPerView={'auto'}>
        {Object.keys(GENRE_IDS).map((tag, index) => (
          <SwiperSlide key={index} onClick={() => handleTagClick(tag)}>
            <Tag className="tagSlide">{tag}</Tag>
          </SwiperSlide>
        ))}
      </Swiper>
    </TagSectionWrapper>
  );
};

export default TagSection;
