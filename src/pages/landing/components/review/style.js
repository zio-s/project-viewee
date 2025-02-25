import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

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
      position: absolute;
      top: 0;
      left: 0;

      ${tabletMore`
        object-fit: cover; 
      `}
    }

    .text-box {
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: white;
      width: 90%;
      text-align: center;

      h1 {
        font-size: var(--font-title-m-mobile);
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-weight: var(--font-weight-bold);
        white-space: normal;
      }

      .text-container {
        position: relative;
        height: 3rem;
        display: flex;
        align-items: center;
        perspective: var(--perspective);
        width: 100%;
        justify-content: center;
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
        font-weight: var(--font-weight-bold);
        letter-spacing: -0.02em;

        &.active {
          opacity: 1;
          pointer-events: auto;
        }
      }

      ${mobileMore`
        left: 15%;
        transform: translateY(-50%);
        width: auto;
        text-align: left;
        
        h1 {
          font-size: 4rem;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          white-space: nowrap;
        }
        
        .text-container {
          height: 4rem;
          min-width: 150px;
          width: auto;
        }
      `}

      ${tabletMore`
        h1 {
          font-size: 5rem;
          gap: 1.5rem;
        }
        
        .text-container {
          height: 5rem;
          min-width: 180px;
        }
        
        @media (min-width: 1280px) {
          h1 {
            font-size: 6rem;
            gap: 2rem;
          }
          
          .text-container {
            height: 6rem;
            min-width: 190px;
          }
        }
        
        @media (min-width: 1440px) {
          h1 {
            font-size: 7rem;
            gap: 2.5rem;
          }
          
          .text-container {
            height: 7rem;
            min-width: 200px;
          }
        }
      `}
    }
  }
`;
