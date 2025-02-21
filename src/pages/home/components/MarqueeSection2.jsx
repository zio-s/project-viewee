import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeItem, MarqueeWrapper2 } from '../style';

const Marquee2Poster = [
  { id: 1, src: '/images/Marquee2Poster1.png' },
  { id: 2, src: '/images/Marquee2Poster2.png' },
  { id: 3, src: '/images/Marquee2Poster3.png' },
  { id: 4, src: '/images/Marquee2Poster4.png' },
  { id: 5, src: '/images/Marquee2Poster5.png' },
  { id: 6, src: '/images/Marquee2Poster6.png' },
  { id: 7, src: '/images/Marquee2Poster7.png' },
  { id: 8, src: '/images/Marquee2Poster8.png' },
  { id: 9, src: '/images/Marquee2Poster9.png' },
  { id: 10, src: '/images/Marquee2Poster10.png' },
];

const MarqueeSection2 = () => {
  return (
    <Marquee direction="right" speed={30} gradient={false} loop={0}>
      <MarqueeWrapper2 style={{ display: 'flex', gap: '20px' }}>
        {Marquee2Poster.map((poster) => (
          <MarqueeItem key={poster.id}>
            <img
              src={poster.src}
              alt={`Movie Poster ${poster.id}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </MarqueeItem>
        ))}
      </MarqueeWrapper2>
    </Marquee>
  );
};

export default MarqueeSection2;
