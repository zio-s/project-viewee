import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeItem, MarqueeWrapper2 } from '../style';
import { Link } from 'react-router';

const Marquee2Poster = [
  { id: 1, src: '/images/Marquee2Poster1.png', num: '/movie/872585' },
  { id: 2, src: '/images/Marquee2Poster2.png', num: '/tv/81978' },
  { id: 3, src: '/images/Marquee2Poster3.png', num: '/tv/64010' },
  { id: 4, src: '/images/Marquee2Poster4.png', num: '/tv/153496' },
  { id: 5, src: '/images/Marquee2Poster5.png', num: '/tv/255086' },
  { id: 6, src: '/images/Marquee2Poster6.png', num: '/tv/203552' },
  { id: 7, src: '/images/Marquee2Poster7.png', num: '/movie/838209' },
  { id: 8, src: '/images/Marquee2Poster8.png', num: '/movie/705996' },
  { id: 9, src: '/images/Marquee2Poster9.png', num: '/tv/215720' },
  { id: 10, src: '/images/Marquee2Poster10.png', num: '/tv/214528' },
];

const MarqueeSection2 = () => {
  return (
    <Marquee direction="right" speed={30} gradient={false} loop={0}>
      <MarqueeWrapper2 style={{ display: 'flex', gap: '20px' }}>
        {Marquee2Poster.map((poster) => (
          <MarqueeItem key={poster.id}>
            <Link to={`${poster.num}`}>
              <img
                src={poster.src}
                alt={`Movie Poster ${poster.id}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
              />
            </Link>
          </MarqueeItem>
        ))}
      </MarqueeWrapper2>
    </Marquee>
  );
};

export default MarqueeSection2;
