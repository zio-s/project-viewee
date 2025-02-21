'use client';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Card,
  CardBack,
  CardContent,
  CardFront,
  CardHeader,
  CardInner,
  CardsWrapper,
  CardText,
  CardTitle,
  Container,
  Star,
  Stars,
  UserInfo,
} from './style';
import {
  selectViewport,
  selectSection,
  setSectionProgress,
  setSectionPlaying,
  setSectionInView,
  setSectionComplete,
  setActiveSection,
  updateViewport,
  setBackgroundColor,
} from '../../../../store/modules/gsapSlice';

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {
  const dispatch = useDispatch();
  const { width: windowWidth } = useSelector(selectViewport);
  const sectionState = useSelector(selectSection('card'));
  const [flippedCards, setFlippedCards] = useState(new Array(5).fill(false));
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const handleCardFlip = (index) => {
    const card = cardsRef.current[index];
    const inner = card.querySelector('.card-inner');

    gsap.to(inner, {
      rotateY: flippedCards[index] ? 0 : 180,
      duration: 0.8,
      ease: 'power2.inOut',
    });

    setFlippedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const initAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    const cards = cardsRef.current;
    const container = containerRef.current;
    const finalPositions = calculatePositions(window.innerWidth);

    gsap.set(cards, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: window.innerHeight,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: '+=1000',
        scrub: 2,
        // pin: true,
        // pinSpacing: true,
        anticipatePin: 1,
        id: 'cardSection',
        onUpdate: (self) => {
          dispatch(
            setSectionProgress({
              section: 'card',
              progress: self.progress,
            })
          );
        },
        onEnter: () => {
          dispatch(setSectionInView({ section: 'card', inView: true }));
          dispatch(setActiveSection('card'));
          dispatch(setSectionPlaying({ section: 'card', isPlaying: true }));
          dispatch(setBackgroundColor('white'));
        },
        onLeave: () => {
          dispatch(setSectionInView({ section: 'card', inView: false }));
          dispatch(setSectionPlaying({ section: 'card', isPlaying: false }));
          dispatch(setBackgroundColor('transparent'));
        },
        onEnterBack: () => {
          dispatch(setSectionInView({ section: 'card', inView: true }));
          dispatch(setActiveSection('card'));
          dispatch(setSectionPlaying({ section: 'card', isPlaying: true }));
          dispatch(setBackgroundColor('white'));
        },
        onLeaveBack: () => {
          dispatch(setSectionInView({ section: 'card', inView: false }));
          dispatch(setSectionPlaying({ section: 'card', isPlaying: false }));
          dispatch(setBackgroundColor('transparent'));
        },
        onComplete: () => {
          dispatch(setSectionComplete({ section: 'card', isComplete: true }));
        },
      },
    });

    //쌓임
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          y: 40 * index,
          opacity: 1,
          duration: 4,
          ease: 'expoScale(0.5,7,none)',
          immediateRender: true,
        },
        index * 14
      );
    });

    tl.to({}, { duration: 20 });

    //퍼짐
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          x: finalPositions[index].x,
          y: finalPositions[index].y,
          duration: 10,
          ease: 'power2.inOut',
          immediateRender: false,
        },
        '>-1'
      );
    });
    tl.to({}, { duration: 30 });

    tl.to(
      '.card-inner',
      {
        rotateY: 180,
        duration: 8,
        ease: 'power2.inOut',
      },
      '>'
    );
    tl.to({}, { duration: 30 });

    tl.to(
      '.card-inner',
      {
        rotateY: 0,
        duration: 8,
        ease: 'power2.inOut',
      },
      '>'
    );
    tl.to({}, { duration: 30 });

    cards.forEach((card) => {
      tl.to(
        card,
        {
          opacity: 0,
          scale: 0.8,
          duration: 20,
          ease: 'power2.in',
        },
        '>-2'
      );
    });
    timelineRef.current = tl;
    scrollTriggerRef.current = tl.scrollTrigger;
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        updateViewport({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };
    handleResize();
    initAnimation();

    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
        initAnimation();
      }, 250);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      dispatch(setSectionPlaying({ section: 'card', isPlaying: false }));
      dispatch(setSectionComplete({ section: 'card', isComplete: false }));
      dispatch(setSectionInView({ section: 'card', inView: false }));
    };
  }, [dispatch]);

  useEffect(() => {
    initAnimation();
  }, [windowWidth]);

  const calculatePositions = (width) => {
    // 화면 크기별 기본 거리 설정
    const baseDistance =
      width < 768
        ? 140 // 모바일
        : width < 1024
        ? 300 // 태블릿
        : width < 1440
        ? 420 // 작은 데스크톱
        : 500; // 큰 데스크톱

    // 화면 크기별 수직 오프셋 설정
    const verticalOffset =
      width < 768
        ? 80 // 모바일
        : width < 1024
        ? 160 // 태블릿
        : 200; // 데스크톱

    // 모바일 레이아웃
    if (width < 768) {
      return [
        { x: 0, y: 220 }, // 중앙 상단
        { x: baseDistance * 0.85, y: -200 }, // 우측 상단
        { x: -baseDistance * 0.85, y: -200 }, // 좌측 상단
        { x: baseDistance * 0.85, y: 10 }, // 우측 하단
        { x: -baseDistance * 0.85, y: 10 }, // 좌측 하단
      ];
    }
    if (width < 640) {
      return [
        { x: 0, y: 220 }, // 중앙 상단
        { x: baseDistance * 1.4, y: -120 }, // 우측 상단
        { x: -baseDistance * 1.4, y: -120 }, // 좌측 상단
        { x: baseDistance * 1.4, y: 10 }, // 우측 하단
        { x: -baseDistance * 1.4, y: 10 }, // 좌측 하단
      ];
    }

    // 태블릿 레이아웃
    if (width < 1024) {
      return [
        { x: 0, y: 250 },
        { x: baseDistance / 1.5, y: -210 },
        { x: baseDistance / 1.5, y: 20 },
        { x: -baseDistance / 1.5, y: -210 },
        { x: -baseDistance / 1.5, y: 20 },
      ];
    }

    // 데스크톱 레이아웃
    return [
      { x: 0, y: verticalOffset },
      { x: baseDistance / 1.2, y: -220 },
      { x: baseDistance / 1.2, y: 60 },
      { x: -baseDistance / 1.2, y: -220 },
      { x: -baseDistance / 1.2, y: 60 },
    ];
  };

  return (
    <Container ref={containerRef}>
      <CardsWrapper>
        {[...Array(5)].map((_, index) => (
          <Card
            key={index}
            className="cards"
            ref={(el) => (cardsRef.current[index] = el)}
            $isMobile={windowWidth < 768}
          >
            <CardInner
              className="card-inner"
              $isFlipped={flippedCards[index]}
              onClick={() => handleCardFlip(index)}
              // onMouseLeave={() => handleCardFlip(index)}
            >
              <CardFront $bgColor={getCardColor(index)}>
                <CardHeader>
                  <Stars>
                    <Star>★</Star>
                    <Star>★</Star>
                    <Star>★</Star>
                    <Star>★</Star>
                    <Star>★</Star>
                  </Stars>
                </CardHeader>
                <div>
                  <UserInfo>
                    <span>{getTitleContent(index)}</span>
                    <span>
                      {year}년 {month}월 {day}일
                    </span>
                  </UserInfo>
                </div>
                <CardContent>
                  <CardText>{getCardContent()}</CardText>
                </CardContent>
              </CardFront>
              <CardBack $bgColor={getCardColor(5)}>
                <CardContent>
                  <CardTitle className="back-i">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M31.875 5H8.125C6.96569 5.0033 5.85481 5.46529 5.03505 6.28505C4.21529 7.10481 3.7533 8.21569 3.75 9.375V24.375C3.7533 25.5343 4.21529 26.6452 5.03505 27.4649C5.85481 28.2847 6.96569 28.7467 8.125 28.75H11.25V35L18.5719 28.8953C18.6843 28.8014 18.8262 28.75 18.9727 28.75H31.875C33.0343 28.7467 34.1452 28.2847 34.9649 27.4649C35.7847 26.6452 36.2467 25.5343 36.25 24.375V9.375C36.2467 8.21569 35.7847 7.10481 34.9649 6.28505C34.1452 5.46529 33.0343 5.0033 31.875 5V5Z"
                        stroke="#DDDDDD"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 19.375C13.8807 19.375 15 18.2557 15 16.875C15 15.4943 13.8807 14.375 12.5 14.375C11.1193 14.375 10 15.4943 10 16.875C10 18.2557 11.1193 19.375 12.5 19.375Z"
                        fill="#DDDDDD"
                      />
                      <path
                        d="M20 19.375C21.3807 19.375 22.5 18.2557 22.5 16.875C22.5 15.4943 21.3807 14.375 20 14.375C18.6193 14.375 17.5 15.4943 17.5 16.875C17.5 18.2557 18.6193 19.375 20 19.375Z"
                        fill="#DDDDDD"
                      />
                      <path
                        d="M27.5 19.375C28.8807 19.375 30 18.2557 30 16.875C30 15.4943 28.8807 14.375 27.5 14.375C26.1193 14.375 25 15.4943 25 16.875C25 18.2557 26.1193 19.375 27.5 19.375Z"
                        fill="#DDDDDD"
                      />
                    </svg>
                  </CardTitle>
                  <CardText className="back-p">
                    작품을 넘어서,
                    <br />
                    대화로 이어지는 즐거움
                  </CardText>
                </CardContent>
              </CardBack>
            </CardInner>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

const getCardColor = (index) => {
  const colors = ['#FFB08F', '#87CEEB', '#98FB98', '#DDA0DD', '#FFA07A', '#F05A7E'];
  return colors[index];
};

const getTitleContent = (index) => {
  const titles = ['user1', 'user2', 'user3', 'user4', 'user5'];
  return titles[index];
};

const getCardContent = () => {
  return '첫 방문에 이렇게 재밌게 됐습니다. 추천하는 명소! 자유하게 보고싶어 볼 것 같아요 최근 본 영화중에 재일 재밌어요~';
};

export default CardSection;
