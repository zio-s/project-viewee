import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

export const DeviceContainer = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  .deviceInner {
    max-width: 1200px;
    min-height: 300vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100vh;
  }

  .textContainer {
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    .highlight-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      display: block;
      position: absolute;
      will-change: transform, opacity;
      text-align: center;
    }

    ${mobileMore`
      height: 180px;
      margin-bottom: 45px;
      
      .highlight-text {
        font-size: 2rem;
      }
    `}

    ${tabletMore`
      height: 100px;
      margin-bottom: 60px;
      
      .highlight-text {
        font-size: 2.8rem;
      }
    `}
  }

  .deviceWrapper {
    position: relative;
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* 높이 고정값 제거하고 패딩으로 대체 */
    padding: 30px 0;

    ${mobileMore`
      padding: 50px 0;
    `}

    ${tabletMore`
      padding: 70px 0;
    `}
  }

  .desktop,
  .tablet,
  .mobile {
    position: absolute;
    will-change: transform, opacity;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }
  }

  .desktop {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    z-index: 1;
  }

  .tablet {
    left: 10%;
    bottom: 10%;
    width: 35%;
    z-index: 2;
  }

  .mobile {
    right: 10%;
    bottom: 10%;
    width: 22%;
    z-index: 3;
  }

  ${mobileMore`
    .desktop {
      top: 35%;
      width: 75%;
    }

    .tablet {
      width: 35%;
      left: 8%;
      bottom: 15%;
    }

    .mobile {
      width: 22%;
      right: 8%;
      bottom: 10%;
    }
  `}

  ${tabletMore`
    .desktop {
      top: 40%;
      width: 65%;
    }

    .tablet {
      left: 15%;
      bottom: 12%;
      width: 32%;
    }

    .mobile {
      right: 15%;
      bottom: 8%;
      width: 20%;
    }
  `}

  @media (min-width: 1400px) {
    .desktop {
      width: 60%;
    }

    .tablet {
      left: 10%;
      width: 30%;
      bottom: -10%;
    }

    .mobile {
      right: 18%;
      width: 18%;
    }
  }
`;
