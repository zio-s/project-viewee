import styled, { css } from 'styled-components';
import { tabletMore } from '../../../../styled/Mixin';

export const CCFnQWrap = styled.div`
  .search {
    width: 100%;
    margin: 36px 0;
    background-color: #252525;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 4.5rem 0;
    h2 {
      font-size: var(--font-content-xxl-tablet);
    }
    form {
      display: flex;
      gap: 2.5rem;
      input {
        width: 557px;
        height: 60px;
        background-color: var(--gray-80);
        border: none;
      }
      button {
        height: 60px;
        width: 119px;
      }
    }
    .example {
      display: flex;
      gap: 2.7rem;
      margin-bottom: 1.5rem;
      h3 {
        font-size: var(--font-content-l);
        color: var(--gray-50);
      }
      .tagList {
        display: flex;
        gap: 1rem;
        button {
          height: 24px;
        }
      }
    }
  }
`;
export const CCNoitcetWrap = styled.div`
  form {
    display: none;
    ${tabletMore`
     display: flex;
    `}
    margin-top: 4rem;
    display: flex;
    gap: 0.5rem;
    input {
      background-color: var(--gray-80);
      border: none;
      width: 260px;
      height: 30px;
      border-radius: 5px;
      display: none;
      ${tabletMore`
     display: block
    `}
    }
    button {
      display: none;
      width: 54px;
      height: 30px;
      ${tabletMore`
     display: flex;
    `}
    }
  }
  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CCContentWrap = styled.div`
  .contentHeader {
    display: flex;
    justify-content: space-between;
  }
  .fnq {
    flex-direction: column-reverse;
  }
  .dataList {
    margin-top: 1.1rem;
    ${tabletMore`
      margin-top: 1.7rem;
    `}
    table {
      width: 100%;
      table-layout: fixed;
      ${tabletMore`
        table-layout: auto;
      `}
      table-layout: fixed;
      thead {
        tr {
          border-top: 2px solid var(--gray-70);
          border-bottom: 1px solid var(--gray-70);
        }
        th {
          padding: 1.5rem 0rem;
          font-size: var(--font-content-s);
          width: auto;
          ${tabletMore`
            font-size: var(--font-content-m);
          `}
        }
      }
      tbody {
        tr {
          td {
            border-bottom: 1px solid var(--gray-70);
            padding: 1.7rem 0rem;
            text-align: center;
            width: auto;
          }
          .title {
            text-align: left;
            display: flex;
            align-items: center;
            gap: 0px;
            font-size: var(--font-label-s);
            ${tabletMore`
              font-size: var(--font-content-m);
              gap: 7px;
            `}
            .titleName {
              text-wrap: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .new {
              color: var(--primary-50);
              width: 14px;
              height: 14px;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: var(--font-label-s);
              flex-shrink: 0;
              ${tabletMore`
                font-size: var(--font-content-m);
                width: 45px;
                height: 20px;
              `}
            }
            .on {
              border: 1px solid var(--primary-50);
              border-radius: 5px;
            }
          }
          .data {
            color: var(--gray-60);
            width: auto;
            font-size: var(--font-content-xs);
            ${tabletMore`
              font-size: var(--font-content-m);
            `}
          }
        }
      }
    }
  }
  .pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CCNavWrap = styled.ul`
  display: flex;
  margin-top: 2.6rem;
  flex-wrap: wrap;
  width: 100vw;
  ${tabletMore`
      width: 100%;
      margin-top: 8rem;
      border-radius: 5px;
      overflow: hidden;
      flex-wrap: nowrap;
    `}
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--gray-80);
    padding: 0.7rem 0;
    min-width: 130px;
    font-size: var(--font-label-s);
    ${tabletMore`
    height: 50px;
    font-size: var(--font-content-m);
    width: 25%;
  `}
  }
  .on {
    background-color: var(--primary-50);
  }
  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CCSubNavWrap = styled.ul`
  display: flex;
  margin-top: 4rem;
  gap: 3rem;
  align-items: flex-end;
  .subNavMobile {
    margin-left: 1.5rem;
    .dropdown {
      width: auto;
      gap: 15px;
      justify-content: flex-start;
      padding: 1rem;
      border-radius: 2.5px;
      font-size: var(--font-label-s);
      .icon {
        img {
          width: 15px;
          height: 15px;
          filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(170deg) brightness(100%) contrast(103%);
        }
      }
    }
  }
  li {
    font-size: var(--font-content-l);
    color: var(--gray-50);
    cursor: pointer;
  }
  .on {
    font-size: var(--font-content-xl);
    color: var(--text-primary);
    font-weight: 600;
  }
  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
  button {
    img {
      width: 24px;
      height: 24px;
      filter: invert(58%) sepia(0%) saturate(30%) hue-rotate(208deg) brightness(99%) contrast(98%);
    }
    .active {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
      font-size: var(--font-content-m);
      font-weight: 600;
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .on {
      background-color: var(--primary-50);
    }
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
