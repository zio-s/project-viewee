import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 4;
      if (window.innerWidth >= 390) return 3;
      return 1;
    };

    const updateSlidesPerView = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    const swiper = new Swiper('.new-card-carousel1', {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerGroup: slidesPerView,

      navigation: {
        nextEl: '.main-swiper-button-next',
        prevEl: '.main-swiper-button-prev',
        enabled: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        390: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, [slidesPerView]);

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
              <div>Slide {num}</div>
            </NewSwiperSlide>
          ))}
        </NewSwiperWrapper>

        <NewCustomButtonPrev className="new-swiper-button-prev">
          <img src="/icons/arrow/left.svg" alt="" />
        </NewCustomButtonPrev>
        <NewCustomButtonNext className="new-swiper-button-next">
          <img src="public/icons/arrow/right.svg" alt="" />
        </NewCustomButtonNext>
      </NewSwiperContainer>
    </NewSectionWrapper>
  );
};

export default NewSwiperSection;
