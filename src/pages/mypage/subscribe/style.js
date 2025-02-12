import styled, { css } from 'styled-components';

export const SubscribeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  .contentWrapper {
    max-width: 1440px;
    padding: 15rem 0.5rem 0;
    .title {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      margin-bottom: 8rem;
      h2 {
        font-size: var(--font-title-xs);
        font-weight: 700;
      }
      p {
        font-size: var(--font-label-m);
        color: var(--gray-50);
      }
    }
    .subheader {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .toggleButton {
        display: flex;
        justify-content: center;
        width: 180px;
        height: 75px;
        background-color: #0f0f0f;
        border-radius: 10px;
        div {
          width: 80px;
          height: 55px;
          margin: 1rem 0 1rem 0;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: var(--font-content-m);
          color: var(--gray-50);
          transition: all 0.1s linear;
          cursor: pointer;
        }
        .on {
          background-color: var(--gray-80);
          color: var(--gray-0);
        }
      }
    }
    .subscribeList {
      ul {
        display: flex;
        gap: 3rem;
      }
    }
    .verse {
      margin-top: 17.7rem;
      table {
        width: 100%;
        border: 1px solid var(--gray-70);
        border-radius: 12px;
        color: var(--gray-50);
        th,
        td {
          width: 25%;
          height: 30px;
          padding: 3rem;
          border: 1px solid var(--gray-80);
          font-size: var(--font-label-m);
          text-align: left;
        }
        .tableTitle {
          width: 100%;
          background-color: var(--gray-80);
          color: var(--text-primary);
          th {
            border: 1px solid var(--gray-90);
          }
          .commentth {
            display: flex;
            gap: 0.8rem;
            .comment {
              text-wrap: nowrap;
              background-color: var(--primary-50);
              border-radius: 2px;
              font-size: var(--font-label-s);
              padding: 0.6rem 1rem;
            }
          }
        }
      }
    }
    .banner {
      margin-top: 16.7rem;
    }
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ItemListWrap = styled.li`
  /* Disabled State */
  padding: 5rem;
  border: 1px solid var(--gray-80);
  border-radius: 12px;
  .title {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 5rem;
    h3 {
      font-size: var(--font-content-xl);
      font-weight: 700;
    }
    p {
      font-size: var(--font-content-m);
      color: var(--gray-50);
    }
  }
  .priceper {
    display: flex;
    gap: 0.4rem;
    align-items: flex-end;
    margin-bottom: 5rem;
    .price {
      font-size: var(--font-content-xxxl);
      font-weight: 700;
    }
    .toggle {
      font-size: var(--font-content-m);
      color: var(--gray-50);
      font-weight: 700;
    }
  }
  .button {
    display: flex;
    gap: 2rem;
    button {
      width: 17rem;
      height: 6.3rem;
    }
    .black {
      background-color: var(--gray-90);
      &:hover {
        background-color: var(--gray-80);
      }
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
