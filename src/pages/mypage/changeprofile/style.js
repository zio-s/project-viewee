import styled, { css } from 'styled-components';

export const ChangeProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 3.35rem;
  h2 {
    font-size: var(--font-title-xs);
    margin-bottom: 7rem;
  }
  .userProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }
    .users {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      .editName {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        font-size: var(--font-content-xxl);
      }
    }
    .connected {
      scale: 0.75;
      filter: brightness(0.3);
    }
  }
  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
