import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSection from './components/card/CardSection';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import { LandingWrap } from './style';
import { useSelector } from 'react-redux';
import { selectBackgroundColor } from '../../store/modules/gsapSlice';

const LandingPage = () => {
  const lenisRef = useRef();
  const backgroundColor = useSelector(selectBackgroundColor);
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        gsap.ticker.remove(lenisRef.current.raf);
      }
    };
  }, []);

  return (
    <LandingWrap
      style={{
        backgroundColor: backgroundColor,
        transition: 'background-color 0.3s ease',
      }}
    >
      <CardSection />
      <ScrollSection />
      <Hero />
    </LandingWrap>
  );
};

export default LandingPage;
