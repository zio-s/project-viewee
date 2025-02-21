import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { mobileMore, tabletMore } from '../../styled/Mixin';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  .SlideTextArea {
    position: absolute;
    bottom: 49px;
    left: 16px;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: var(--font-label-m-mobile);
    ${mobileMore`
    bottom: 92px;
        left: 31px;
    font-size: var( --font-label-m-tablet);
    gap:8px;
  `}
    ${tabletMore`
        bottom: 141px;
        left: 61px;
        font-size: var(--font-label-s);
        gap: 10px;
  `}
    #score {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
  background-position: center;
  background-size: cover;

  width: ${(props) => props.width || 'calc(280px + (280 * ((100vw - 390px) / (768 - 390))))'};
  height: ${(props) => props.height || 'calc(180px + (180 * ((100vw - 390px) / (768 - 390))))'};

  @media (min-width: 768px) {
    width: 560px;
    height: 360px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: calc(560px + (880 * ((100vw - 768px) / (1024 - 768))));
    height: calc(360px + (335 * ((100vw - 768px) / (1024 - 768))));
  }

  @media (min-width: 1024px) {
    width: 1440px;
    height: 695px;
  }

  transition: all 0.4s ease-in-out;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  // 기본적으로 슬라이드를 어둡게 처리
  filter: brightness(0.6);
  opacity: 0.8;

  // 활성 슬라이드는 밝게 표시
  &.swiper-slide-active {
    filter: brightness(1);
    opacity: 1;
  }
`;

export const PlayButton = styled.div`
  .playIcon {
    width: 6px;
    height: 6px;
    ${mobileMore`
    width:12px;
    height:12px;
    `}
    ${tabletMore`
    width:16px;
    height:16px;
    `}
  }
  .mainSwiperPlay {
    width: 122px;
    height: 25px;
    ${mobileMore`
    width:224px;
    height:50px;
    `}
    ${tabletMore`
    width:309px;
    height:59px;
    `}
  }
  button {
    font-size: 9px;
    position: absolute;
    bottom: 17.5px;
    left: 15px;
    z-index: 10;

    ${mobileMore`

    position: absolute;
    font-size: var(--font-content-m);
  bottom: 35px;
  left: 32px;
  z-index: 10;
  `}

    ${tabletMore`

    position: absolute;
  bottom: 71px;
  left: 60px;
  z-index: 10;
  `}
  }
`;

export const VisualWrap = styled.div`
  margin: 40px 15px;

  ${mobileMore`
  margin: 50px 30px;
  `};

  ${tabletMore`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 60px;
  `};
`;

export const TagSectionWrapper = styled.div`
  margin: 40px 0;
  overflow: hidden;
  ${mobileMore`
    margin: 50px 0;
    `}
  ${tabletMore`
   margin: 75px 0;
   overflow:visible
    `}
  width: 100%;
  .swiper {
    width: 100%;
    overflow: visible !important;
    ${tabletMore`
    overflow:visible;
    `}
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    background-color: transparent;
    overflow: visible !important;
  }
  .tagSlide {
    border-color: #d9d9d9;
    width: 79px;
    height: 33px;
    font-size: var(--font-content-m-mobile);
    ${mobileMore`
    width:105px;
    height:45px;
    font-size: var(--font-content-m-tablet)
    `}
    ${tabletMore`
    width:125px;
    height:50px;
    font-size: var(--font-content-m)
    `}
  }
`;

export const EventSectionWrapper = styled.div`
  display: none;
  ${mobileMore`
  display:none;
  `}

  ${tabletMore`
  margin-top: -400px;
   display:block;
  `}
`;
export const SectionWrapper = styled.div`
  margin-bottom: 40px;
  ${mobileMore`
    margin-bottom: 50px;
  `}

  ${tabletMore`
    margin-bottom: 75px;
  `}
`;

export const RatedSwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  ${tabletMore`
  overflow:visible;
  `}
`;

export const RatedSwiperWrapper = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin-left: 20px;
  width: 100%;
`;

export const RatedSwiperSlide = styled.li`
  flex: 0 0 auto;
  width: 100px;
  height: 150px;

  ${mobileMore`
    width: 190px;
    height: 300px;
  `}

  ${tabletMore`
    width: 275px;
    height: 400px;
  `}
  background: #333333;
  border-radius: 10px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const SlideNumber = styled.div`
  width: 82px;
  height: 50px;
  position: absolute;
  bottom: -3px;
  left: -33px;
  z-index: 10;
  ${mobileMore`
    width: 138px;
        height: 100px;
        position: absolute;
        bottom: -6px;
        left: -32px;
        z-index: 10;
  `}
  ${tabletMore`
           width: 184px;
        height: 127px;
        position: absolute;
        bottom: -8px;
        left: -46px;
        z-index: 10;
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NewSectionWrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const NewCardsSectionTitle = styled.div`
  display: flex;
  gap: 20px;
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
  .moreIcon {
    width: 15px;
    height: 15px;
    ${mobileMore`
    width:18px;
    height:18px;
    `}
    ${tabletMore`

    width:20px;
    height:20px;
    `}
  }
`;

export const NewSwiperContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${mobileMore`
   overflow: hidden;
    `}
  ${tabletMore`
  overflow:visible;
    max-width:1440px;
    `}
`;

export const NewSwiperWrapper = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  width: 100%;
`;

export const NewSwiperSlide = styled.li`
  width: 100px;
  height: 150px;
  flex-shrink: 0;

  ${mobileMore`
    width: 190px;
    height: 300px;
  `}

  ${tabletMore`
    width: 275px;
    height: 400px;
  `}
  background: #333333;
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    z-index: 1001;
  }

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

export const MainCustomButtonPrev = styled.div`
  
  svg {
    width:20px;
    height:30px;
    margin-left:20px;
    ${mobileMore`
    width:40px;
    height:40px;
    margin-left:50px;
    `}
    ${tabletMore`
    width:50px;
    height:50px;
    margin-left:50px;
    `}
  }
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  position: absolute;
  cursor: pointer;
  z-index: 10;
  }

