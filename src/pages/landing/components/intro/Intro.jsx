import { useEffect, useRef } from 'react';
import { IntroContainer, IntroWrapper } from './style';
import gsap from 'gsap';

const Intro = ({ lenisRef }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container || !lenisRef?.current) return;

    lenisRef.current.stop();

    const handleVideoEnd = () => {
      gsap.to(container, {
        yPercent: -100,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          lenisRef.current.start();

          const nextSection = document.querySelector('.marquee-section');
          if (nextSection) {
            lenisRef.current.scrollTo(nextSection);
          }
          container.style.display = 'none';
        },
      });
    };

    video.muted = true;
    video.playsInline = true;
    video.addEventListener('ended', handleVideoEnd);

    video.play().catch((error) => {
      console.error('Video play error:', error);
      lenisRef.current.start();
    });

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      if (lenisRef?.current) {
        lenisRef.current.start();
      }
    };
  }, [lenisRef]);

  return (
    <IntroContainer ref={containerRef}>
      <IntroWrapper>
        <video ref={videoRef} autoPlay muted playsInline>
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
      </IntroWrapper>
    </IntroContainer>
  );
};

export default Intro;
