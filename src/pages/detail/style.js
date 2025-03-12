import styled from 'styled-components';
import { StyledButton as OriginalStyledButton } from '../../common/button/style';
import { StyledInput as OriginalStyledInput } from '../../ui/input/style';

export const SharePopupWrap = styled.div`
  position: absolute;
  width: calc(100vw - 30px);
  max-width: 360px;
  height: auto;
  padding: 1.2rem 0.8rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: var(--gray-80);
  border-radius: 0.5rem;
  align-items: center;
  box-sizing: border-box;
  top: 0;
  left: 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h2 {
      font-size: var(--font-content-xxl-tablet);
      font-weight: bold;
      padding: 0.8rem 1.2rem;
    }
    img {
      width: 4.5rem;
      height: 4.5rem;
      filter: invert(33%) sepia(3%) saturate(14%) hue-rotate(314deg) brightness(87%) contrast(89%);
      cursor: pointer;
    }
  }
  .shareSNS {
    display: flex;
    gap: 4rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      cursor: pointer;
      .icon {
        width: 5rem;
        height: 5rem;
        background-color: var(--gray-70);
        border-radius: 1000rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
  .copyLink {
    display: flex;
    gap: 3rem;
    width: 100%;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    input {
      background-color: var(--gray-60);
      width: 100%;
      height: 3rem;
      color: var(--text-primary);
      border-radius: 0.5rem;
      padding: 0 1rem;
    }
    button {
      width: 5.5rem;
      height: 3rem;
      background-color: var(--gray-70);
      color: var(--text-primary);
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: var(--background-color);
  width: 800px;
  height: 80vh;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  overflow-y: auto;
  h2 {
    font-size: var(--font-content-xxxl);
    text-align: center;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    padding: 15px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;

  font-size: 20px;
  cursor: pointer;
`;

export const StarContainer = styled.div`
  font-size: 24px;
  text-align: center;
`;

