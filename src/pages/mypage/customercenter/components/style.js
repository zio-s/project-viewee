import styled, { css } from 'styled-components';

export const CCNoitcetWrap = styled.div`
  form {
    margin-top: 4rem;
    display: flex;
    gap: 0.5rem;
    input {
      background-color: var(--gray-80);
      border: none;
      width: 260px;
      height: 30px;
      border-radius: 5px;
    }
    button {
      width: 54px;
      height: 30px;
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
  .dataList {
    margin-top: 1.7rem;
    table {
      thead {
        tr {
          border-top: 2px solid var(--gray-70);
          border-bottom: 1px solid var(--gray-70);
        }
        th {
          padding: 1.5rem 0rem;
          font-size: var(--font-content-m);
        }
      }
      tbody {
        tr {
          td {
            border-bottom: 1px solid var(--gray-70);
            padding: 1.7rem 0rem;
            text-align: center;
          }
          .title {
            text-align: left;
          }
          .data {
            color: var(--gray-60);
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
  margin-top: 8rem;
  border-radius: 5px;
  overflow: hidden;
  li {
    width: 25%;
    height: 50px;
    background-color: var(--gray-80);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
