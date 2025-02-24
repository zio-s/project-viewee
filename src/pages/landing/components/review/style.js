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

      h1 {
        font-size: 3rem;
        margin: 0;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .text-container {
        position: relative;
        height: 3rem;
        display: flex;
        align-items: center;
        perspective: 1000px;
        min-width: 100px;
        justify-content: center;
      }

      .highlight-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: rgb(255, 107, 107);
        transform-style: preserve-3d;
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        will-change: transform, opacity;

        &.active {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }
`;
