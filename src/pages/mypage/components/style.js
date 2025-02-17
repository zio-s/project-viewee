import styled from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

export const RequestListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    width: 130px;
    height: 50px;
  }
  .nodata {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    font-size: var(--font-content-xxxl);
    color: var(--gray-50);
  }
  .list {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    table {
      width: 100%;
      margin-bottom: 50px;
      th,
      td {
        height: 30px;
        padding: 2.8rem 5rem;
        font-size: var(--font-content-l);
        text-align: left;
      }
      tr {
        border-bottom: 3px solid var(--gray-80);
        .state {
          color: var(--primary-50);
        }
      }
      .tableTitle {
        width: 100%;
        background-color: var(--gray-80);
        color: var(--text-primary);
        border-bottom: 0px;
        th {
          text-align: center;
        }
        .titleList {
          width: 80%;
          text-align: left;
        }
      }
    }
  }
  .banner {
    margin-top: 100px;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 1.5rem;
  ${tabletMore`
    flex-direction: row;
    padding: 0;
    margin-bottom: 0rem;
    `}
  .profile {
    display: flex;
    margin-top: 1.5rem;
    ${tabletMore`
      gap: 5rem;
      margin-top: 0;
  `}
    .profileImg {
      border-radius: 50%;
      object-fit: cover;
      width: 80px;
      height: 80px;
      ${tabletMore`
        width: 150px;
        height: 150px;
      `};
    }
    .profileInfo {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      ${tabletMore`
        gap: 4.0rem;
        margin-left: 0rem;
      `}
      .user {
        display: flex;
        gap: 1rem;
        ${tabletMore`
        gap: 3.0rem;
        `}
        h2 {
          font-size: var(--font-content-l-mobile);
          ${tabletMore`
            font-size: var(--font-content-xxl);
          `}
          .userName {
            display: inline;
            text-decoration: underline;
          }
        }
        .edit {
          cursor: pointer;
          border-radius: 0.5rem;
          ${tabletMore`
            font-size: var(--font-content-m);
            border-radius: 1rem;
          `}
          img {
            width: 30px;
            height: 30px;
            filter: invert(98%) sepia(1%) saturate(76%) hue-rotate(309deg) brightness(116%) contrast(100%);
          }
        }
        button {
          width: 80px;
          height: 20px;
          font-size: var(--font-label-xs);
          border-radius: 0.5rem;
          ${tabletMore`
            width: 130px;
            height:35px;
            font-size: var(--font-content-m);
            border-radius: 1rem;
          `}
        }
      }
      .membership {
        cursor: default;
        width: 130px;
        margin-top: 10px;
        &:hover {
          background: var(--gray-70);
        }
        ${tabletMore`
          width: 265px;
          margin-top: 0px;
        `}
      }
    }
  }
  .profileRight {
    display: flex;
    margin-left: 90px;
    gap: 3rem;
    ${tabletMore`
      margin-left: 0px;
      gap: 11.1rem;
    `}
    .nowCoupon {
      display: flex;
      gap: 1rem;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        filter: invert(98%) sepia(1%) saturate(76%) hue-rotate(309deg) brightness(116%) contrast(100%);
      }
    }
    .userEdit {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
    }
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const MyPageNavWrap = styled.div`
  width: 100%;
  padding: 2rem;
  transition: all 0.2s ease;
  ${tabletMore`
      padding: 6rem 0;
    `}
  ul {
    display: flex;
    gap: 5rem;
    font-size: var(--font-label-s);
    ${tabletMore`
      gap: 6.2rem;
      font-size: var(--font-content-xl);  
      color: var(--gray-40);
      `}
    li {
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      ul {
        position: absolute;
        top: 100%;
        display: none;
        flex-direction: column;
        gap: 0;
        font-size: var(--font-content-m);
        padding-top: 0.5rem;
        li {
          display: flex;
          width: 106px;
          height: 43px;
          justify-content: center;
          align-items: center;
          background-color: var(--gray-80);
        }
      }
      &:hover {
        color: var(--hover-color);
        ul {
          display: flex;
        }
      }
    }
    .on {
      color: var(--primary-50);
    }
  }
`;
