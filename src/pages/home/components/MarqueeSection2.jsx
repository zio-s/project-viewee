import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeItem, MarqueeWrapper, MarqueeWrapper2, NewCardsSectionTitle } from '../style';

const MarqueeSection = () => {
  return (
    <>
      <Marquee direction="left" speed={60} gradient={false} loop={0}>
        <MarqueeWrapper2>
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
          <MarqueeItem>moive6</MarqueeItem>
          <MarqueeItem>moive6</MarqueeItem>
        </MarqueeWrapper2>
      </Marquee>
    </>
  );
};

export default MarqueeSection;
