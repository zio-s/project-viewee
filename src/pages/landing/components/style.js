import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300vh;
  --perspective: 1500px;
  --grid-item-ratio: 1.5;
  --grid-width: 100%;
  --grid-height: auto;
  --grid-gap: 1vw;
  --grid-columns: 8;
  /* --grid-inner-scale: 0.8; */
  .section-inner {
    position: relative;
    height: 200vh;
    z-index: 999;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0%;
      background: linear-gradient(0deg, rgba(28, 28, 30, 1) 10%, rgba(28, 28, 30, 0) 100%);
      z-index: 999;
    }
  }

  h2 {
    position: fixed;
    z-index: 1;
    color: var(--text-primary);
    font-size: 2rem;
    text-align: center;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);

    ${mobileMore`
      font-size: 3rem;
      width: 80%;
    `}

    ${tabletMore`
      font-size: 4rem;
      width: auto;
    `}
  }

  button {
    position: fixed;
    z-index: 1000;
    padding: 1.5rem 5rem;
    border: none;
    background: rgba(80, 80, 80, 0.7);
    color: var(--text-primary);
    border-radius: 50px;
    cursor: pointer;
    font-size: var(--font-content-m-mobile);
    transition: all 0.3s ease;

    ${mobileMore`
      padding: 2rem 10rem;
      font-size: var(--font-content-m-tablet);
    `}

    ${tabletMore`
      padding: 2.75rem 21.25rem;
      font-size: var(--font-content-m);
    `}
    
    &:hover {
      background-color: var(--gray-0);
      color: var(--gray-90);
      border: 1px solid var(--background-primary);
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
  height: 100vh;
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

export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200vh;
`;

export const ViewContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    background-color: var(--background);
  }

  h1 {
    font-size: var(--font-title-m-mobile);
  }

  .content {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-right: -10px;

    .text-l {
      span {
        font-size: var(--font-content-xxl-mobile);
        opacity: 0;
      }
    }

    .text-r {
      text-align: right;
      span {
        font-size: var(--font-content-xxl-mobile);
        opacity: 0;
      }
    }

    .view {
      .img-box {
        width: 120px;
        height: 150px;
        position: relative;
        background: url('/images/v.png') center/contain no-repeat;

        .eye-l {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          padding: 3px;
          left: 7%;
          top: -13%;
          background: url('/images/eye-1.png') no-repeat;
          background-size: contain;

          .eye-bl {
            position: absolute;
            top: 7px;
          }
        }

        .eye-r {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          padding: 3px;
          right: 7%;
          top: -13%;
          background: url('/images/eye-1.png') no-repeat;
          background-size: contain;

          .eye-br {
            position: absolute;
            top: 7px;
          }
        }
      }
    }
  }

  .text-l span,
  .text-r span {
    transition: color 0.3s ease, text-shadow 0.3s ease;
    will-change: color, text-shadow;

    &.text-flicker-in-glow {
      animation: text-flicker-in-glow 4s linear;
    }
  }

  @keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 15px var(--primary-30), 0 0 30px var(--primary-40), 0 0 50px var(--primary-20);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 15px var(--primary-30), 0 0 30px var(--primary-40), 0 0 50px var(--primary-20);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 15px var(--primary-30), 0 0 30px var(--primary-40), 0 0 55px var(--primary-30),
        0 0 50px var(--primary-20);
    }
  }

  ${mobileMore`
    .inner {
      gap: 100px;
    }

    h1 {
      font-size: var(--font-title-m-tablet);
    }

    .content {
      gap: 70px;
      margin-right: -15px;

      .text-l span,
      .text-r span {
        font-size: var(--font-content-xxl-tablet);
      }

      .view .img-box {
        width: 160px;
        height: 200px;

        .eye-l, .eye-r {
          width: 25px;
          height: 25px;
          padding: 4px;
        }

        .eye-l .eye-bl,
        .eye-r .eye-br {
          top: 8px;
        }
      }
    }

    @keyframes text-flicker-in-glow {
      0% {
        opacity: 0;
      }
      65.1% {
        opacity: 1;
        text-shadow: 0 0 20px var(--primary-30), 0 0 40px var(--primary-40), 0 0 70px var(--primary-20);
      }
      75% {
        opacity: 1;
        text-shadow: 0 0 20px var(--primary-30), 0 0 40px var(--primary-40), 0 0 70px var(--primary-20);
      }
      100% {
        opacity: 1;
        text-shadow: 0 0 20px var(--primary-30), 0 0 40px var(--primary-40), 0 0 75px var(--primary-30),
          0 0 70px var(--primary-20);
      }
    }
  `}

  ${tabletMore`
    .inner {
      gap: 150px;
    }

    h1 {
      font-size: 90px;
    }

    .content {
      gap: 100px;
      margin-right: -20px;

      .text-l span,
      .text-r span {
        font-size: var(--font-title-s);
      }

      .view .img-box {
        width: 200px;
        height: 248px;

        .eye-l, .eye-r {
          width: 30px;
          height: 30px;
          padding: 5px;
        }

        .eye-l .eye-bl,
        .eye-r .eye-br {
          top: 10px;
        }
      }
    }

    @keyframes text-flicker-in-glow {
      0% {
        opacity: 0;
      }
      65.1% {
        opacity: 1;
        text-shadow: 0 0 30px var(--primary-30), 0 0 60px var(--primary-40), 0 0 100px var(--primary-20);
      }
      75% {
        opacity: 1;
        text-shadow: 0 0 30px var(--primary-30), 0 0 60px var(--primary-40), 0 0 100px var(--primary-20);
      }
      100% {
        opacity: 1;
        text-shadow: 0 0 30px var(--primary-30), 0 0 60px var(--primary-40), 0 0 110px var(--primary-30),
          0 0 100px var(--primary-20);
      }
    }
  `}
`;
