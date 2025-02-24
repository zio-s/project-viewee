import { useState, useEffect } from 'react';
import { ButtonContainer, StyledTopButton } from './style';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ButtonContainer $visible={isVisible}>
        <StyledTopButton $size="large" onClick={scrollToTop}>
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="38.168" cy="37.6816" r="36.2484" stroke="#F05A7E" strokeWidth="2.50326" />
            <path d="M37.3359 23.0605L50.3263 45.5605H24.3456L37.3359 23.0605Z" fill="#F05A7E" />
          </svg>
        </StyledTopButton>
      </ButtonContainer>
    </>
  );
};

export default ScrollToTopButton;
