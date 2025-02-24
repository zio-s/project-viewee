import { useEffect, useRef } from 'react';
import { ReviewContainer, ReviewWrapper } from './style';

const ReviewSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // 비디오 자동 재생 설정
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <ReviewContainer>
      <ReviewWrapper>
        <div className="inner">
          <div className="bg-item">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster="/images/video-poster.jpg" // 비디오 로딩 전 표시될 이미지
            >
              <source src="/video/review.mp4" type="video/mp4" />
              브라우저가 비디오 태그를 지원하지 않습니다.
            </video>
            <div className="text-box">
              <h1>텍스트입니다.</h1>
            </div>
          </div>
        </div>
      </ReviewWrapper>
    </ReviewContainer>
  );
};

export default ReviewSection;
