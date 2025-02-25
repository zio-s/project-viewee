import { MarqueeContainer, MarqueeTitle } from './style';
import { useRef } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';

const images = [
  {
    url: 'public/images/roll-img1.jpg',
  },
  {
    url: 'public/images/roll-img2.jpg',
  },
  {
    url: 'public/images/roll-img3.jpg',
  },
  {
    url: 'public/images/roll-img4.jpg',
  },
  {
    url: 'public/images/roll-img5.jpg',
  },
  {
    url: 'public/images/roll-img6.jpg',
  },
  {
    url: 'public/images/roll-img7.jpg',
  },
];

const Marquees = () => {
  const topContainerRef = useRef(null);
  const bottomContainerRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const topList = topContainerRef.current;
    const bottomList = bottomContainerRef.current;
    const createDuplicates = (container) => {
      const items = container.querySelectorAll('.roll-item');
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });
    };

    createDuplicates(topList);
    createDuplicates(bottomList);
    gsap.to(topList, {
      x: -topList.offsetWidth / 2,
      repeat: -1,
      duration: 30,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return parseFloat(x) % (topList.offsetWidth / 2);
        }),
      },
    });

    gsap.fromTo(
      bottomList,
      {
        x: -bottomList.offsetWidth / 2,
      },
      {
        x: 0,
        repeat: -1,
        duration: 30,
        ease: 'none',
        modifiers: {
          x: gsap.utils.unitize((x) => {
            return -bottomList.offsetWidth / 2 + (parseFloat(x) % (bottomList.offsetWidth / 2));
          }),
        },
      }
    );
  }, []);

  return (
    <MarqueeContainer>
      <MarqueeTitle ref={textRef} data-cursor-color="primary" className="white-bg">
        <h2 data-cursor="hover">여러분을 콘텐츠의 세계로 초대합니다</h2>
        <p className="white-text"> 최신 스트리밍 기술과 똑똑한 추천 알고리즘을 통해 최고의 시청 경험을 제공합니다.</p>
      </MarqueeTitle>
      <ul ref={topContainerRef}>
        {images.map((image, index) => (
          <li key={index} className="roll-item">
            <img src={image.url} alt="" />
          </li>
        ))}
      </ul>
      <ul ref={bottomContainerRef}>
        {images.map((image, index) => (
          <li key={index} className="roll-item">
            <img src={image.url} alt="" />
          </li>
        ))}
      </ul>
    </MarqueeContainer>
  );
};

export default Marquees;
