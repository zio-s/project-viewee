import styled from 'styled-components';

export const CardContainer = styled.div`
  .moreIcon {
    width: 15px;
    height: 15px;
  }
  .inner {
    padding: 46px 32px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1c1c1e;
`;

export const Card = styled.div`
  position: relative;
  width: 320px;
  max-width: 320px;
  height: 400px;
  background: #e5e7eb;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  .bannerLogo1 {
    z-index: 20;
    position: absolute;
    right: -30px;
    top: 17px;
    width: 213px;
    height: 88px;
  }
  .bannerItem1 {
    position: absolute;
    top: -49px;
    left: 2px;
    width: 315px;
    height: 260px;
    z-index: 10;
  }
  .textArea {
    .bannerIcon1 {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    margin-top: 165px;
  }
  .bannerLogo2 {
    z-index: 20;
    position: absolute;
    right: 21px;
    top: 24px;
    width: 137px;
    height: 54px;
  }
  .bannerItem2 {
    position: absolute;
    top: 20px;
    left: 15px;
    width: 297px;
    height: 169px;
    z-index: 10;
  }
  .textArea {
    .bannerIcon2 {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    margin-top: 165px;
  }
  .bannerLogo3 {
    z-index: 20;
    position: absolute;
    right: 4px;
    top: 0px;
    width: 174px;
    height: 98px;
  }
  .bannerItem3 {
    position: absolute;
    top: -32px;
    left: 44px;
    width: 284px;
    height: 262px;
    z-index: 10;
  }
  .textArea {
    .bannerIcon3 {
      width: 32px;
      height: 42px;
      margin-bottom: 5px;
    }
    margin-top: 165px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  top: -116px;
  right: 0px;
  color: white;
  border-radius: 20px;
  padding: 0rem;
  width: 205px;
  height: 469px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: polygon(0% 0%, 100% 0%, 100% 97%, 0% 35%);
  transition: height 0.5s ease-in-out, top 0.5s ease-in-out;
  &:hover,
  &:hover::after {
    height: 650px; /* 세로 크기 조정 */
    top: -297px; /* 위로 확장되도록 설정 */
  }

  &:after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: transparent;
  }

  &:hover .activeText {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s; 
`;

export const ActiveText = styled.div`
  font-size: var(--font-content-xxl-mobile);
  position: absolute;
  width: 160px;
  top: 136px;
  left: 25px;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  .goToPlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Text = styled.p`
  color: var(--gray-70);
  font-size: var(--font-content-xxl-mobile);
  margin-top: 2px
  text-align: left;
`;

export const BoldText = styled.p`
  font-size: var(--font-content-xl);
  font-weight: var(--font-weight-medium);
  color: #000000;
  text-align: left;
  margin-top: 30px;
  line-height: 28.8px;
`;
