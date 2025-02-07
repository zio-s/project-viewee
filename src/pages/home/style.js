import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 1440px;
    height: 695px;
  @media (max-width: 1280px) {
    width: 840px;
    height: 540px;
  }
  @media (max-width: 1024px) {
    width: 560px;
    height: 360px;
  }
  @media (max-width: 600px) {
    width: 280px;
    height: 180px;
  }

  img {
    display: block;
    width: 100%;
  }
    // 기본적으로 슬라이드를 어둡게 처리
  filter: brightness(0.6);
  opacity: 0.8;

  // 활성 슬라이드는 밝게 표시
  &.swiper-slide-active {
    filter: brightness(1);
    opacity: 1;`;

export const VisualWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 60px;
`;

export const SectionWrapper = styled.div`
  margin-bottom: 75px;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

export const NewSectionWrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const NewCardsSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NewMoreLink = styled.a`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;

  .arrow-more {
    margin-left: 5px;
  }
`;

export const NewSwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const NewSwiperWrapper = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  width: 100%; // 전체 너비 100%로 설정하여 각 슬라이드를 수평으로 배치
`;

export const NewSwiperSlide = styled.li`
  width: 270px; // 각 슬라이드의 고정 크기
  height: 400px;
  background: #333333;
  border-radius: 10px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  p {
    padding: 10px;
    font-size: 18px;
    color: #333;
  }
`;

export const NewCustomButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const NewCustomButtonNext = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const MarqueeWrapper = styled.ul`
  display: flex;
  gap: 15px;
`;

export const MarqueeItem = styled.li`
  width: 400px;
  height: 230px;
  background: #333333;
`;
