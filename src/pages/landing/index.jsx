import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSection from './components/card/CardSection';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import { LandingWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackgroundColor } from '../../store/modules/gsapSlice';
import { MainPageData } from '../../store/modules/getThunk';
// import MarqueeSection from '../home/components/MarqueeSection';
import Marquees from './components/marquee/Marquees';
import CustomCursor from './components/CustomCursor';
import TextSection from './components/TextSection';
import ReviewSection from './components/review/ReviewSection';

const LandingPage = () => {
  const dispatch = useDispatch();
  const lenisRef = useRef();
  const rafRef = useRef(null);
  const backgroundColor = useSelector(selectBackgroundColor);

  useEffect(() => {
    dispatch(MainPageData());
  }, []);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      normalizeWheel: true,
      smoothWheel: true,
    });
    function raf(time) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    lenisRef.current.on('scroll', ScrollTrigger.update);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);
  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      ScrollTrigger.update();
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  };
  return (
    <p>
      {/* <CustomCursor /> */}
      <LandingWrap
        style={{
          backgroundColor: backgroundColor,
          transition: 'background-color 0.3s ease',
        }}
      >
        <Hero />
        <Marquees />
        <TextSection />
        <ReviewSection />
        <CardSection />
        <ScrollSection scrollToTop={scrollToTop} />
      </LandingWrap>
    </p>
  );
};

export default LandingPage;
