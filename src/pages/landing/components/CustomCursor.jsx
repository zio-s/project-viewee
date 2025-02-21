import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const CursorWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: all 150ms ease;
  transform: translate(-50%, -50%) scale(${(props) => (props.$isClicking ? 0.75 : 1)});
`;

const CursorDot = styled.div`
  width: ${(props) => (props.$isHovering ? '64px' : '32px')};
  height: ${(props) => (props.$isHovering ? '64px' : '32px')};
  border-radius: 50%;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: all 300ms ease;
  background-color: ${(props) => (props.$isHovering ? '#FF6B8B' : '#fff')};
  mix-blend-mode: difference;
`;

const GlobalStyles = createGlobalStyle`
  .hoverable {
    cursor: none !important;
  }

  .white-content {
    color: white;
    mix-blend-mode: difference;
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // 호버 상태 감지
    const handleHoverStart = (e) => {
      if (e.target.classList.contains('hoverable')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <CursorWrapper
        $isClicking={isClicking}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <CursorDot $isVisible={isVisible} $isHovering={isHovering} />
      </CursorWrapper>
    </>
  );
};

export default CustomCursor;
