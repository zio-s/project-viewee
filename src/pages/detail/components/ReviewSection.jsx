import React, { useState } from "react";
import { ModalOverlay, ModalContent, CloseButton, StarContainer, SubmitButton, ReviewList, ReviewItem, ReviewInput } from "../style";

const ReviewSection = ({ isOpen, onClose, reviews, onSubmit, setReviews  }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [reviewText, setReviewText] = useState("");


  const handleStarClick = (index) => {
    setSelectedStars(index + 1); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText) {
        const currentDate = new Date().toLocaleString();
        const newReview = { stars: selectedStars, text: reviewText, date: currentDate };

        onSubmit(newReview); 
        setReviewText(""); 
        setSelectedStars(0); 

        setReviews((prevReviews) => [...prevReviews, newReview]);
    }
};

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3359 37.9375L37.3334 13.9401" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.3281 37.9375L13.3307 13.9401" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </CloseButton>
        <h2>별점을 선택해주세요</h2>
        <StarContainer>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill={index < selectedStars ? "var(--secondary-50)" : "#CECECE"} 
              onClick={() => handleStarClick(index)} 
              style={{ cursor: "pointer" }} 
            >
              <g clipPath="url(#clip0_735_5301)">
                <path d="M11.0338 46.7535C11.8918 47.4232 12.98 47.193 14.2774 46.2514L25.3474 38.111L36.4384 46.2514C37.7358 47.193 38.8031 47.4232 39.682 46.7535C40.54 46.105 40.7283 45.0376 40.2052 43.51L35.8315 30.4939L47.0061 22.4582C48.3036 21.5375 48.8268 20.5748 48.492 19.5285C48.1572 18.524 47.1736 18.0218 45.5624 18.0427L31.8556 18.1264L27.6911 5.04743C27.189 3.49888 26.4356 2.72461 25.3474 2.72461C24.2802 2.72461 23.5268 3.49888 23.0247 5.04743L18.8603 18.1264L5.15353 18.0427C3.54219 18.0218 2.55865 18.524 2.22383 19.5285C1.86808 20.5748 2.41217 21.5375 3.7096 22.4582L14.8843 30.4939L10.5107 43.51C9.98751 45.0376 10.1758 46.105 11.0338 46.7535Z" />
              </g>
              <defs>
                <clipPath id="clip0_735_5301">
                  <rect width="46.4734" height="47.3982" fill="white" transform="translate(2.11719 2.72461)" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </StarContainer>

        <ReviewInput 
          placeholder="감상평을 작성해주세요" 
          value={reviewText} 
          onChange={(e) => setReviewText(e.target.value)} 
        />
        <SubmitButton onClick={handleSubmit} type="submit">등록</SubmitButton>
        <ReviewList>
          {reviews.map((review, index) => (
            <ReviewItem key={index}>
              ⭐ {review.stars} - {review.date} : {review.text}
            </ReviewItem>
          ))}
        </ReviewList>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ReviewSection;
