import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

export const MyPageContentLikedWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  .nodata {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    font-size: var(--font-content-m);
    color: var(--gray-50);
    margin-top: 4rem;
    img {
      width: 100px;
      hieght: 100px;
      ${mobileMore`
        width: auto;
        height: auto;
      `}
    }
    ${mobileMore`
        font-size: var(--font-content-xl);
      `}
    ${tabletMore`
        font-size: var(--font-content-xxxl);
      `}
  }
  ${mobileMore`
    padding: 3rem;
  `}
  ${tabletMore`
    font-size: var(--font-content-xxl);
    gap: 5.5rem;
  `}
  .header {
    display: flex;
    justify-content: space-between;
    .contentEdit {
      display: flex;
      ${tabletMore`
        gap: 1.4rem;
    `}
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.7rem;
    button {
      width: 320px;
    }
    ul {
      display: flex;
      gap: 5rem 1.5rem;
      flex-wrap: wrap;
      li {
        position: relative;
      }
      img {
        width: 272px;
        height: 386px;
        border-radius: 5px;
        cursor: pointer;
        transition: filter 0.3s ease;

        &.on {
          filter: brightness(0.4);
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        opacity: 0;
        pointer-events: none;

        .check-circle {
          fill: none;
          stroke: var(--primary-50);
          stroke-width: 5;
          stroke-dasharray: 351;
          stroke-dashoffset: 351;
          transform-origin: center;
          transform: scale(0);
        }

        .check-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          transform-origin: center;
          transform: scale(0);
        }

        &.check-active {
          opacity: 1;

          .check-circle {
            animation: circle-draw 0.5s ease forwards, circle-scale 0.3s ease forwards;
          }

          .check-path {
            animation: check-draw 0.5s ease 0.3s forwards, check-scale 0.3s ease 0.3s forwards;
          }
        }
      }

      @keyframes circle-draw {
        to {
          stroke-dashoffset: 0;
        }
      }

      @keyframes circle-scale {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }

      @keyframes check-draw {
        to {
          stroke-dashoffset: 0;
        }
      }

      @keyframes check-scale {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(0.6);
        }
      }
    }
  }
`;
export const MyPageContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  font-size: var(--font-label-xs);
  gap: 3rem;
  ${mobileMore`
    gap: 5rem;
    font-size: var(--font-content-m);
    padding: 0 3rem;
    margin-top: 1.5rem;
  `}
  ${tabletMore`
    padding-top : 1.5rem;
    margin-top: 0rem;
    font-size: var(--font-content-xxl);
    gap: 7.5rem;
    padding: 0;
  `}
  section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    ${mobileMore`
      gap: 1.5rem;
    `}
    ${tabletMore`
      gap: 2rem;
    `}
    .title {
      display: flex;
      gap: 0.8rem;
      cursor: pointer;
      ${mobileMore`
        gap: 1rem;
      `}
      ${tabletMore`
      gap: 2rem;
      `}
      .iconNext {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 1rem;
          height: 1rem;
          filter: invert(94%) sepia(0%) saturate(24%) hue-rotate(41deg) brightness(104%) contrast(106%);
          ${mobileMore`
            width: 1.5rem;
            height: 1.5rem;
          `}
          ${tabletMore`
            width: 2rem;
            height: 2rem;
          `}
        }
      }
    }
    ul {
      width: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      gap: 0.6rem;
      ${tabletMore`
      gap: 1.5rem;
      `}
    }
    ul::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 20%;
      height: 100%;
      background: linear-gradient(to left, var(--background-color), rgba(0, 0, 0, 0));
      pointer-events: none;
    }
  }
  .played {
    width: 100%;

    li {
      img {
        width: 150px;
        height: 95px;
        object-fit: cover;
        border-radius: 0.2rem;
        ${tabletMore`
          width: 350px;
          height: 200px;
          border-radius: 0.5rem;
          `};
      }
    }
  }
  .liked {
    img {
      width: 120px;
      height: 180px;
      object-fit: cover;
      border-radius: 0.2rem;
      ${tabletMore`
          width: 275px;
          height: 400px;
          border-radius: 0.5rem;
      `}
    }
  }
  .downed {
    img {
      width: 150px;
      height: 95px;
      object-fit: cover;
      border-radius: 0.2rem;
      ${tabletMore`
          width: 350px;
          height: 220px;
          object-fit: cover;
          border-radius: 0.5rem;
      `}
    }
    .caution {
      margin-top: 0.1rem;
      color: var(--gray-60);
      font-size: var(--font-label-m-mobile);
      ${mobileMore`
        font-size: var(--font-label-m-tablet);
      `}
      ${tabletMore`      
      margin-top: 0.3rem;
      font-size: var(--font-label-m);
      `}
    }
  }
`;
export const MyPageMainWrap = styled.div``;
