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
    margin-top: 16.4rem;
    .info {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      .title {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
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
        width: 743px;
        height: 504px;
        object-fit: cover;
      }
    }
    .inputBox {
      background-color: #0f0f0f;
      padding: 5rem;
      border: 1px solid var(--gray-80);
      border-radius: 12px;
      .submitQuestion {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        font-size: var(--font-content-m);
        .item {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          input {
            color: var(--gray-40);
            background-color: var(--gray-90);
            border: 1px solid var(--gray-80);
          }
        }
        .name {
          input {
            width: 485px;
            height: 67px;
          }
        }
        .question {
          textarea {
            width: 450px;
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
        .itemSet {
          display: flex;
          gap: 5rem;
          input {
            width: 215px;
            height: 67px;
          }
        }
      }
    }
    .agree {
      display: flex;
      gap: 5rem;
      .labelBox {
        gap: 1rem;
        .iconBox {
          padding: 0.4rem;
        }
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
            border-bottom: 1px solid transparent;
            border-image: linear-gradient(
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
