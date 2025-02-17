import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const container = containerRef.current;

    const finalPositions = [
      { x: 0, y: -200 },
      { x: 190, y: -62 },
      { x: 117, y: 162 },
      { x: -117, y: 162 },
      { x: -190, y: -62 },
    ];
    gsap.set(cards, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: 0.95,
      opacity: 0,
      transformOrigin: '50% 50%',
    });

    // 메인 타임라인
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        pin: true,
      },
    });

    // 초기 쌓임 효과
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: -20 * index,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        index * 0.1
      );
    });

    // 퍼지는 효과
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          x: finalPositions[index].x,
          y: finalPositions[index].y,
          rotation: gsap.utils.random(-3, 3),
          duration: 1,
          ease: 'power2.inOut',
        },
        '>-0.3'
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <CardsWrapper>
        {[...Array(5)].map((_, index) => (
          <Card key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <CardInner>
              <CardFront>
                <CardTitle>Card {index + 1}</CardTitle>
                <CardContent>{getCardContent(index)}</CardContent>
              </CardFront>
              <CardBack>
                <CardContent>상세 내용 {index + 1}</CardContent>
              </CardBack>
            </CardInner>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

const getCardContent = (index) => {
  const contents = [
    'Losing customers before they fully engage?',
    'Want to start strong with excellence?',
    'Are your big ideas not reaching full potential?',
    'Facing challenges in scaling?',
    'Struggling to make your brand stand out?',
  ];
  return contents[index];
};

const Container = styled.div`
  height: 300vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  position: absolute;
  width: 183px;
  height: 148px;
  perspective: 1000px;
  left: 50%;
  top: 50%;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardFront = styled(CardSide)`
  background-color: #5cf;
  color: white;
`;

const CardBack = styled(CardSide)`
  background-color: #3a9;
  color: white;
  transform: rotateY(180deg);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

export default CardSection;
