import styled from 'styled-components';

export const EditionbackWrapper = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  .textAreaTitle {
    z-index: 10;
    position: absolute;
    top: 525px;
    left: 0;
    font-size: 96px;
    font-weight: bold;
  }
  .textArea {
    margin-left: 155px;
    margin-top: 20px;
    z-index: 10;
    position: absolute;
    top: 625px;
    left: 0;
    font-size: 64px;
  }
  .backgroundLine {
    top: 141px;
    right: -140px;
    position: absolute;
    background-image: url('/images/backgroundLine.png');
    background-size: cover;
    width: 1920px;
    height: 1080px;
  }
  .backgroundActor {
    position: absolute;
    top: 483px;
    right: 530px;
    background-image: url('/images/actor.png');
    background-size: cover;
    width: 652px;
    height: 877px;
  }
  .backgroundActor2 {
    position: absolute;
    top: 483px;
    right: 530px;
    background-image: url('/images/actor2.png');
    background-size: cover;
    width: 652px;
    height: 877px;
  }

  .backgroundParticle {
    z-index: 1000;
    top: 467px;
    right: 327px;
    position: absolute;
    background-image: url(/images/backgroundParticle.png);
    background-size: cover;
    width: 989px;
    height: 739px;
  }
  .backgroundParticle {
    z-index: 1000;
    top: 467px;
    right: 327px;
    position: absolute;
    background-image: url(/images/backgroundParticle.png);
    background-size: cover;
    width: 989px;
    height: 739px;
  }
  .backgroundFigure1 {
    position: absolute;
    top: 538px;
    left: -719px;
    width: 874px;
    height: 711px;
    background-image: url(/images/bgFigure1.png);
    background-size: cover;
    rotate: 160deg;
  }
  .backgroundFigure2 {
    position: absolute;
    bottom: -1144px;
    right: 133px;
    width: 1051px;
    height: 602px;
    background-image: url(/images/bgFigure2.png);
    background-size: cover;
    rotate: 0deg;
  }
`;

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
    top: 38px;
    width: 213px;
    height: 88px;
  }
  .banner2Logo1 {
    z-index: 20;
    position: absolute;
    right: -13px;
    top: 51px;
    width: 230px;
    height: 64px;
  }
  .bannerItem1 {
    position: absolute;
    top: -49px;
    left: 2px;
    width: 315px;
    height: 260px;
    z-index: 10;
  }
  .banner2Item1 {
    position: absolute;
    top: -3px;
    left: 93px;
    z-index: 10;
  }
  .textArea {
    .bannerIcon1 {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    .banner2Icon1 {
      margin-bottom: 7px;
    }
    margin-top: 165px;
  }
  .bannerLogo2 {
    z-index: 20;
    position: absolute;
    right: 21px;
    top: 50px;
    width: 137px;
    height: 54px;
  }
  .banner2Logo2 {
    z-index: 20;
    position: absolute;
    right: 27px;
    top: 55px;
    width: 150px;
    height: 60px;
  }
  .bannerItem2 {
    position: absolute;
    top: 20px;
    left: 15px;
    width: 297px;
    height: 169px;
    z-index: 10;
  }
  .banner2Item2 {
    position: absolute;
    width: 220px;
    height: 220px;
    top: -13px;
    left: 41px;
    z-index: 10;
  }
  .textArea {
    .bannerIcon2 {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    .banner2Icon2 {
      margin-bottom: 7px;
    }
    margin-top: 165px;
  }
  .bannerLogo3 {
    z-index: 20;
    position: absolute;
    right: 4px;
    top: 25px;
    width: 174px;
    height: 98px;
  }
  .banner2Logo3 {
    z-index: 20;
    position: absolute;
    right: 27px;
    top: 44px;
  }
  .bannerItem3 {
    position: absolute;
    top: -32px;
    left: 44px;
    width: 284px;
    height: 262px;
    z-index: 10;
  }
  .banner2Item3 {
    position: absolute;
    top: 8px;
    left: 64px;
    z-index: 10;
  }
  .textArea {
    .bannerIcon3 {
      width: 32px;
      height: 42px;
      margin-bottom: 5px;
    }
    .banner2Icon3 {
      margin-bottom: 7px;
    }
    margin-top: 165px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  top: -132px;
  right: 0px;
  color: white;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: height 0.5s ease-in-out, top 0.5s ease-in-out;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  width:205px;
  height:448px;
  &:hover,
  &:hover::after {
    height: 630px; 
    top: -277px; 
  }

  &:after {
    z-index:-1;
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
  top: 160px;
  left: 25px;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  .pointLine {
    position: absolute;
    top: -11px;
    left: -8px;
    width: 170px;
    height: 46px;
    background-image: url(/images/pointLine.png);
    background-size: cover;
  }
  .pointLinePink {
    position: absolute;
    top: -11px;
    left: -8px;
    width: 170px;
    height: 46px;
    background-image: url(/images/pointLine.png);
    background-size: cover;
  }
  .pointLineBlue {
    position: absolute;
    top: -11px;
    left: -8px;
    width: 170px;
    height: 46px;
    background-image: url(/images/pointLinePink.png);
    background-size: cover;
  }
  .goToPlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
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
