import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  --perspective: 2500px;
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

export const ViewContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .inner {
    width: 100vw;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 150px;
  }

  h1 {
    font-size: 90px;
  }
  .content {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    gap: 100px;
    margin-right: -20px;

    .text-l {
      span {
        font-size: 60px;
      }
    }
    .text-r {
      text-align: right;
      span {
        font-size: 60px;
      }
    }
    .view {
      .img-box {
        width: 200px;
        height: 248px;
        position: relative;
        background: url('/public/images/v.png') center/contain no-repeat;
        .eye-l {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 5px;
          left: 7%;
          top: -13%;
          background: url('/images/eye-1.png') no-repeat;
          .eye-bl {
            position: absolute;
            top: 10px;
          }
        }
        .eye-r {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 5px;
          right: 7%;
          top: -13%;
          background: url('/images/eye-1.png') no-repeat;
          .eye-br {
            position: absolute;
            top: 10px;
          }
        }
      }
    }
  }

  .text-l span,
  .text-r span {
    font-size: var(--font-content-xxxl);
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
    // ... 중간 키프레임들 ...
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px var(--primary-30), 0 0 60px var(--primary-40), 0 0 100px var(--primary-20);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px var(--primary-30), 0 0 60px var(--primary-40), 0 0 100px var(--primary-20);
    }
    // ... 중간 키프레임들 ...
    100% {
      opacity: 1;
      text-shadow: 0 0 30px var(--primary-30), 0 0 60px var(--primary-40), 0 0 110px var(--primary-30),
        0 0 100px var(--primary-20);
    }
  }

  // 반응형 스타일 적용
  @media screen and (max-width: 1024px) {
    .text-l span,
    .text-r span {
      font-size: var(--font-content-xxl-tablet);
    }
  }

  @media screen and (max-width: 768px) {
    .text-l span,
    .text-r span {
      font-size: var(--font-content-xxl-mobile);
    }
  }
`;
