import React from 'react';
import Tag from '../../../ui/tag/index';
import { TagSectionWrapper } from '../style';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TagSection = () => {
  const tags = [
    '태그1',
    '태그2',
    '태그3',
    '태그4',
    '태그5',
    '태그6',
    '태그7',
    '태그8',
    '태그9',
    '태그10',
    '태그11',
    '태그₩12',
    '태그13',
    '태그14',
    '태그15',
  ];
  return (
    <TagSectionWrapper>
      <Swiper
        spaceBetween={10} // 기본값
        slidesPerView={'auto'}
        breakpoints={{
          768: {
            spaceBetween: 18, // 768px 이하일 때 spaceBetween 변경
          },
          1024: {
            spaceBetween: 18, // 768px 이하일 때 spaceBetween 변경
          },
        }}
      >
        {tags.map((tag, index) => (
          <SwiperSlide key={index} style={{ minWidth: 'auto', maxWidth: '100%' }}>
            <Tag className="tagSlide">{tag}</Tag>
          </SwiperSlide>
        ))}
      </Swiper>
    </TagSectionWrapper>
  );
};

export default TagSection;
