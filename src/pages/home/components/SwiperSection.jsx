import React, { useEffect, useState } from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { StyledSwiper, StyledSwiperSlide, PlayButton, MainCustomButtonPrev, MainCustomButtonNext } from '../style';
import Button from '../../../ui/button/defaultButton';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SwiperSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1023);
      setIsMobile(window.innerWidth <= 767);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isTablet === null || isMobile === null) return null;

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
      navigation={{
        nextEl: '.new-swiper-button-next',
        prevEl: '.new-swiper-button-prev',
        enabled: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
        <StyledSwiperSlide key={num} className={index === activeIndex ? 'swiper-slide-active' : ''}>
          <img
            src={
              isMobile
                ? `/images/mobile_mainPoster${num}.png`
                : isTablet
                ? `/images/tablet_mainPoster${num}.png`
                : `/images/mainPoster${num}.png`
            }
            alt={`poster ${num}`}
          />
          {index === activeIndex && (
            <PlayButton>
              <Button size="small">재생하기</Button>
            </PlayButton>
          )}
        </StyledSwiperSlide>
      ))}
      <MainCustomButtonPrev className="new-swiper-button-prev">
        <img src="/icons/arrow/left.svg" alt="" />
      </MainCustomButtonPrev>
      <MainCustomButtonNext className="new-swiper-button-next">
        <img src="public/icons/arrow/right.svg" alt="" />
      </MainCustomButtonNext>
    </StyledSwiper>
  );
};

export default SwiperSection;
