import styled, { css } from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

export const SubscribeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  .contentWrapper {
    width: 100%;
    padding: 4.5rem 1.5rem;
    box-sizing: border-box;
    ${tabletMore`
      max-width: 1440px;
      padding: 15rem 0.5rem 0;
      margin-top: 0rem;
    `};
    .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
      ${tabletMore`
        gap: 1.4rem;
        margin-bottom: 8rem;
      `};
      h2 {
        font-size: var(--font-content-xl);
        font-weight: 700;
        ${tabletMore`
          font-size: var(--font-title-xs);
        `};
      }
      p {
        font-size: var(--font-label-s);
        color: var(--gray-50);
        text-wrap: wrap;
        ${tabletMore`
          font-size: var(--font-label-m);
        `};
      }
    }
    .subheader {
      display: flex;
      flex-direction: column;
      width: 100%;
      ${tabletMore`
        flex-direction: row;
        justify-content: space-between;
      `};
      .toggleButton {
        display: flex;
        justify-content: center;
        width: 146px;
        height: 61px;
        background-color: #0f0f0f;
        border-radius: 8px;
        ${tabletMore`
          width: 180px;
          height: 75px;
          border-radius: 10px;
        `};
        div {
          width: 65px;
          height: 45px;
          margin: 0.8rem 0 0.8rem 0;
          border-radius: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: var(--font-label-s);
          color: var(--gray-50);
          transition: all 0.1s linear;
          cursor: pointer;
          ${tabletMore`
            width: 80px;
            height: 55px;
            margin: 1rem 0 1rem 0;
            border-radius: 1rem;
            font-size: var(--font-content-m);
          `};
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
        gap: 2rem;
        flex-direction: column;
        margin-top: 4rem;
        ${tabletMore`
          gap: 3rem;
          flex-direction: row;
          margin-top:0;
        `};
      }
    }
    .verse {
      margin-top: 4.8rem;
      ${tabletMore`
        margin-top: 17.7rem;
      `};
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
      .mobile {
        .verseTitle {
          display: flex;
          margin-top: 4rem;
          padding: 0.8rem;
          background-color: #0f0f0f;
          border-radius: 8px;
          .verseTitleItem {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 33%;
            height: 45px;
            border-radius: 0.6rem;
            color: var(--gray-40);
            font-size: var(--font-label-s);
          }
          .on {
            color: var(--text-primary);
            background-color: var(--primary-50);
          }
        }
        .verseContent {
          display: flex;
          padding: 2.4rem;
          flex-wrap: wrap;
          background-color: #0f0f0f;
          margin-top: 2rem;
          border-radius: 1.2rem;
          gap: 2.4rem 0rem;
          div {
            display: flex;
            flex-direction: column;
            gap: 0rem;
            width: 50%;
            height: 46px;
            font-size: var(--font-label-s);
          }
          .versetitle {
            color: var(--gray-40);
            width: 100%;
          }
        }
      }
    }
    .banner {
      margin-top: 7rem;
      ${tabletMore`
        margin-top: 16.7rem;
      `};
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
  padding: 2.4rem;
  border: 1px solid var(--gray-80);
  border-radius: 10px;
  ${tabletMore`
    padding: 5rem;
    border-radius: 12px;
  `};
  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    ${tabletMore`
      gap: 1.6rem;
      margin-bottom: 5rem;
    `};
    h3 {
      font-size: var(--font-content-m);
      font-weight: 700;
      ${tabletMore`
        font-size: var(--font-content-xl)
      `};
    }
    p {
      font-size: var(--font-label-s);
      color: var(--gray-50);
      ${tabletMore`
        font-size: var(--font-content-m)
      `};
    }
  }
  .priceper {
    display: flex;
    gap: 0.2rem;
    align-items: flex-end;
    margin-bottom: 3rem;
    ${tabletMore`
      gap: 0.4rem;
      margin-bottom: 5rem;
    `};
    .price {
      font-size: var(--font-content-xl);
      font-weight: 700;
      ${tabletMore`
        font-size: var(--font-content-xxxl);
      `};
    }
    .toggle {
      font-size: var(--font-label-s);
      color: var(--gray-50);
      font-weight: 700;
      ${tabletMore`
        font-size: var(--font-content-m);
      `};
    }
  }
  .button {
    display: flex;
    gap: 1.2rem;
    ${tabletMore`
      gap: 2rem;
    `};
    button {
      width: 15rem;
      font-size: var(--font-label-s);
      height: 5rem;
      ${tabletMore`
        width: 17rem;
        height: 6.3rem;
        font-size: var(--font-content-m);
      `};
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
