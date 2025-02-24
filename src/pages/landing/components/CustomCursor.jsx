import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const CursorWrapper = styled.div`
  a,
  button,
  .hover-target h2,
  p {
    cursor: none !important;
  }
  position: fixed;
  width: 30px;
  height: 30px;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background: var(--primary-50, #fff);
  border-radius: 80%;
  z-index: 9999;
  backface-visibility: hidden;
  pointer-events: none;
  mix-blend-mode: difference;

  &.hover {
    width: 80px;
    height: 80px;
    background: var(--primary-50, #fff);
  }
`;

const HoverBox = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--primary-50, #fff);
  /* background: #fff; */
  border-radius: 80%;
  z-index: 9999;
  transition: 0.15s ease;
  font-size: 14px;
  color: #000;
  font-weight: 700;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: multiply;

  .hover & {
    width: 180px;
    height: 180px;
    opacity: 1;
    /* background: #000; */
  }
`;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const hoverBoxRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });
    };

    const addHoverEffect = (element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    };
    const setupHoverEffects = () => {
      const hoverTargets = document.querySelectorAll('a, button, .hover-target,h2,p');
      hoverTargets.forEach(addHoverEffect);
    };
    window.addEventListener('mousemove', onMouseMove);
    setupHoverEffects();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          setupHoverEffects();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CursorWrapper ref={cursorRef} id="cursor">
        <HoverBox ref={hoverBoxRef} className="hover-box" />
      </CursorWrapper>
    </>
  );
};

export default CustomCursor;
