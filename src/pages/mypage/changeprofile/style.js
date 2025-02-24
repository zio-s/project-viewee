import styled from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

export const ChangeProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 3.35rem;
  transition: all 0.2s ease;
  overflow: hidden;
  h2 {
    font-size: var(--font-content-xxl-mobile);
    font-weight: 700;
    margin-bottom: 4rem;
    ${tabletMore`    
      font-size: var(--font-title-xs);
      margin-bottom: 7rem;
    `}
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
        @media (hover: hover) and (pointer: fine) {
          .ongo {
            display: none;
          }
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
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 24px;
            height: 24px;
            filter: invert(98%) sepia(1%) saturate(76%) hue-rotate(309deg) brightness(116%) contrast(100%);
            &:hover {
              transition: all 0.5s ease;
              filter: invert(56%) sepia(55%) saturate(3933%) hue-rotate(313deg) brightness(98%) contrast(92%);
            }
          }
        }
        @media (hover: hover) and (pointer: fine) {
          .edit:hover {
            transition: all 0.5s ease;
            color: var(--primary-50);
            cursor: pointer;
          }
        }
      }
    }
  }
  .nochange {
    .users {
      .editImg {
        position: relative;
        width: 100%;
        height: 100%;
        .ongo {
          display: none;
        }
      }
      @media (hover: hover) and (pointer: fine) {
        .editImg:hover {
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
      gap: 7rem;
      ${tabletMore`
          gap: 9rem;
      `}
      .editImg {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        ${tabletMore`
          gap: 1.5rem;
        `}
        input {
          display: none;
        }
        img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          ${tabletMore`
            width: 200px;
            height: 200px;
          `}
        }
        .imgChange {
          display: block;
          color: var(--primary-50);
          font-size: var(--font-content-s);
          ${tabletMore`
            font-size: var(--font-content-xxl);
          `}
        }
      }
      .editName {
        .nameChange {
          display: flex;
          flex-direction: column;
          gap: 6rem;
          ${tabletMore`
            gap: 9rem;
          `}
          .input {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            font-size: var(--font-label-s);
            ${tabletMore`
              gap: 2.3rem;
              font-size: var(--font-label-xxl);
            `};
            input {
              width: 150px;
              height: 34px;
              ${tabletMore`
                width: 295px;
                height: 64px;
                font-size: var(--font-label-xxl);
              `};
            }
            ${tabletMore`
              gap: 2.3rem;
            `};
          }
          .edit {
            display: flex;
            gap: 3rem;
            ${tabletMore`
              gap: 2.4rem;
            `};
            button {
              width: 150px;
              height: 36px;
              border-radius: 4.55rem;
              font-size: var(--font-label-m);
              ${tabletMore`
                width: 372px;
                height: 91px;
                border-radius: 4.55rem;
                font-size: var(--font-content-xxl);
              `};
            }
          }
        }
      }
    }
  }
  .swiperUser {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .swiper-wrapper {
      overflow: hidden;
    }
    .swiper-slide {
      width: 160px !important;
      border-radius: 50%;
      background-color: transparent !important;
      .connectedUsers {
        width: 160px !important;
        height: 160px !important;
        border-radius: 50%;
      }
      .editName {
        display: flex;
        gap: 1rem;

        .userName {
          font-size: var(--font-content-s);
        }
        .edit {
          img {
            width: 16px;
            height: 16px;
            &:hover {
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
