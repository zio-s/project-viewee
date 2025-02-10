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
  transition: all 0.2s ease;
  ul {
    display: flex;
    ${tabletMore`
      gap: 6.2rem;
      font-size: var(--font-content-xl);  
      color: var(--gray-40);
      `}
    li {
      cursor: pointer;
      position: relative;
      ul {
        position: absolute;
        top: 100%;
        left: -50%;
        transform: translateX(-10%);
        display: none;
        flex-direction: column;
        gap: 0;
        font-size: var(--font-content-m);
        padding-top: 0.5rem;
        li {
          display: flex;
          width: 106px;
          height: 43px;
          justify-content: center;
          align-items: center;
          background-color: var(--gray-80);
        }
      }
      &:hover {
        color: var(--hover-color);
        ul {
          display: flex;
        }
      }
    }
    .on {
      color: var(--primary-50);
    }
  }
`;
