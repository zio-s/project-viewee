import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../styled/Mixin';

export const HeaderWrap = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  display: flex;
  height: 94px;
  z-index: 9999;
  ${mobileMore`
    height: 72px;
    `}
  .header_inner {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: normal;
    z-index: 9999;
    ${mobileMore`
      flex-direction: row;
      gap: 50px;
      align-items: center;
      flex-shrink: 0;
    `}
    ${tabletMore`
      gap: 60px;
    `}
  }
  h1 {
    width: 100px;
    padding: 1.2rem 1.5rem 0;
    margin-bottom: 0.5rem;
    ${mobileMore`
      width: 150px;
      padding: 1.4rem 3.5rem ;
      margin-bottom: 0;
    `}
    ${tabletMore`
      padding: 1.4rem 5rem ;
    `}
    a {
      img {
        width: 100%;
      }
    }
  }
  .login {
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
export const TopMenu = styled.ul`
  &.top-menu {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
    z-index: 9999;
    ${mobileMore`
      top: 50%;
      right: 35px;
      transform: translateY(-50%);
    `}
    ${tabletMore`
      width: auto;
      right: 50px;
    `}
    li {
      a {
        font-size: var(--font-heading-m-mobile);
        ${mobileMore`
          font-size: var(--font-heading-m-tablet);
        `}
        ${tabletMore`
          font-size: var(--font-heading-m);
        `}
      }
    }
    button {
      display: inline-block;
      width: 48px;
      height: 48px;
      i {
        height: 28px;
        width: 28px;
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
    background-color: #2b2a2a;
    padding: 6.25rem 3.125rem;
  }
`;

export const SearchInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 6.25rem;

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  text-indent: 36px;
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px 0;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: white;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 2.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: white;
  }
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
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const KeywordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const KeywordItem = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const KeywordText = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;
