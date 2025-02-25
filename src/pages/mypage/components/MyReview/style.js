import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

export const MyReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem 0;
  gap: 9rem;
  .nodata {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    font-size: var(--font-content-m);
    color: var(--gray-50);
    ${mobileMore`
        font-size: var(--font-content-xl);
      `}
    ${tabletMore`
        font-size: var(--font-content-xxxl);
      `}
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 7.5rem 3rem;
    li {
      width: 330px;
      border-radius: 5px;
      background-color: var(--gray-80);
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
      }
      .reviewItem {
        padding: 1rem 1.5rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        h2 {
          font-size: var(--font-label-l);
          text-wrap: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rate {
          display: flex;
          gap: 1rem;
          font-size: 18px;
          .fill {
            color: var(--secondary-50);
          }
        }
        .content {
          width: 100%;
          height: 60px;
          text-wrap: wrap;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      .button {
        padding: 1.5rem 3rem;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        button {
          width: 120px;
          height: 40px;
        }
      }
    }
  }
`;

export const MyReviewPopupWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(10px);
  .popContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 90%;
    background-color: var(--background-color);
    .img {
      width: 100%;
      height: 30%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .bgImg {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, var(--background-color), rgba(0, 0, 0, 0));
        pointer-events: none;
      }
    }
    h2 {
      font-size: var(--font-content-xl);
      margin-top: 1rem;
    }
    .rate {
      display: flex;
      font-size: 30px;
      cursor: pointer;
      .fill {
        color: var(--secondary-50);
      }
    }
    .rateComment {
      margin-top: 1.7rem;
      font-size: var(--font-content-m);
      color: var(--gray-40);
    }
    .content {
      width: 600px;
      height: 220px;
      margin-top: 4rem;
      padding: 1.6rem;
      background-color: var(--gray-80);
      border-radius: 5px;
      textarea {
        width: 100%;
        height: 100%;
        text-wrap: wrap;
        color: var(--gray-0);
        font-size: var(--font-content-l);
        resize: none;
      }
    }
    .reviewContent {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .button {
      display: flex;
      gap: 3rem;
      margin-top: 3rem;
      margin-bottom: 8rem;
      button {
        width: 200px;
        height: 70px;
        font-size: var(--font-label-m);
      }
    }
  }
`;
