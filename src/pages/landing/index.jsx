import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSection from './components/card/CardSection';
import ScrollSection from './components/ScrollSection';
import { LandingWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackgroundColor } from '../../store/modules/gsapSlice';
import { MainPageData } from '../../store/modules/getThunk';
import Marquees from './components/marquee/Marquees';
import TextSection from './components/TextSection';
import ReviewSection from './components/review/ReviewSection';

const LandingPage = ({ handleEnterSite }) => {
  const dispatch = useDispatch();
  const lenisRef = useRef();
  const rafRef = useRef(null);
  const backgroundColor = useSelector(selectBackgroundColor);
  const [isLenisReady, setIsLenisReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, []);

  useEffect(() => {
    dispatch(MainPageData());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      normalizeWheel: true,
      smoothWheel: true,
    });

    setIsLenisReady(true);

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
      setIsLenisReady(false);
    };
  }, []);

  const scrollToTop = () => {
    handleEnterSite();
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
        {/* {isLenisReady && <Intro lenisRef={lenisRef} />} */}
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
