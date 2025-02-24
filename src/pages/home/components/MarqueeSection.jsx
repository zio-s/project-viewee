import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeItem, MarqueeWrapper } from '../style';
import { Link } from 'react-router';

const MarqueePoster = [
  { id: 1, src: '/images/MarqueePoster1.png', num: '/tv/273234' },
  { id: 2, src: '/images/MarqueePoster2.png', num: '/movie/508883' },
  { id: 3, src: '/images/MarqueePoster3.png', num: '/tv/129236' },
  { id: 4, src: '/images/MarqueePoster4.png', num: '/tv/214999' },
  { id: 5, src: '/images/MarqueePoster5.png', num: '/tv/76662' },
  { id: 6, src: '/images/MarqueePoster6.png', num: '/movie/124157' },
  { id: 7, src: '/images/MarqueePoster7.png', num: '/movie/12429' },
  { id: 8, src: '/images/MarqueePoster8.png', num: '/tv/94796' },
  { id: 9, src: '/images/MarqueePoster9.png', num: '/movie/919207' },
  { id: 10, src: '/images/MarqueePoster10.png', num: '/tv/2414544' },
];

const MarqueeSection = () => {
  return (
    <Marquee direction="left" speed={30} gradient={false} loop={0}>
      <MarqueeWrapper>
        {MarqueePoster.map((poster) => (
          <MarqueeItem key={poster.id}>
            <Link to={`${poster.num}`}>
              <img src={poster.src} alt={`Movie Poster ${poster.id}`} />
            </Link>
          </MarqueeItem>
        ))}
      </MarqueeWrapper>
    </Marquee>
  );
};
export default MarqueeSection;
