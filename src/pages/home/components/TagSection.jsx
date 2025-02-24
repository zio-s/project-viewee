import React from 'react';
import Tag from '../../../ui/tag/index';
import { TagSectionWrapper } from '../style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
