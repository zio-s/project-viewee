import styled, { css } from 'styled-components';

export const ChangeProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 3.35rem;
  transition: all 0.2s ease;
  h2 {
    font-size: var(--font-title-xs);
    margin-bottom: 7rem;
  }
  .userProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    .connected {
      scale: 0.75;
      filter: brightness(0.3);
      transition: all 0.5s ease;
    }
    .users {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      .editImg {
        position: relative;
        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
        }
        .ongo {
          display: none;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .editName {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        font-size: var(--font-content-xxl);
        .edit {
          cursor: pointer;
        }
        .edit:hover {
          transition: all 0.5s ease;
          color: var(--primary-50);
          cursor: pointer;
        }
      }
    }
  }
  .nochange {
    .users {
      .editImg {
        position: relative;
        .ongo {
          display: none;
        }
        &:hover {
          img {
            transition: all 0.5s ease;
            scale: 1.1;
            filter: brightness(0.6);
          }
          .ongo {
            transition: all 0.5s ease;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
  .onChange {
    .users {
      display: flex;
      flex-direction: column;
      gap: 9rem;
      .editImg {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        input {
          display: none;
        }
        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
        }
        .imgChange {
          display: block;
          color: var(--primary-50);
          font-size: var(--font-content-xxl);
        }
      }
      .editName {
        .nameChange {
          display: flex;
          flex-direction: column;
          gap: 9rem;
          .input {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2.3rem;
          }
          .edit {
            display: flex;
            gap: 2.4rem;
            button {
              width: 372px;
              height: 91px;
              border-radius: 4.55rem;
              font-size: var(--font-content-xxl);
            }
          }
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
