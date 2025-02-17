import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {
  NewCardsSectionTitle,
  NewMoreLink,
  RatedSwiperContainer,
  RatedSwiperWrapper,
  RatedSwiperSlide,
  NewCustomButtonPrev,
  NewCustomButtonNext,
  NewSectionWrapper,
  SlideNumber,
} from '../style';

const TopRated = () => {
  useEffect(() => {
    // Swiper가 초기화될 때, DOM에 요소가 모두 렌더링된 이후에 실행되도록
    const swiper = new Swiper('.new-card-carousel2', {
      slidesPerView: 'auto',
      spaceBetween: 30,

      navigation: {
        nextEl: '.new-swiper-button-next',
        prevEl: '.new-swiper-button-prev',
      },
      breakpoints: {
        1024: { slidesPerView: 'auto' },
        768: { slidesPerView: 'auto' },
        390: { slidesPerView: 'auto' },
      },
    });

    // Swiper 인스턴스를 종료할 때 메모리 해제를 위해 반환 함수 사용
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <NewSectionWrapper>
        <NewCardsSectionTitle>
          요즘 다들 이거 봐요
          <NewMoreLink href="./page/nowplaying.html" className="more">
            <svg className="moreIcon" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </NewMoreLink>
        </NewCardsSectionTitle>

        <RatedSwiperContainer className="new-card-carousel2">
          <RatedSwiperWrapper className="swiper-wrapper">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <RatedSwiperSlide key={num} className="swiper-slide">
                {/* <img src={`./img/main/movie${num}.jpg`} alt={`Movie ${num}`} /> */}
                <SlideNumber>
                  <img src={`/images/rank${num}.png`} alt={`1`} />
                </SlideNumber>
              </RatedSwiperSlide>
            ))}
          </RatedSwiperWrapper>

          <NewCustomButtonPrev className="new-swiper-button-prev">
            {/* <img src="./img/main/swiper_previous.png" alt="이전으로" /> */}
          </NewCustomButtonPrev>
          <NewCustomButtonNext className="new-swiper-button-next">
            {/* <img src="./img/main/swiper_next.png" alt="다음으로" /> */}
          </NewCustomButtonNext>
        </RatedSwiperContainer>
      </NewSectionWrapper>
    </>
  );
};

export default TopRated;
