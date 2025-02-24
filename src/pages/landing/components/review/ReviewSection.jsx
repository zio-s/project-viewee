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

    // 초기 상태 설정
    textElements.current.forEach((el, i) => {
      if (i === 0) {
        el.classList.add('active');
        gsap.set(el, { rotateX: 0, opacity: 1 });
      } else {
        gsap.set(el, { rotateX: -90, opacity: 0 });
      }
    });

    let currentIndex = 0;
    const sectionDuration = 1; // 각 텍스트가 보여질 구간의 길이
    const animationDuration = 0.5; // 애니메이션 진행 시간

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%', // 스크롤 구간을 더 길게 설정
        pin: true,
        scrub: 2,
        onUpdate: (self) => {
          // 전체 진행도를 섹션 수로 나누어 현재 섹션 계산
          const totalProgress = self.progress * highlightTexts.length;
          const newIndex = Math.floor(totalProgress);

          // 현재 섹션 내에서의 진행도 (0~1)
          const sectionProgress = totalProgress - newIndex;

          if (newIndex !== currentIndex && newIndex < highlightTexts.length) {
            // 애니메이션 타임라인 생성
            const switchTexts = gsap.timeline();

            // 현재 텍스트 퇴장
            switchTexts.to(textElements.current[currentIndex], {
              rotateX: 90,
              opacity: 0,
              duration: animationDuration,
              ease: 'power2.inOut',
              onComplete: () => {
                textElements.current[currentIndex].classList.remove('active');
              },
            });

            // 새 텍스트 등장
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

    // 각 텍스트에 대한 정지 구간 추가
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