`;

export const MainCustomButtonNext = styled.div`
  svg {
    width: 20px;
    height: 30px;
    margin-right: 20px;
    ${mobileMore`
    width:40px;
    height:40px;
    margin-right:50px;
    `} ${tabletMore`
    width:50px;
    height:50px;
    margin-right:50px;
    `};
  }
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);

  cursor: pointer;
  z-index: 10;
`;

export const NewCustomButtonPrev = styled.div`
  
  img {
    width:20px;
    height:30px;
    background: rgb(0, 0, 0, 0.1);
    ${mobileMore`
    width:40px;
    height:40px;
    `}
    ${tabletMore`
    width:50px;
    height:50px;
    `}
  }
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  position: absolute;
  cursor: pointer;
  z-index: 10;
  }

`;

export const NewCustomButtonNext = styled.div`
  img {
    width: 20px;
    height: 30px;
    background: rgb(0, 0, 0, 0.1);
    ${mobileMore`
    width:40px;
    height:40px;
    `} ${tabletMore`
    width:50px;
    height:50px;
    `};
  }
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);

  cursor: pointer;
  z-index: 10;
`;

export const MarqueeWrapper = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export const MarqueeWrapper2 = styled.ul`
  display: flex;
  gap: 15px;
`;

export const MarqueeItem = styled.li`
  img {
    width: 100%;
    height: 100%;
  }
  width: 160px;
  height: 80px;
  background: #333333;
  ${mobileMore`
    width: 320px;
    height: 160px;
  `}
  ${tabletMore`
    width: 400px;
    height: 230px;
  `}
`;

export const HoverModalWrap = styled.div`
  background-color: #181818;
  border-radius: 5px;
  width: 378px;
  height: 453px;
  .videoArea {
    width: 100%;
    height: 256px;
    background-color: var(--gray-40);
    border-radius: 10px 10px 0 0;
  }
  .infoArea {
    padding: 15px;

    .iconArea {
      display: flex;
      gap: 15px;
      align-items: center;
      pointer-events: auto;
      .button {
        width: 60px;
        height: 60px;
      }
      .moreButton {
        width: 40px;
        height: 40px;
        margin-left: auto;
        background: transparent;
        border: 1px solid var(--gray-60);
        color: white;
      }

      .moreButton:hover,
      .steamedButton:hover,
      .likeButton:hover {
        border-color: white;
      }
      .button:hover {
        background: var(--primary-60);
      }

      .moreButton:hover,
      .steamedButton:hover,
      .likeButton:hover {
        border-color: white;
      }
      .button:hover {
        background: rgb(255, 255, 255, 0.1);
      }
      .steamedButton {
        width: 60px;
        height: 60px;
        font-size: 30px;

        background: transparent;
        border: 1px solid var(--gray-60);
      }
      .likeButton {
        width: 60px;
        height: 60px;

        background: transparent;
        border: 1px solid var(--gray-60);
      }
    }
    .textArea {
      display: flex;
      gap: 10px;
      align-items: center;
      margin: 25px 0;
      font-size: 16px;
      .age {
        border: 1px solid var(--gray-60);
        background: #232323;
        padding: 4px 12px;
      }
      #starNumber {
        display: flex;
        align-items: center;

        gap: 4px;
      }
      .dot {
        width: 4px;
        height: 4px;
        background: #5a5a5a;
        border-radius: 20px;
      }
    }
  }
`;

export const HoverModalWrapper = styled.article`
  display: none;
  ${tabletMore`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  z-index: 1000;
  display: flex;
  justify-content: center;
  pointer-events: none;
  transform: translate(-50%, -60%) scale(0);
  transition: transform 0.3s ease-out, opacity 0.1s ease-out;
  &.active {
    opacity: 1;
    transform: translate(-50%, -60%) scale(1);
  }
  
  `}
`;
