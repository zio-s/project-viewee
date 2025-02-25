import { useEffect, useRef } from 'react';
import { DeviceContainer } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DeviceSection = () => {
  const highlightTexts = ['원하는 기기로 자유롭게 감상 하는', '때로는 크게', '때로는 편리하게'];
  const textRefs = useRef([]);
  const deviceRefs = useRef({
    desktop: null,
    tablet: null,
    mobile: null,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    // 각 텍스트 요소 초기 설정
    textRefs.current.forEach((textEl, index) => {
      // 텍스트 내용 설정
      if (textEl) {
        textEl.textContent = highlightTexts[index];
      }
      // 모두 숨기고 시작
      gsap.set(textEl, { opacity: 0 });
    });

    // 모든 디바이스 이미지 초기 설정 - transform 속성 유지
    gsap.set(deviceRefs.current.desktop, {
      opacity: 0,
      scale: 0.9,
      clearProps: 'transform', // CSS transform 속성(translate) 보존
    });
    gsap.set(deviceRefs.current.tablet, {
      opacity: 0,
      scale: 0.9,
    });
    gsap.set(deviceRefs.current.mobile, {
      opacity: 0,
      scale: 0.9,
    });

    // 전체 섹션 핀 설정
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // 1. 데스크탑 + 첫 번째 텍스트
    tl.to(
      textRefs.current[0],
      {
        opacity: 1,
        duration: 0.5,
      },
      0
    );

    tl.to(
      deviceRefs.current.desktop,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        clearProps: 'transform', // CSS transform 속성(translate) 보존
      },
      0.2
    );

    // 2. 태블릿 + 두 번째 텍스트
    tl.to(
      textRefs.current[0],
      {
        opacity: 0,
        duration: 0.3,
      },
      0.8
    );

    tl.to(
      textRefs.current[1],
      {
        opacity: 1,
        duration: 0.5,
      },
      1.1
    );

    tl.to(
      deviceRefs.current.tablet,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
      },
      1.1
    );

    // 3. 모바일 + 세 번째 텍스트
    tl.to(
      textRefs.current[1],
      {
        opacity: 0,
        duration: 0.3,
      },
      1.6
    );

    tl.to(
      textRefs.current[2],
      {
        opacity: 1,
        duration: 0.5,
      },
      1.9
    );

    tl.to(
      deviceRefs.current.mobile,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
      },
      1.9
    );

    // 클린업 함수
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <DeviceContainer ref={sectionRef}>
      <div className="deviceInner">
        <div className="textContainer">
          {highlightTexts.map((text, index) => (
            <span
              key={index}
              className="highlight-text"
              ref={(el) => (textRefs.current[index] = el)}
              style={{ position: 'absolute', opacity: 0 }}
            >
              {text}
            </span>
          ))}
        </div>
        <div className="deviceWrapper">
          <div className="desktop" ref={(el) => (deviceRefs.current.desktop = el)}>
            <img src="/images/desktop.png" alt="데스크탑 화면" />
          </div>
          <div className="tablet" ref={(el) => (deviceRefs.current.tablet = el)}>
            <img src="/images/tablet.png" alt="태블릿 화면" />
          </div>
          <div className="mobile" ref={(el) => (deviceRefs.current.mobile = el)}>
            <img src="/images/mobile.png" alt="모바일 화면" />
          </div>
        </div>
      </div>
    </DeviceContainer>
  );
};

export default DeviceSection;
