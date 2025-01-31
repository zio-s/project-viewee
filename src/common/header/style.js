import styled from 'styled-components';

export const HeaderWrap = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  padding: 0 50px;

  .header_inner {
    height: 72px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  h1 {
    a {
      img {
      }
    }
  }
  .login {
  }
`;

export const NavWrap = styled.nav`
  &.nav {
    margin-left: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    ul {
      display: flex;
      li {
        align-items: center;
        a {
          display: block;
          height: 72px;
          line-height: 72px;
          padding: 0 25px;
          font-size: 18px;
          font-weight: 500;
          transition: 0.3s;

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
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
    li {
      margin-left: 25px;
      a {
        font-size: 15px;
      }
    }
  }
`;
