import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  --perspective: 1500px;
  --grid-item-ratio: 1.5;
  --grid-width: 100%;
  --grid-height: auto;
  --grid-gap: 1vw;
  --grid-columns: 8;
  --grid-inner-scale: 0.8;
  /* margin-bottom: 100vh; */
  .section-inner {
    position: relative;
    height: 100vh;
    z-index: 999;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0%;
      background: linear-gradient(0deg, rgba(28, 28, 30, 1) 30%, rgba(28, 28, 30, 0) 100%);
      z-index: 999;
    }
  }

  h2 {
    position: fixed;
    z-index: 1;
    color: #fff;
    font-size: 4rem;
    text-align: center;
  }
  button {
    position: fixed;
    z-index: 1000;
    padding: 2.75rem 21.25rem;
    border: none;
    background: rgba(80, 80, 80, 0.7);
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #1c1c1e;
    }
  }
`;

export const Section = styled.section`
  display: grid;
  place-items: center;
  padding: 2rem;
  width: 100%;
  perspective: var(--perspective);
  position: relative;
`;

export const GridWrap = styled.div`
  height: var(--grid-height);
  width: var(--grid-width);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  transform-style: preserve-3d;
`;

export const GridItem = styled.div`
  aspect-ratio: var(--grid-item-ratio);
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  display: grid;
  place-items: center;
  transform-style: preserve-3d;
  /* box-shadow: 0 0px 80px rgb(0 0 0 / 85%); */

  img {
    width: calc(1 / var(--grid-inner-scale) * 100%);
    height: calc(1 / var(--grid-inner-scale) * 100%);
    object-fit: cover;
  }
  @media screen and (max-width: 767px) {
    border-radius: 3px;
  }
`;

export const GridImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(/images/mainPoster${props.$imageIndex}.png)`};
  background-size: cover;
  background-position: center;
`;

export const ReviewWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
`;

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  position: relative;
  z-index: 20;

  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const ReviewVideo = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ReviewInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewCard = styled.div`
  perspective: 1000px;
  padding-right: 10px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${({ $isSticky, $isMobile }) =>
    $isSticky &&
    !$isMobile &&
    `
    position: sticky;
    top: 20%;
  `}
`;