export const ReviewInput = styled(OriginalStyledInput)`
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  color: #fff;
  border-radius: 5px;
  font-size: var(--font-content-m);
  margin: 20px 0;

  &:focus {
    border-color: var(--primary-50);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #f05a7e;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ReviewList = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const ReviewItem = styled.li`
  border-bottom: 1px solid var(--gray-60);
  padding: 10px 15px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    background-color: var(--gray-80);
  }

  .icon-container {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  span {
    font-size: var(--font-content-m);
    color: var(--gray-50);
    margin-bottom: 10px;
  }

  p {
    font-size: var(--font-content-l);
    color: var(--gray-30);
    margin-bottom: 10px;
  }

  .icon-wrapper {
    stroke: var(--gray-60);
    border: 1.5px solid var(--gray-60);
    border-radius: 25px;
    padding: 10px;
    margin: 0 15px 15px 0;
    display: flex;
    align-items: center;
  }
`;

export const MovieInfoSection = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 50px 0;

  .movie-content {
    max-width: 1440px;
    display: flex;
    flex-shrink: 0;
    gap: 30px;
  }
  .poster-wrapper {
    width: 340px;
    height: 490px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .info-wrapper {
    flex-grow: 1;
    h2 {
      font-size: var(--font-content-xl);
      margin-bottom: 15px;
    }
    .overview {
      font-size: var(--font-lebel-l);
      margin-bottom: 40px;
      display: block;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .poster-wrapper {
    width: 340px;
    height: 490px;

    @media (max-width: 768px) {
      width: 240px;
      height: 350px;
    }
  }

  .detail-row {
    display: flex;
    margin-bottom: 40px;
    .label {
      font-size: var(--font-lebel-l);
      margin: 0 60px 0 0;
    }
    .value {
      font-size: var(--font-lebel-l);
    }
  }
`;

export const StyledButton = styled(OriginalStyledButton)`
  width: 350px;
  height: 60px;
  font-size: var(--font-content-l);
  margin: 0 20px 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
  }
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  padding: 50px 0;

  .episode-item {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    .content {
      display: flex;
      align-items: center;
    }

    .title {
      display: flex;
      align-items: center;
    }

    .pic {
      display: flex;
      width: 345px;
      height: 195px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    .text-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-left: 20px;

      h2 {
        font-size: var(--font-content-l);
        margin-bottom: 6px;
      }

      h3 {
        font-size: var(--font-content-m);
        color: var(--gray-50);
      }
    }

    p {
      grid-area: paraagraph;
      grid-column: 1 / span2;
      font-size: var(--font-content-s);
      color: var(--gray-50);
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .episodes-list {
    margin-top: 50px;
    width: 100%;
  }

  .episode-detail {
    background: var(--gray-80);
    padding: 15px;
    border-radius: 10px;
    font-size: var(--font-content-m);
    color: var(--gray-50);

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    h4 {
      font-size: var(--font-content-m);
      color: var(--gray-20);
      margin-bottom: 10px;
    }
  }

  .episode-detail:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; // 화면이 작아지면 한 줄에 하나씩 표시

    .episode-item {
      .pic {
        height: 250px;
        width: 145px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const EpisodeWrap = styled.div`
  max-width: 1440px;
  justify-content: center;
  margin: 0 auto;
  .EpisodeContainer {
    display: block;
    padding: 0;
    margin: 0;
  }
`;

export const CustomButton = styled(StyledButton)`
  color: white;
  font-size: var(--font-content-m);
  padding: 12px 24px;
`;
export const RecommendedWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 50px 0;
  RecommendedContainer {
  }
`;

export const RecommendeddBox = styled.div`
  max-width: 1440px;
  overflow: hidden;
  margin-bottom: 75px;
  h2 {
    font-size: var(--font-content-xxl);
    margin-bottom: 15px;
  }
  .movie-slide {
    flex: 0 0 auto;
    width: 270px;
    height: 380px;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 5px;
      overflow: hidden;
    }
  }
`;

export const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }
  @media (max-width: 1024px) {
    padding: 0 35px;
    .inner {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0 15px;
    .inner {
      max-width: 100%;
    }
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  z-index: 1;
  text-align: left;
  bottom: 50px;

  h1 {
    font-size: var(--font-title-s);
    margin-bottom: 30px;
  }

  p {
    font-size: var(--font-content-s);
    margin-bottom: 30px;
  }

  .description {
    margin-bottom: 30px;
    font-size: var(--font-content-s);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    bottom: 30px;

    h1 {
      font-size: var(--font-content-xxl-tablet);
      margin-bottom: 10px;
    }

    p {
      font-size: var(--font-content-m-tablet);
      margin-bottom: 20px;
    }

    description {
      font-size: var(--font-label-m-tablet);
      color: var(--gray-60);
    }
  }

  @media (max-width: 768px) {
    bottom: 30px;

    h1 {
      font-size: var(--font-content-xxl-mobile);
    }

    p {
      font-size: var(--font-heading-m-mobile);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .actionWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 20px;
    font-size: var(--font-content-s);
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--hover-color);
      transition: transform 0.3s ease-in-out;
      transform: scale(1.2);

      svg {
        margin-bottom: 5px;
        color: var(--hover-color);
      }
    }
  }

  @media (max-width: 768px) {
    div {
      margin-right: 10px;
      font-size: var(--font-content-xs);
    }
  }
`;

export const BackgroundContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%; /* 왼쪽에서 가운데까지 */
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)); /* 점점 투명해지는 효과 */
    z-index: 1;
  }

  iframe,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const Container = styled.div`
  width: 100vw;
`;

export const TabMenu = styled.ul`
  max-width: 1440px;
  height: 60px;
  border-bottom: solid 3px;
  border-color: var(--gray-80);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0;
  li {
    margin-right: 30px;
    padding: 0 30px;
    border-radius: 5px;
    font-size: var(--font-content-m);
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    &:hover {
      color: var(--hover-color);
    }

    &.active {
      color: var(--hover-color);
    }
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;
