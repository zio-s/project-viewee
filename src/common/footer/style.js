import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../styled/Mixin';

export const FooterWrap = styled.footer`
  font-weight: var(--font-weight-light);
  color: var(--gray-40);
  font-size: var(--font-footer-m-mobile);
  padding: 0 1.5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  ${mobileMore`
    font-size: var(--font-footer-m-tablet);
          padding: 0 3.5rem; 
            margin-top: 18rem;
  `}
  ${tabletMore`
    font-size: var(--font-footer-m);
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  a {
    color: var(--gray-40);
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    padding: 0 0.5rem;
    max-width: 1440px;
    ${mobileMore`
      gap: 3.5rem;

    `}
    ${tabletMore`
      gap: 7.5rem;
      max-width: 1440px;
    `} 
    .fNav {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        gap: 1.5rem;
        .active a {
          color: var(--primary-50);
        }
        ${mobileMore`
          gap: 2.5rem;
        `}
        ${tabletMore`
          flex-wrap: wrap;
          gap: 2rem 6rem;
        `}
      }
    }
    .addr {
      display: flex;
      gap: 2.5rem;
      flex-direction: column;
      ${mobileMore`
        gap: 2.5rem;
      `}
      ${tabletMore`
        gap: 4rem;
      `}
      .addr-intro {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        ${tabletMore`
        gap: 1.2rem;
      `}
      }
    }
    .sns {
      display: flex;
      gap: 1rem;
      ${mobileMore`
        gap: 1rem;
      `}
      ${tabletMore`
        gap: 3rem;
      `}
    }
  }
`;
