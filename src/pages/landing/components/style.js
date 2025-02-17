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
