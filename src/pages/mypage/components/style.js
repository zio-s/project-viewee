import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const RequestListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2rem;
  ${mobileMore`
    padding:0;
  `}
  button {
    width: 80px;
    height: 30px;
    font-size: var(--font-label-s);
    ${tabletMore`
        width: 130px;
        height: 50px;
    `}
  }
  .nodata {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    font-size: var(--font-content-m);
    color: var(--gray-50);
    ${mobileMore`
      font-size: var(--font-content-xl);
    `}
    ${tabletMore`
      font-size: var(--font-content-xxxl);
    `}
  }
  .list {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobileMore`
      margin-top: 50px;
    `}
    table {
      width: inherit;
      margin-bottom: 20px;
      box-sizing: border-box;
      ${mobileMore`
        margin-bottom: 50px;
      `}
      th,
      td {
        height: 30px;
        width: 25%;
        padding: 2rem 0;
        font-size: var(--font-content-s);
        text-align: left;
        ${mobileMore`
          font-size: var(--font-content-m);
          padding: 2.8rem 5rem;
          width: auto;
        `}
        ${tabletMore`      
          margin-top: 0.3rem;
          font-size: var(--font-content-l);
        `}
      }
      tr {
        border-bottom: 3px solid var(--gray-80);
        td {
          text-align: center;
        }
        .state {
          color: var(--primary-50);
        }
        .titleList {
          text-align: left;
          padding-left: 3rem;
          word-wrap: break-word;
          word-break: break-word;
          max-width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .data {
          font-size: var(--font-label-s);
          padding-right: 0.5rem;
          box-sizing: border-box;
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
    width: 100%;
    margin-top: 100px;
    img {
      width: 100%;
    }
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 1.5rem;
  ${mobileMore`
    flex-direction: row;
    flex-wrap: wrap;
  `}
  ${tabletMore`
    flex-direction: row;
    padding: 0;
    margin-bottom: 0rem;
    flex-wrap: nowrap;
    `}
  .profile {
    display: flex;
    margin-top: 1.5rem;
    ${mobileMore`
      gap: 2rem;
    `}
    ${tabletMore`
      gap: 5rem;
      margin-top: 0;
    `}
    .profileImg {
      border-radius: 50%;
      object-fit: cover;
      width: 80px;
      height: 80px;
      ${mobileMore`
        width: 100px;
        height: 100px;
      `}
      ${tabletMore`
        width: 150px;
        height: 150px;
      `};
    }
    .profileInfo {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      ${mobileMore`
        gap: 1.5rem;
      `}
      ${tabletMore`
        gap: 4.0rem;
        margin-left: 0rem;
      `}
      .user {
        display: flex;
        gap: 1rem;
        ${mobileMore`
         gap: 1.5rem;
        `}
        ${tabletMore`
        gap: 3.0rem;
        `}
        h2 {
          font-size: var(--font-content-l-mobile);
          ${mobileMore`
            font-size: var(--font-content-xl);
          `}
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
            width: 20px;
            height: 20px;
            filter: invert(98%) sepia(1%) saturate(76%) hue-rotate(309deg) brightness(116%) contrast(100%);
            ${mobileMore`
              width: 25px;
              height: 25px;
            `}
            ${tabletMore`
              width: 30px;
              height: 30px;
            `}
          }
        }
        button {
          width: 80px;
          height: 20px;
          font-size: var(--font-label-xs);
          border-radius: 0.5rem;
          ${mobileMore`
            font-size: var(--font-content-s);
            width: 100px;
            height: 25px;
          `}
          ${tabletMore`
            width: 130px;
            height:35px;
            font-size: var(--font-content-m);
            border-radius: 1rem;
          `}
        }
      }
      .membership {
        cursor: pointer;
        width: 130px;
        margin-top: 10px;
        &:hover {
          background: var(--gray-70);
        }
        ${mobileMore`
            width: 215px;
          `}
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
    ${mobileMore`
      gap: 4rem;
      margin-left: 0px;
      `}
    ${tabletMore`
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
  box-sizing: border-box;
  ${mobileMore`
    padding: 3rem;
  `}
  ${tabletMore`
    padding: 6rem 0;
  `}
  ul {
    display: flex;
    gap: 3rem;
    font-size: var(--font-label-s);
    color: var(--gray-40);
    ${mobileMore`
          gap: 5rem;
      font-size:var(--font-content-l);
    `}
    ${tabletMore`
      gap: 6.2rem;
      font-size: var(--font-content-xl); 
    `}
    li {
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      @media (hover: hover) and (pointer: fine) {
        a:hover {
          color: white;
          background: black;
        }
      }
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
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--hover-color);
          ul {
            display: flex;
          }
        }
      }
    }
    .on {
      color: var(--primary-50);
    }
  }
`;
