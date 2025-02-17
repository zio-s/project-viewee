import React, { useEffect, useState } from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { StyledSwiper, StyledSwiperSlide, PlayButton, MainCustomButtonPrev, MainCustomButtonNext } from '../style';
import Button from '../../../ui/button/defaultButton';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const contentData = [
  { id: 1, score: '3.2', genre: '애니메이션', time: '1시간 43분' },
  { id: 2, score: '4.5', genre: '예능', time: '1시간 40분' },
  { id: 3, score: '3.2', genre: '드라마', time: '1시간 32분' },
  { id: 4, score: '3.2', genre: '드라마', time: '1시간 32분' },
  { id: 5, score: '3.2', genre: '드라마', time: '1시간 32분' },
];

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
      {contentData.map((item, index) => (
        <StyledSwiperSlide key={item.id} className={index === activeIndex ? 'swiper-slide-active' : ''}>
          <img
            src={
              isMobile
                ? `/images/mobile_mainPoster${item.id}.png`
                : isTablet
                ? `/images/tablet_mainPoster${item.id}.png`
                : `/images/mainPoster${item.id}.png`
            }
            alt={`poster ${item.id}`}
          />
          {index === activeIndex && (
            <>
              <div className="SlideTextArea">
                <span id="score">
                  <svg width="10" height="10" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_632_1076)">
                      <path
                        d="M10.983 46.7535C11.841 47.4232 12.9292 47.193 14.2266 46.2514L25.2966 38.111L36.3877 46.2514C37.685 47.193 38.7523 47.4232 39.6312 46.7535C40.4893 46.105 40.6775 45.0376 40.1544 43.51L35.7807 30.4939L46.9553 22.4582C48.2528 21.5375 48.776 20.5748 48.4412 19.5285C48.1064 18.524 47.1228 18.0218 45.5116 18.0427L31.8048 18.1264L27.6403 5.04743C27.1382 3.49888 26.3848 2.72461 25.2966 2.72461C24.2294 2.72461 23.476 3.49888 22.9739 5.04743L18.8095 18.1264L5.10275 18.0427C3.49141 18.0218 2.50787 18.524 2.17305 19.5285C1.8173 20.5748 2.36139 21.5375 3.65882 22.4582L14.8335 30.4939L10.4599 43.51C9.93673 45.0376 10.1251 46.105 10.983 46.7535Z"
                        fill="#FFD034"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_632_1076">
                        <rect width="46.4734" height="47.3982" fill="white" transform="translate(2.06641 2.72461)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{item.score}</span>
                </span>
                <span>{item.genre}</span>
                <span>{item.time}</span>
              </div>
              <PlayButton>
                <Button size="small">재생하기</Button>
              </PlayButton>
            </>
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
