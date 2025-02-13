import React from 'react';
import { VisualWrap, SectionWrapper, NewCardsSectionTitle } from './style';
import SwiperSection from './components/SwiperSection';
import ContentSwiper from './components/ContentSwiper';
import MarqueeSection from './components/MarqueeSection';
import MarqueeSection2 from './components/MarqueeSection2';
import TopRated from './components/TopRated';
import Tag from '../../ui/tag/index';
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
      <VisualWrap></VisualWrap>
      <MarqueeSection />
      <MarqueeSection2 />
      {/* <Tag /> */}
    </>
  );
};

export default Home;
