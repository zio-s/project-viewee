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
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = ({ scrollToTop }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const sectionState = useSelector(selectSection('scroll'));

  const onGo = () => {
    scrollToTop();
    navigate('/');
  };

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section) return;

    const gridWrap = section.querySelector('div');
    const gridItems = section.querySelectorAll('[data-grid-item]');
    const title = container.querySelector('h2');
    const button = container.querySelector('button');

    section.style.setProperty('--grid-width', '105%');
    section.style.setProperty('--grid-columns', '8');
    section.style.setProperty('--perspective', '1500px');
    section.style.setProperty('--grid-inner-scale', '0.8');
    gridItems.forEach((item) => {
      gsap.set(item, {
        transformOrigin: '50% 0%',
      });
    });

    gsap.set(title, {
      position: 'fixed',
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      zIndex: 10,
      opacity: 0,
      y: 30,
    });

    gsap.set(button, {
      position: 'fixed',
      display: 'none',
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      zIndex: 10,
      opacity: 0,
      y: 30,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom top-=10%',
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
      },
    });

    timeline
      .to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      })
      .to(title, {
        opacity: 1,
        duration: 1,
      })
      .to(title, {
        opacity: 0,
        y: 200,
        duration: 2,
      })
      .to(
        gridItems,
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          // filter: 'brightness(150%)',
          stagger: {
            amount: 1,
            from: 'random',
          },
          duration: 4,
          ease: 'power2.out',
        },
        0
      )
      .fromTo(
        gridWrap,
        {
          z: 500,
          rotationX: -15,
          scale: 0.8,
          delay: 2,
        },
        {
          z: 2000,
          rotationX: -35,
          scale: 0.9,
          duration: 4,
          ease: 'power2.inOut',
        },
        0
      )
      .to(
        button,
        {
          display: 'block',
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '>-1'
      );

    timelineRef.current = timeline;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
      dispatch(setSectionPlaying({ section: 'scroll', isPlaying: false }));
      dispatch(setSectionComplete({ section: 'scroll', isComplete: false }));
      dispatch(setSectionInView({ section: 'scroll', inView: false }));
    };
  }, [dispatch]);

  return (
    <Container ref={containerRef}>
      <h2>새로올라온 작품을 보다 빠르게</h2>
      <div className="section-inner">
        <Section ref={sectionRef}>
          <GridWrap>
            {Array.from({ length: 24 }).map((_, i) => (
              <GridItem key={i} data-grid-item>
                <img src={`/images/mainPoster1.png`} alt={`Grid item ${i + 1}`} />
              </GridItem>
            ))}
          </GridWrap>
        </Section>
      </div>
      <button onClick={() => onGo()}>지금 보러가기</button>
      <Link to={'/'}>gogogo</Link>
    </Container>
  );
};

export default ScrollSection;
