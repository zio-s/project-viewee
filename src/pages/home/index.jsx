import React from 'react';
import { VisualWrap, SectionWrapper } from './style';

import SwiperSection from './components/SwiperSection';
import ContentSwiper from './components/ContentSwiper';
const Index = () => {
  return (
    <>
      <SwiperSection />

      <VisualWrap>
        <SectionWrapper>
          <ContentSwiper />b
        </SectionWrapper>
      </VisualWrap>
    </>
  );
};

export default Index;
