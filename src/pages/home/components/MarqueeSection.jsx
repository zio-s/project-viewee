import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeItem, MarqueeWrapper } from '../style';

const MarqueeSection = () => {
  return (
    <>
      <Marquee direction="left" speed={50} gradient={false} loop={0}>
        <MarqueeWrapper>
          <MarqueeItem>moive1</MarqueeItem>
          <MarqueeItem>moive2</MarqueeItem>
          <MarqueeItem>moive3</MarqueeItem>
          <MarqueeItem>moive4</MarqueeItem>
          <MarqueeItem>moive5</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
        </MarqueeWrapper>
      </Marquee>
    </>
  );
};

export default MarqueeSection;
