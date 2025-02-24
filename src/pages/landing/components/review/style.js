import styled from 'styled-components';

export const ReviewContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 500vh;
`;

export const ReviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .bg-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .text-box {
      position: absolute;
      top: 50%;
      left: 15%;
      transform: translateY(-50%);
      z-index: 2;
      color: white;

      @media (max-width: 768px) {
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
      }

      h1 {
        font-size: 7rem;
        margin: 0;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 2.5rem;
        font-weight: 700;

        @media (max-width: 1440px) {
          font-size: 6rem;
        }

        @media (max-width: 1024px) {
          font-size: 5rem;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          font-size: 4rem;
          flex-direction: column;
          align-items: flex-start;
          white-space: normal;
          gap: 0.5rem;
        }

        @media (max-width: 480px) {
          font-size: 3rem;
        }
      }

      .text-container {
        position: relative;
        height: 7rem;
        display: flex;
        align-items: center;
        perspective: 1000px;
        min-width: 200px;
        justify-content: center;

        @media (max-width: 1440px) {
          height: 6rem;
        }

        @media (max-width: 1024px) {
          height: 5rem;
          min-width: 150px;
        }

        @media (max-width: 768px) {
          height: 4rem;
          width: 100%;
          justify-content: flex-start;
        }

        @media (max-width: 480px) {
          height: 3rem;
        }
      }

      .highlight-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: var(--primary-50);
        transform-style: preserve-3d;
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        will-change: transform, opacity;
        font-weight: 700;
        letter-spacing: -0.02em;

        &.active {
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 768px) {
          left: 0;
        }
      }
    }
  }
`;
