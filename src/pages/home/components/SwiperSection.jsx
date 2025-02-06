import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { StyledSwiper, StyledSwiperSlide } from '../style';

const SwiperSection = () => {
  return (
    <StyledSwiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      spacebetween={42}
      coverflowEffect={{
        rotate: 50,
        stretch: 300,
        depth: 500,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <StyledSwiperSlide key={num}>
          <img src={`https://swiperjs.com/demos/images/nature-${num}.jpg`} alt={`Nature ${num}`} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default SwiperSection;
