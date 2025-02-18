'use client';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, GridItem, GridWrap, Section } from './style';
import { useNavigate } from 'react-router';
import {
  setActiveSection,
  setSectionComplete,
  setSectionProgress,
  setSectionInView,
  setSectionPlaying,
  selectSection,
} from '../../../store/modules/gsapSlice';
import Button from '../../../ui/button/defaultButton';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const sectionState = useSelector(selectSection('scroll'));

  const onGo = () => {
    navigate('/');
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const gridWrap = section.querySelector('div');
    const gridItems = section.querySelectorAll('[data-grid-item]');
    const title = section.querySelector('h2');
    const button = section.querySelector('button');

    gsap.set(button, {
      opacity: 1,
      y: 30,
    });

    gridItems.forEach((item, index) => {
      let x, y;

      if (index < 8) {
        x = gsap.utils.random(-40, 40);
        y = gsap.utils.random(-30, -10);
      } else if (index < 16) {
        x = gsap.utils.random(-45, 45);
        y = gsap.utils.random(-10, 10);
      } else {
        x = gsap.utils.random(-40, 40);
        y = gsap.utils.random(10, 30);
      }

      if (index % 3 === 0) x -= 30;
      if (index % 3 === 1) x += 30;

      gsap.set(item, {
        xPercent: x,
        yPercent: y,
        z: gsap.utils.random(-2000, -1500),
        rotateX: gsap.utils.random(-25, 25),
        scale: gsap.utils.random(0.8, 1),
        filter: 'brightness(55.7062%)',
      });
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: '+=150%',
        scrub: 2,
        anticipatePin: 1,
        onUpdate: (self) => {
          dispatch(
            setSectionProgress({
              section: 'scroll',
              progress: self.progress,
            })
          );
        },
        onEnter: () => {
          dispatch(setSectionInView({ section: 'scroll', inView: true }));
          dispatch(setActiveSection('scroll'));
          dispatch(setSectionPlaying({ section: 'scroll', isPlaying: true }));
        },
        onLeave: () => {
          dispatch(setSectionInView({ section: 'scroll', inView: false }));
          dispatch(setSectionPlaying({ section: 'scroll', isPlaying: false }));
        },
        onEnterBack: () => {
          dispatch(setSectionInView({ section: 'scroll', inView: true }));
          dispatch(setActiveSection('scroll'));
          dispatch(setSectionPlaying({ section: 'scroll', isPlaying: true }));
        },
        onLeaveBack: () => {
          dispatch(setSectionInView({ section: 'scroll', inView: false }));
          dispatch(setSectionPlaying({ section: 'scroll', isPlaying: false }));
        },
        onComplete: () => {
          dispatch(setSectionComplete({ section: 'scroll', isComplete: true }));
          dispatch(setSectionPlaying({ section: 'scroll', isPlaying: false }));
        },
      },
    });

    timeline
      .to(title, {
        opacity: 0,
        y: -50,
        duration: 5,
      })
      .to(
        gridItems,
        {
          duration: 4,
          xPercent: 20,
          yPercent: 50,
          z: 2000,
          rotateX: -2.5,
          scale: 1,
          filter: 'brightness(100%)',
          stagger: {
            each: 0.05,
            from: 'random',
          },
          ease: 'expo.out',
        },
        0
      )
      .to(
        gridWrap,
        {
          z: 2000,
          rotateX: -5,
          yPercent: -55,
          duration: 6,
          ease: 'expo.out',
        },
        0
      );

    timelineRef.current = timeline;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      dispatch(setSectionPlaying({ section: 'scroll', isPlaying: false }));
      dispatch(setSectionComplete({ section: 'scroll', isComplete: false }));
      dispatch(setSectionInView({ section: 'scroll', inView: false }));
    };
  }, [dispatch]);

  return (
    <Container ref={containerRef}>
      <div className="section-inner">
        <Section ref={sectionRef}>
          <h2>새로올라온 작품을 보다 빠르게</h2>
          <button onClick={onGo}>지금 보러가기</button>
          <GridWrap>
            {Array.from({ length: 24 }).map((_, i) => (
              <GridItem key={i} data-grid-item>
                <img src={`/images/mainPoster1.png`} alt={`Grid item ${i + 1}`} />
              </GridItem>
            ))}
          </GridWrap>
        </Section>
      </div>
    </Container>
  );
};

export default ScrollSection;
