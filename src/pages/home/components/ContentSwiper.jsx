import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {
  NewCardsSectionTitle,
  NewMoreLink,
  NewSwiperContainer,
  NewSwiperWrapper,
  NewSwiperSlide,
  NewCustomButtonPrev,
  NewCustomButtonNext,
  NewSectionWrapper,
} from '../style';

const NewSwiperSection = () => {
  useEffect(() => {
    // Swiper가 초기화될 때, DOM에 요소가 모두 렌더링된 이후에 실행되도록
    const swiper = new Swiper('.new-card-carousel1', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.new-swiper-button-next',
        prevEl: '.new-swiper-button-prev',
      },
      breakpoints: {
        1024: { slidesPerView: 'auto' },
        768: { slidesPerView: 'auto' },
        480: { slidesPerView: 'auto' },
      },
    });

    // Swiper 인스턴스를 종료할 때 메모리 해제를 위해 반환 함수 사용
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <NewSectionWrapper>
      <NewCardsSectionTitle>
        title
        <NewMoreLink href="./page/nowplaying.html" className="more">
          더보기 <img src="./img/main/arrow-more.svg" className="arrow-more" alt="More" />
        </NewMoreLink>
      </NewCardsSectionTitle>

      <NewSwiperContainer className="new-card-carousel1">
        <NewSwiperWrapper className="swiper-wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <NewSwiperSlide key={num} className="swiper-slide">
              {/* <img src={`./img/main/movie${num}.jpg`} alt={`Movie ${num}`} /> */}
            </NewSwiperSlide>
          ))}
        </NewSwiperWrapper>

        <NewCustomButtonPrev className="new-swiper-button-prev">
          {/* <img src="./img/main/swiper_previous.png" alt="이전으로" /> */}
        </NewCustomButtonPrev>
        <NewCustomButtonNext className="new-swiper-button-next">
          <img src="./img/main/swiper_next.png" alt="다음으로" />
        </NewCustomButtonNext>
      </NewSwiperContainer>
    </NewSectionWrapper>
  );
};

export default NewSwiperSection;
