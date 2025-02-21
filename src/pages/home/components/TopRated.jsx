import React, { useEffect, useRef } from 'react';
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
import { useNavigate } from 'react-router';
import { getContentDetail } from '../../../store/modules/getThunk';
import { useDispatch } from 'react-redux';

const TopRated = ({ hotData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const swiperRef = useRef(null); // Swiper 인스턴스를 저장할 ref

  useEffect(() => {
    // Swiper가 이미 생성되었는지 확인 (중복 생성 방지)
    if (swiperRef.current) return;

    swiperRef.current = new Swiper('.new-card-carousel2', {
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
  }, []); // `destroy()` 없이 유지됨

  const getDetail = (content) => {
    const { id, media_type = 'movie' } = content;
    if (['movie', 'tv'].includes(media_type)) {
      dispatch(getContentDetail({ type: media_type, id: id }));
    }
  };

  const onGo = (content) => {
    navigate(`/${content.media_type || 'movie'}/${content.id}`);
  };

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
            </svg>
          </NewMoreLink>
        </NewCardsSectionTitle>

        <RatedSwiperContainer className="new-card-carousel2">
          <RatedSwiperWrapper className="swiper-wrapper">
            {hotData.slice(0, 8).map((content, index) => (
              <RatedSwiperSlide
                key={content.id}
                className="swiper-slide"
                onClick={() => onGo(content)}
                onMouseEnter={() => getDetail(content)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
                  alt={content.title || content.name}
                />
                <SlideNumber>
                  <img src={`/images/rank${index + 1}.png`} alt={`Rank ${index + 1}`} />
                </SlideNumber>
              </RatedSwiperSlide>
            ))}
          </RatedSwiperWrapper>

          <NewCustomButtonPrev className="new-swiper-button-prev"></NewCustomButtonPrev>
          <NewCustomButtonNext className="new-swiper-button-next"></NewCustomButtonNext>
        </RatedSwiperContainer>
      </NewSectionWrapper>
    </>
  );
};

export default TopRated;
