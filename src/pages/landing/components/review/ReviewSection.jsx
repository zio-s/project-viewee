import { useEffect, useRef } from 'react';
import { ReviewContainer, ReviewWrapper } from './style';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReviewSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const textElements = useRef([]);

  const highlightTexts = ['싼', '필요한', '부담없는', '특별한'];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
    textElements.current.forEach((el, i) => {
      if (i === 0) {
        el.classList.add('active');
        gsap.set(el, { rotateX: 0, opacity: 1 });
      } else {
        gsap.set(el, { rotateX: -90, opacity: 0 });
      }
    });

    let currentIndex = 0;
    const sectionDuration = 1;
    const animationDuration = 0.5;

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 2,
        onUpdate: (self) => {
          const totalProgress = self.progress * highlightTexts.length;
          const newIndex = Math.floor(totalProgress);

          if (newIndex !== currentIndex && newIndex < highlightTexts.length) {
            const switchTexts = gsap.timeline();

            switchTexts.to(textElements.current[currentIndex], {
              rotateX: 90,
              opacity: 0,
              duration: animationDuration,
              ease: 'power2.inOut',
              onComplete: () => {
                textElements.current[currentIndex].classList.remove('active');
              },
            });

            switchTexts.add(() => {
              textElements.current[newIndex].classList.add('active');
            });

            switchTexts.fromTo(
              textElements.current[newIndex],
              {
                rotateX: -90,
                opacity: 0,
              },
              {
                rotateX: 0,
                opacity: 1,
                duration: animationDuration,
                ease: 'power2.inOut',
              }
            );

            currentIndex = newIndex;
          }
        },
      },
    });

    highlightTexts.forEach((_, index) => {
      if (index < highlightTexts.length - 1) {
        masterTimeline.to({}, { duration: sectionDuration });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      masterTimeline.kill();
    };
  }, []);

  return (
    <ReviewContainer ref={sectionRef}>
      <ReviewWrapper>
        <div className="inner">
          <div className="bg-item">
            <video ref={videoRef} autoPlay muted loop playsInline poster="/images/video-poster.jpg">
              <source src="/video/review.mp4" type="video/mp4" />
              브라우저가 비디오 태그를 지원하지 않습니다.
            </video>
            <div className="text-box">
              <h1>
                뷰이가{' '}
                <span className="text-container">
                  {highlightTexts.map((text, index) => (
                    <span key={index} className="highlight-text" ref={(el) => (textElements.current[index] = el)}>
                      {text}
                    </span>
                  ))}
                </span>{' '}
                이유
              </h1>
            </div>
          </div>
        </div>
      </ReviewWrapper>
    </ReviewContainer>
  );
};

export default ReviewSection;
