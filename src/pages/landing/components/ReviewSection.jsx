import { useEffect, useState } from 'react';
import {
  CardBack,
  CardFront,
  CardItem,
  ReviewCard,
  ReviewContainer,
  ReviewInner,
  ReviewVideo,
  ReviewWrapper,
} from './style';

const ReviewSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetPosition = window.innerHeight * 3.5;
      setIsSticky(scrollPosition >= targetPosition);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 568);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ReviewWrapper>
      <ReviewContainer>
        <ReviewVideo>
          <ReviewInner>
            <ReviewCard $isSticky={isSticky} $isMobile={isMobile}>
              <CardItem className={`problem-single-card-block ${isSticky ? 'hover-active' : ''}`}>
                <CardFront>카드 앞면</CardFront>
                <CardBack>카드 뒷면</CardBack>
              </CardItem>
            </ReviewCard>
          </ReviewInner>
        </ReviewVideo>
      </ReviewContainer>
    </ReviewWrapper>
  );
};

export default ReviewSection;
