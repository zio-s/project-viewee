import styled from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .profile {
    display: flex;
    ${tabletMore`
      gap: 5rem;
  `}
    .profileImg {
      border-radius: 50%;
      object-fit: cover;
      ${tabletMore`
        width: 150px;
        height: 150px;
      `}
    }
    .profileInfo {
      display: flex;
      flex-direction: column;
      ${tabletMore`
        gap: 4.0rem;
      `}
      .user {
        display: flex;
        ${tabletMore`
        gap: 3.0rem;
      `}
        h2 {
          ${tabletMore`
        font-size: var(--font-content-xxl);
      `}
          .userName {
            display: inline;
            text-decoration: underline;
          }
        }
      }
      .membership {
        width: 265px;
        cursor: default;
        &:hover {
          background: var(--gray-70);
        }
      }
    }
  }
  .profileRight {
    display: flex;
    ${tabletMore`
        gap: 11.1rem;
      `}
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const MyPageNavWrap = styled.div`
  width: 100%;
  padding: 6rem 0;
  ul {
    display: flex;
    ${tabletMore`
      gap: 6.2rem;
      font-size: var(--font-content-xl);  
      color: var(--gray-40);
      `}
    li {
      cursor: pointer;
      &:hover {
        color: var(--hover-color);
      }
    }
    .on {
      color: var(--primary-50);
    }
  }
`;
export const MyPageContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${tabletMore`
      padding-top : 13.7rem;
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
      img {
        width: 272px;
        height: 386px;
        border-radius: 5px;
      }
    }
  }
`;
