import styled, { css } from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const CouponWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  .wrap {
    padding: 5rem 2rem;
    width: 100%;
    box-sizing: border-box;
    ${mobileMore`
        padding: 5rem 3rem;
      `}
    ${tabletMore`
      padding: 10rem 5rem;
      max-width: 1440px;
    `}
  }
  h2 {
    font-size: var(--font-content-xl);
    font-weight: bold;
    ${mobileMore`
      font-size: var(--font-content-xxl);
    `}
    ${tabletMore`
      font-size: var(--font-content-xxxl);
    `}
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    ${mobileMore`
      margin-top: 3.5rem;
    `}
    .inputCoupon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      ${mobileMore`
        gap: 3rem;
      `}
      ${tabletMore`
        flex-direction: row;
        gap: 2rem;
      `}
      input {
        width: 350px;
        height: 50px;
        ${mobileMore`
          width: 400px;
          height: 55px;
        `}
        ${tabletMore`
          width: 436px;
          height: 64px;
        `}
      }
      button {
        width: 100px;
        height: 50px;
        font-size: var(--font-label-s);
        ${mobileMore`
          width: 120px;
          height: 55px;
          font-size: var(--font-content-m);
        `}
        ${tabletMore`
          width: 144px;
          height: 64px;
          font-size: var(--font-content-l);
        `}
      }
    }
    .couponList {
      width: 80%;
      margin: 5rem 0;
      ${tabletMore`
        margin: 10rem 0;
      `}
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: var(--gray-80);
          padding: 2.5rem 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid var(--gray-40);
          cursor: pointer;
          &:hover {
            border: 1px solid var(--primary-50);
          }
          .couponInfo {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            .title {
              font-size: var(--font-content-m);
              ${mobileMore`
                font-size: var(--font-content-l);
              `}
              ${tabletMore`
                font-size: var(--font-content-xl);
              `}
            }
            .dday {
              color: var(--gray-40);
            }
          }
          button {
            width: 144px;
            height: 64px;
            font-size: var(--font-content-l);
          }
        }
      }
    }
    .caution {
      width: 80%;
      background-color: var(--gray-80);
      border-radius: 0.5rem;
      padding: 1.5rem 2rem;
      h3 {
        font-size: var(--font-content-m);
      }
      ul {
        margin-top: 1.5rem;
        margin-left: 2.3rem;
        color: var(--gray-60);
        font-size: var(--font-label-s);
        ${mobileMore`
          font-size: var(--font-content-s);
        `}
        li {
          list-style-type: disc;
        }
      }
    }
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
