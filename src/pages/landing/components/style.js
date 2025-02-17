import styled from 'styled-components';

export const HeroVideo = styled.section``;

export const ReviewWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  min-height: 300vh;
  width: 100%;
  background: #000;
`;

export const Section = styled.section`
  --perspective: 2000px;
  --grid-width: 160%;
  --grid-columns: 8;
  --grid-gap: 1rem;

  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: var(--perspective);

  h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 5rem;
    z-index: 1;
    text-align: center;
  }
  button {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding: 1rem 2rem;
    border: 1px solid white;
    background: transparent;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.3s ease;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

export const GridWrap = styled.div`
  position: relative;
  width: var(--grid-width);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  transform-style: preserve-3d;
  will-change: transform;
`;

export const GridItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  transform-style: preserve-3d;
  will-change: transform;
  border-radius: 4px;
  overflow: hidden;
  transform-origin: 50% 0%;
  filter: brightness(55.7062%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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

export const CardItem = styled.div`
  position: relative;
  width: 183px;
  height: 148px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  &.hover-active:hover {
    transform: rotateY(180deg);
  }

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
`;

export const CardFront = styled(CardSide)`
  background-color: #5cf;
  color: white;
`;

export const CardBack = styled(CardSide)`
  background-color: #3a9;
  color: white;
  transform: rotateY(180deg);
`;
