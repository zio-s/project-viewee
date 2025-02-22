import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../styled/Mixin';

export const HeaderSpacing = styled.div`
  height: 94px;

  ${mobileMore`
    height: 72px;
  `}
`;

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: var(--background-primary);
  display: flex;
  height: 94px;
  z-index: 9999;
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.$isVisible ? '0' : '-100%')});

  ${mobileMore`
    height: 72px;
  `}

  .header_inner {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: normal;
    width: 100%;
    max-width: var(--layout);
    margin: 0 auto;
    z-index: 9999;
    ${mobileMore`
      flex-direction: row;
      gap: 50px;
      align-items: center;
      flex-shrink: 0;
      padding: 0;
    `}
    ${tabletMore`
      gap: 60px;
    `};
  }

  h1 {
    width: 100px;
    padding: 1.2rem 1.5rem 0;
    margin-bottom: 0.5rem;

    ${mobileMore`
      width: 150px;
      padding: 1.4rem 3.5rem;
      margin-bottom: 0;
    `}

    ${tabletMore`
      padding: 1.4rem 5rem;
    `}
    
    a {
      z-index: 10;
      img {
        width: 100%;
      }
    }
  }
`;

export const TopMenu = styled.ul`
  &.top-menu {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    right: 1.5rem;
    top: 50%;
    transform: translateY(0%);
    z-index: 9999;
    @media (max-width: 530px) {
      top: 5px;
      transform: translateY(0);
      right: 0rem;
    }
    ${mobileMore`
      right: 3.5rem;
      top: 50%;
      transform: translateY(-50%);
    `}

    ${tabletMore`
      right: 5rem;
      top: 50%;
      transform: translateY(-50%);
    `}

    li {
      position: relative;
      z-index: 1;

      a {
        font-size: var(--font-heading-m-mobile);
        display: block;

        ${mobileMore`
          font-size: var(--font-heading-m-tablet);
        `}
        ${tabletMore`
          font-size: var(--font-heading-m);
        `}
      }
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      cursor: pointer;
      position: relative;
      z-index: 1;

      i {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 28px;
      }
    }
  }
`;

export const NavWrap = styled.nav`
  &.nav {
    width: 100vw;
    max-width: 390px;
    height: 47px;
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem 2.75rem;

      ${mobileMore`
        padding: 0;
        margin-bottom: 0;
        gap: 30px;
        justify-content: flex-start;
      `}

      ${tabletMore`
        gap: 50px;
      `}

      li {
        align-items: center;
        position: relative;

        a {
          display: block;
          width: 100%;
          font-size: var(--font-heading-m-mobile);
          font-weight: 500;
          transition: 0.3s;

          ${mobileMore`
            font-size: var(--font-heading-m-tablet);
          `}

          ${tabletMore`
            font-size: var(--font-heading-m);
          `}

          &:hover {
            color: var(--hover-color);
          }
        }

        &:last-child span {
          font-size: 16px;
          border-radius: 50%;
          display: block;
          position: absolute;
          right: -20px;
          top: -5px;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
        }
      }
    }
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 100;
  transform: translateY(${(props) => (props.$isOpen ? '0' : '-100%')});
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: all 0.3s ease-in-out;

  .searchBg {
    background-color: var(--background-secondary);
    padding: var(--p-mobile);

    ${mobileMore`
      padding: 3.125rem;
    `}

    ${tabletMore`
      padding: 6.25rem 3.125rem;
    `}
  }
`;

export const SearchInner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 94px;

  ${mobileMore`
    padding-top: 80px;
    padding-left: var(--p-tablet);
    padding-right: var(--p-tablet);
  `}

  ${tabletMore`
    max-width: var(--layout);
    padding-top: 6.25rem;
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  text-indent: 36px;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-content-l-mobile);
  padding: 10px 0;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: var(--text-primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }

  ${mobileMore`
    height: 45px;
    font-size: var(--font-content-l);
  `}

  ${tabletMore`
    height: 50px;
    font-size: var(--font-content-xl);
  `}
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: var(--font-content-xl);
  transition: color 0.3s ease;

  &:hover {
    color: var(--text-primary);
  }

  ${mobileMore`
    font-size: var(--font-content-xxl);
  `}

  ${tabletMore`
    font-size: var(--font-content-xxxl);
  `}
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

export const ErrorText = styled.div`
  text-align: center;
  padding: 20px;
  color: #ff6b6b;
`;

export const HistoryContainer = styled.div`
  margin-top: 2rem;
`;

export const HistoryTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const KeywordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: center;

  ${mobileMore`
    gap: 0.5rem;
  `}

  ${tabletMore`
    gap: 0.75rem;
    justify-content: flex-start;
  `}
`;

export const KeywordItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  gap: 0.625rem;
  padding: 0.375rem 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  ${mobileMore`
    padding: 0.5rem 1.2rem;
    gap: 0.75rem;
    border-radius: 16px;
  `}

  ${tabletMore`
    padding: 0.5625rem 1.4rem;
    gap: 1rem;
    border-radius: 20px;
  `}
`;

export const KeywordText = styled.span`
  display: flex;
  padding: 0.5rem 0.5rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;

  ${mobileMore`
    font-size: 1.6rem;
    padding: 0.375rem 0.75rem;
  `}

  ${tabletMore`
    font-size: 1.8rem;
    padding: 0.5rem 0.875rem;
  `}
`;

export const DeleteButton = styled.button`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: white;
    path {
      fill: var(--hover-color);
    }
  }

  ${mobileMore`
    font-size: 1.8rem;
  `}

  ${tabletMore`
    font-size: 2rem;
  `}
`;
