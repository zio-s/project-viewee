import React from 'react';
import { VisualWrap, SectionWrapper } from './style';

import SwiperSection from './components/SwiperSection';
import ContentSwiper from './components/ContentSwiper';
import MarqueeSection from './components/MarqueeSection';
import MarqueeSection2 from './components/MarqueeSection2';
const Index = () => {
  return (
    <>
      <SwiperSection />

      <VisualWrap>
        <SectionWrapper>
          <ContentSwiper />
        </SectionWrapper>
        <SectionWrapper>
          <MarqueeSection />
          <MarqueeSection2 />
        </SectionWrapper>
      </VisualWrap>
    </>
  );
};

export default Index;
