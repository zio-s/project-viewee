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
      margin-left: 25px;
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
  background-color: #2b2a2a;
  height: 50vh;
  z-index: 100;
  padding: 20px;
  transform: translateY(${(props) => (props.isOpen ? '0' : '-100%')});
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  .search-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;

    ${mobileMore`
      padding-top: 80px;
    `}
  }

  .search-input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 24px;
    padding: 10px 0;
    margin-bottom: 30px;

    &:focus {
      outline: none;
      border-bottom-color: white;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .popular-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;

    .keyword {
      display: inline-block;
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
