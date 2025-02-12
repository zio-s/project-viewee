import React, { useState } from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { StyledSwiper, StyledSwiperSlide, PlayButton } from '../style';
import Button from '../../../ui/button/defaultButton';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SwiperSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledSwiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      spaceBetween={42}
      coverflowEffect={{
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        290: {
          spaceBetween: 20,
          coverflowEffect: { rotate: 30, stretch: 100, depth: 200 },
        },
        768: {
          spaceBetween: 30,
          coverflowEffect: { rotate: 40, stretch: 200, depth: 300 },
        },
        1024: {
          spaceBetween: 42,
          coverflowEffect: { rotate: 50, stretch: 300, depth: 500 },
        },
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
        <StyledSwiperSlide key={num} className={index === activeIndex ? 'swiper-slide-active' : ''}>
          <img src={`https://swiperjs.com/demos/images/nature-${num}.jpg`} alt={`Nature ${num}`} />
          {index === activeIndex && (
            <PlayButton>
              <Button size="small">재생하기</Button>
            </PlayButton>
          )}
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default SwiperSection;
