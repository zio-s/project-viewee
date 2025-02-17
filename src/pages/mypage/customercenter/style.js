import styled, { css } from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

export const CustomerWrap = styled.div`
  ${tabletMore`
    padding: 5rem 24rem;
    `}
  display: flex;
  flex-direction: column;

  transition: all 0.2s ease;
  h2 {
    display: none;
    font-size: var(--font-content-xxl);
    font-weight: 600;
    ${tabletMore`    
      display: block;
    `}
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3.5rem;
    .inputCoupon {
      display: flex;
      gap: 2rem;
      input {
        width: 436px;
        height: 64px;
      }
      button {
        width: 144px;
        height: 64px;
        font-size: var(--font-content-l);
      }
    }
    .couponList {
      width: 80%;
      margin: 10rem 0;
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
              font-size: var(--font-content-xl);
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
        font-size: var(--font-content-s);
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
