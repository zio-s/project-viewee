import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../styled/Mixin';

export const PaginationWrap = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
  button {
    img {
      width: 16px;
      height: 16px;
      filter: invert(58%) sepia(0%) saturate(30%) hue-rotate(208deg) brightness(99%) contrast(98%);
      ${mobileMore`
        width: 20px;
        height: 20px;
      `}
      ${tabletMore`
        width: 24px;
        height: 24px;
      `}
    }
    .active {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    li {
      font-weight: 600;
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--font-label-xs);
      ${mobileMore`
        width: 28px;
        height: 28px;
        font-size: var(--font-content-s);
      `}
      ${tabletMore`
          width: 35px;
          height: 35px;
          font-size: var(--font-content-m);
      `}
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
