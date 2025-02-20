import styled from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

export const QnAWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .contentWrap {
    padding: 3.7rem 5rem;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    gap: 0 8rem;
    margin-top: 4.3rem;
    .info {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      width: 37%;
      height: 944px;
      .title {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        align-items: flex-start;
        h2 {
          width: 410px;
          font-size: var(--font-title-m-tablet);
          font-weight: 600;
        }
        p {
          font-size: var(--font-content-m);
          color: var(--gray-40);
        }
      }
      img {
        width: 533px;
        height: 790px;
        object-fit: cover;
      }
    }
    .inputBox {
      background-color: #0f0f0f;
      padding: 5rem;
      border: 1px solid #262626;
      border-radius: 12px;
      width: 50%;
      height: 100%;
      .submitQuestion {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        font-size: var(--font-content-m);
        .itemWrap1 {
          display: flex;
          gap: 5rem;
          .name {
            flex: 1;
          }
          .id {
            flex: 1;
          }
        }
        .itemSet {
          display: flex;
          gap: 3rem;
          .email {
            display: flex;
            gap: 1.5rem;
            .emailInput {
              display: flex;
              gap: 0.8rem;
              align-items: center;
              input {
                width: 100%;
              }
            }
          }
          .phone {
            display: flex;
            gap: 1.5rem;
            .phoneInput {
              display: flex;
              gap: 0.8rem;
              input {
                width: 100%;
              }
            }
          }
        }
        .item {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          input {
            height: 60px;
            color: var(--gray-40);
            background-color: var(--gray-90);
            border: 1px solid var(--gray-80);
          }
        }
        .question {
          width: 100%;
          textarea {
            height: 125px;
            color: var(--gray-40);
            padding: 2rem;
            resize: none;
            font-size: var(--font-content-m);
            background-color: var(--gray-90);
            border: 1px solid var(--gray-80);
            border-radius: 8px;
          }
        }
      }
    }
    .category {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      form {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem 5rem;
        [type='radio'] {
          position: relative;
          width: 20px;
          height: 20px;
          appearance: none;
          border: 1px solid white;
          border-radius: 50%;
          accent-color: #f05a7e;
          box-sizing: border-box;
        }
        [type='radio']:checked {
          border-color: #f05a7e;
        }
        [type='radio']:checked::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background-color: #f05a7e;
          border-radius: 50%;
          border: 1px solid #f05a7e;
        }
        div {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          label {
            font-size: var(--font-content-m);
          }
        }
      }
    }
    .title {
      width: 100%;
      display: flex;
      gap: 4rem;
      align-items: center;
      input {
        height: 60px;
        background-color: var(--gray-90);
        border: 1px solid var(--gray-80);
        flex: 1;
      }
    }
    .agree {
      display: flex;
      gap: 5rem;
      color: var(--gray-50);
      justify-content: space-between;
      .labelBox {
        gap: 1rem;
        .iconBox {
          padding: 0.4rem;
        }
      }
      button {
        width: 150px;
        height: 60px;
        font-size: var(--font-content-l);
        height: 600;
      }
    }
    .faq {
      margin-top: 15rem;
      .title {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        margin-bottom: 8rem;
        h3 {
          font-size: var(--font-content-xxxl);
          font-weight: 600;
        }
        p {
          font-size: var(--font-content-m);
          color: var(--gray-40);
        }
      }
      .faqList {
        display: flex;
        flex-wrap: wrap;
        gap: 0rem 8rem;
        .faqItem {
          width: 45%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          .faqItemWrapper {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 3rem;
            gap: 2.4rem;
            box-sizing: border-box;
            .no {
              padding: 2rem;
              font-size: var(--font-content-l);
            }
            .itemContent {
              width: 100%;
              display: flex;
              font-size: var(--font-content-l);
              justify-content: space-between;
              align-items: center;
              .accordian {
                display: flex;
                position: relative;
                width: 80%;
                flex-direction: column;
                text-wrap: wrap;
                h4 {
                  text-wrap: wrap;
                }
                p {
                  height: 0px;
                  overflow: hidden;
                  font-size: var(--font-content-m);
                  color: var(--gray-40);
                }
                .on {
                  height: 100%;
                  margin-top: 2rem;
                  transition: all 0.2s linear;
                }
              }
              .arrow {
                width: 30px;
                height: 30px;
                img {
                  width: 100%;
                  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(280deg) brightness(111%) contrast(100%);
                }
              }
            }
          }
          .border {
            width: 100%;
            height: 1px;
            background: linear-gradient(
              to right,
              rgba(240, 90, 126, 0) 0%,
              rgba(240, 90, 126, 1) 17%,
              rgba(240, 90, 126, 0) 100%
            );
          }
        }
      }
    }
    .banner {
      margin-top: 15.7rem;
    }
  }
  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
