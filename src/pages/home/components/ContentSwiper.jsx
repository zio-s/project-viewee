import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
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
  HoverModalWrapper,
} from '../style';
import HoverModal from './HoverModal';

const NewSwiperSection = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

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

    const swiperInstance = new Swiper('.new-card-carousel1', {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerGroup: 1,

      navigation: {
        nextEl: '.new-swiper-button-next',
        prevEl: '.new-swiper-button-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 5.6,
          slidesPerGroup: 5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4.2,
          slidesPerGroup: 5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3.8,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        390: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },

        330: {
          slidesPerView: 2.8,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      },
    });

    return () => {
      swiperInstance.destroy();
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, [slidesPerView]);

  const handleMouseEnter = (num) => {
    const timeout = setTimeout(() => {
      setHoveredSlide(num);
    }, 500);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHoveredSlide(null);
  };

  return (
    <NewSectionWrapper>
      <NewCardsSectionTitle>
        title
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

      <NewSwiperContainer className="new-card-carousel1">
        <NewSwiperWrapper className="swiper-wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <NewSwiperSlide
              key={num}
              className="swiper-slide"
              onMouseEnter={() => handleMouseEnter(num)}
              onMouseLeave={handleMouseLeave}
            >
              <div>Slide {num}</div>
              <HoverModalWrapper className={hoveredSlide === num ? 'active' : ''}>
                <HoverModal />
              </HoverModalWrapper>
            </NewSwiperSlide>
          ))}
        </NewSwiperWrapper>

        <NewCustomButtonPrev className="new-swiper-button-prev">
          {/* <img src="/icons/arrow/left.svg" alt="Prev" /> */}
        </NewCustomButtonPrev>
        <NewCustomButtonNext className="new-swiper-button-next">
          {/* <img src="/icons/arrow/right.svg" alt="Next" /> */}
        </NewCustomButtonNext>
      </NewSwiperContainer>
    </NewSectionWrapper>
  );
};

export default NewSwiperSection;
