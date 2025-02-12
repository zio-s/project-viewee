import React from 'react';
import { HeroSectionWrapper } from '../style';
import { StyledButton } from '../../../common/button/style';
import InfoSection from './InfoSection';
import ReviewSection from './ReviewSection';

const HeroSection = ({ changeContent }) => {
  return (
    <HeroSectionWrapper>
      <h1>모가디슈</h1>
      <StyledButton $variant="primary" $size="large">재생하기</StyledButton>
      <div className="actions">
        <button img="./public/icons/util/heart/off.svg">관심</button>
        <button img="./public/icons/util/share.svg">공유</button>
        <button img="./public/icons/util/review.svg" onClick={() => changeContent(<ReviewSection />)}>리뷰</button>
      </div>
      <div className="description" onClick={() => changeContent('detail', <InfoSection />)}>
      대전으로 고립된... 줄거리 클릭 시 상세정보로 이동
      </div>

    </HeroSectionWrapper>
  );
};

export default HeroSection;
