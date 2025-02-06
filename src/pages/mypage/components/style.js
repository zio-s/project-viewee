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
      gap: 1.5rem;
      img {
        width: 276px;
        height: 386px;
      }
    }
  }
`;
