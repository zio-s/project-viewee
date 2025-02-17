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
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_676_4537)">
            <path
              d="M15.581 26.2461C15.581 25.7229 15.7901 25.2416 16.1878 24.865L32.7614 8.62612C33.1381 8.27037 33.5985 8.08203 34.1426 8.08203C35.2098 8.08203 36.0469 8.89816 36.0469 9.98633C36.0469 10.5095 35.8376 10.9908 35.5028 11.3465L20.2684 26.2461L35.5028 41.1456C35.8376 41.5013 36.0469 41.9619 36.0469 42.5058C36.0469 43.594 35.2098 44.4102 34.1426 44.4102C33.5985 44.4102 33.1381 44.2219 32.7614 43.8451L16.1878 27.6272C15.7901 27.2297 15.581 26.7692 15.581 26.2461Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_676_4537">
              <rect width="20.4659" height="36.3491" fill="white" transform="matrix(-1 0 0 1 36.0469 8.08203)" />
            </clipPath>
          </defs>
        </svg>
      </MainCustomButtonPrev>
      <MainCustomButtonNext className="new-swiper-button-next">
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_630_1220)">
            <path
              d="M35.0831 26.2461C35.0831 25.7229 34.874 25.2416 34.4763 24.865L17.9026 8.62612C17.526 8.27037 17.0656 8.08203 16.5215 8.08203C15.4542 8.08203 14.6172 8.89816 14.6172 9.98633C14.6172 10.5095 14.8265 10.9908 15.1613 11.3465L30.3957 26.2461L15.1613 41.1456C14.8265 41.5013 14.6172 41.9619 14.6172 42.5058C14.6172 43.594 15.4542 44.4102 16.5215 44.4102C17.0656 44.4102 17.526 44.2219 17.9026 43.8451L34.4763 27.6272C34.874 27.2297 35.0831 26.7692 35.0831 26.2461Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_630_1220">
              <rect width="20.4659" height="36.3491" fill="white" transform="translate(14.6172 8.08203)" />
            </clipPath>
          </defs>
        </svg>
      </MainCustomButtonNext>
    </StyledSwiper>
  );
};

export default SwiperSection;
