import styled from 'styled-components';

export const IntroContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: var(--background);
  touch-action: none;
  user-select: none;
`;

export const IntroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
