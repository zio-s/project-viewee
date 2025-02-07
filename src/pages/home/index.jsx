import React from 'react';
import { VisualWrap, SectionWrapper, NewCardsSectionTitle } from './style';
import SwiperSection from './components/SwiperSection';
import ContentSwiper from './components/ContentSwiper';
import MarqueeSection from './components/MarqueeSection';
import MarqueeSection2 from './components/MarqueeSection2';
import TopRated from './components/TopRated';
import Input from '../../ui/input/index';

const Home = () => {
  return (
    <>
      <SwiperSection />

      <VisualWrap>
        <SectionWrapper>
          <TopRated />
        </SectionWrapper>
        <SectionWrapper>
          <ContentSwiper />
        </SectionWrapper>
      </VisualWrap>
      <VisualWrap>
        <NewCardsSectionTitle>지구에서 나만 안본 그 작품</NewCardsSectionTitle>
        <Input variant="gray" size="medium" />
      </VisualWrap>
      <MarqueeSection />
      <MarqueeSection2 />
    </>
  );
};

export default Home;
