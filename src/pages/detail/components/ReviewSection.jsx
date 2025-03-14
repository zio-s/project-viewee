import { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  StarContainer,
  SubmitButton,
  ReviewList,
  ReviewItem,
  ReviewInput,
} from '../style';
import { useSelector } from 'react-redux';

const ReviewSection = ({ isOpen, onClose, reviewed, onSubmit, setReviews }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const { user } = useSelector((state) => state.authR);
  const currentUser = user ? user.userId : '게스트';
  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('리뷰를 작성하려면 로그인이 필요합니다.');
      return;
    }

    if (reviewText.trim()) {
      const currentDate = new Date().toLocaleDateString();

      if (editingIndex !== null) {
        const updatedReviews = reviewed.map((review, index) =>
          index === editingIndex
            ? {
                ...review,
                stars: selectedStars,
                text: reviewText,
                date: currentDate,
              }
            : review
        );
        setReviews(updatedReviews);
        // 로컬 스토리지 업데이트
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));

        setEditingIndex(null);
      } else {
        // 새 리뷰 추가
        const newReview = {
          stars: selectedStars,
          text: reviewText,
          date: currentDate,
          user: currentUser,
          userId: user.id,
          profileImg: user.profileImg || 'images/defaultImg1.png',
        };

        // onSubmit 통해 상위 컴포넌트로 전달 (HeroSection의 handleAddReview 호출)
        if (onSubmit) {
          onSubmit(newReview);
        }
      }

      // 입력 필드 초기화
      setReviewText('');
      setSelectedStars(0);
    }
  };

  const handleEdit = (index) => {
    const reviewToEdit = reviewed[index];

    // 현재 사용자가 작성한 리뷰만 수정 가능
    if (reviewToEdit.userId !== user?.id) {
      alert('자신이 작성한 리뷰만 수정할 수 있습니다.');
      return;
    }

    setReviewText(reviewToEdit.text);
    setSelectedStars(reviewToEdit.stars);
    setEditingIndex(index);
    setDropdownOpen(null);
  };

  const handleDelete = (index) => {
    const reviewToDelete = reviewed[index];

    // 현재 사용자가 작성한 리뷰만 삭제 가능
    if (reviewToDelete.userId !== user?.id) {
      alert('자신이 작성한 리뷰만 삭제할 수 있습니다.');
      return;
    }

    const updatedReviews = reviewed.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    // 로컬 스토리지 업데이트
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setDropdownOpen(null);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3359 37.9375L37.3334 13.9401"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.3281 37.9375L13.3307 13.9401"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
              fill={index < selectedStars ? 'var(--secondary-50)' : '#CECECE'}
              onClick={() => handleStarClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <path d="M11.0338 46.7535C11.8918 47.4232 12.98 47.193 14.2774 46.2514L25.3474 38.111L36.4384 46.2514C37.7358 47.193 38.8031 47.4232 39.682 46.7535C40.54 46.105 40.7283 45.0376 40.2052 43.51L35.8315 30.4939L47.0061 22.4582C48.3036 21.5375 48.8268 20.5748 48.492 19.5285C48.1572 18.524 47.1736 18.0218 45.5624 18.0427L31.8556 18.1264L27.6911 5.04743C27.189 3.49888 26.4356 2.72461 25.3474 2.72461C24.2802 2.72461 23.5268 3.49888 23.0247 5.04743L18.8603 18.1264L5.15353 18.0427C3.54219 18.0218 2.55865 18.524 2.22383 19.5285C1.86808 20.5748 2.41217 21.5375 3.7096 22.4582L14.8843 30.4939L10.5107 43.51C9.98751 45.0376 10.1758 46.105 11.0338 46.7535Z" />
            </svg>
          ))}
        </StarContainer>

        <ReviewInput
          placeholder="감상평을 작성해주세요"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit} type="submit">
          {editingIndex !== null ? '수정 완료' : '등록'}
        </SubmitButton>

        <ReviewList>
          {reviewed.length > 0 ? (
            [...reviewed].reverse().map((review, index) => (
              <ReviewItem key={index}>
                <span>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                      fill={i < review.rate ? 'var(--secondary-50)' : '#CECECE'}
                    >
                      <path d="M11.0338 46.7535C11.8918 47.4232 12.98 47.193 14.2774 46.2514L25.3474 38.111L36.4384 46.2514C37.7358 47.193 38.8031 47.4232 39.682 46.7535C40.54 46.105 40.7283 45.0376 40.2052 43.51L35.8315 30.4939L47.0061 22.4582C48.3036 21.5375 48.8268 20.5748 48.492 19.5285C48.1572 18.524 47.1736 18.0218 45.5624 18.0427L31.8556 18.1264L27.6911 5.04743C27.189 3.49888 26.4356 2.72461 25.3474 2.72461C24.2802 2.72461 23.5268 3.49888 23.0247 5.04743L18.8603 18.1264L5.15353 18.0427C3.54219 18.0218 2.55865 18.524 2.22383 19.5285C1.86808 20.5748 2.41217 21.5375 3.7096 22.4582L14.8843 30.4939L10.5107 43.51C9.98751 45.0376 10.1758 46.105 11.0338 46.7535Z" />
                    </svg>
                  ))}
                </span>
                <span>
                  {review.username} | {review.date}
                </span>
                <p>{review.content}</p>
                <div className="icon-container">
                  <div className="icon-wrapper">
                    <svg width="25" height="25" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.69549 24.0373C4.58964 22.82 5.54918 21.7734 6.77099 21.7734H10.7486C11.8993 21.7734 12.832 22.7061 12.832 23.8568V43.6484C12.832 44.7991 11.8993 45.7318 10.7486 45.7318H8.492C7.41136 45.7318 6.51011 44.9055 6.4165 43.829L4.69549 24.0373Z"
                        stroke="var(--gray-60)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.082 23.2052C19.082 22.3347 19.6231 21.5555 20.4105 21.1844C22.1277 20.3749 25.0538 18.7461 26.3737 16.5448C28.0748 13.7077 28.3957 8.58172 28.4479 7.40758C28.4552 7.24322 28.4505 7.07866 28.4731 6.91569C28.7551 4.88225 32.6803 7.25773 34.1862 9.7694C35.0035 11.1325 35.1083 12.9234 35.0223 14.3217C34.9304 15.8177 34.4917 17.2629 34.0614 18.6988L33.1445 21.7573H44.4538C45.8354 21.7573 46.8342 23.0774 46.4587 24.4069L40.8646 44.2147C40.6112 45.1121 39.7922 45.7318 38.8597 45.7318H21.1654C20.0147 45.7318 19.082 44.7991 19.082 43.6484V23.2052Z"
                        stroke="var(--gray-60)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="icon-wrapper">
                    <svg width="25" height="25" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g transform="rotate(180, 25.5, 25.5)">
                        <path
                          d="M4.69549 24.0373C4.58964 22.82 5.54918 21.7734 6.77099 21.7734H10.7486C11.8993 21.7734 12.832 22.7061 12.832 23.8568V43.6484C12.832 44.7991 11.8993 45.7318 10.7486 45.7318H8.492C7.41136 45.7318 6.51011 44.9055 6.4165 43.829L4.69549 24.0373Z"
                          stroke="var(--gray-60)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.082 23.2052C19.082 22.3347 19.6231 21.5555 20.4105 21.1844C22.1277 20.3749 25.0538 18.7461 26.3737 16.5448C28.0748 13.7077 28.3957 8.58172 28.4479 7.40758C28.4552 7.24322 28.4505 7.07866 28.4731 6.91569C28.7551 4.88225 32.6803 7.25773 34.1862 9.7694C35.0035 11.1325 35.1083 12.9234 35.0223 14.3217C34.9304 15.8177 34.4917 17.2629 34.0614 18.6988L33.1445 21.7573H44.4538C45.8354 21.7573 46.8342 23.0774 46.4587 24.4069L40.8646 44.2147C40.6112 45.1121 39.7922 45.7318 38.8597 45.7318H21.1654C20.0147 45.7318 19.082 44.7991 19.082 43.6484V23.2052Z"
                          stroke="var(--gray-60)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                {review.userId === currentUser && (
                  <div className="dropdown">
                    <div onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}>
                      <svg width="30" height="30" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_641_37578)">
                          <path
                            d="M9.90301 21.5806C7.70569 21.5806 5.92694 23.3385 5.92694 25.5357C5.92694 27.733 7.70569 29.5117 9.90301 29.5117C12.1002 29.5117 13.8789 27.733 13.8789 25.5357C13.8789 23.3385 12.1002 21.5806 9.90301 21.5806Z"
                            fill="var(--gray-30)"
                            fillOpacity="0.85"
                          />
                          <path
                            d="M25.4537 21.5806C23.2563 21.5806 21.4987 23.3385 21.4987 25.5357C21.4987 27.733 23.2563 29.5117 25.4537 29.5117C27.651 29.5117 29.4297 27.733 29.4297 25.5357C29.4297 23.3385 27.651 21.5806 25.4537 21.5806Z"
                            fill="var(--gray-30)"
                            fillOpacity="0.85"
                          />
                          <path
                            d="M41.0006 21.5806C38.8033 21.5806 37.0455 23.3385 37.0455 25.5357C37.0455 27.733 38.8033 29.5117 41.0006 29.5117C43.1978 29.5117 44.9766 27.733 44.9766 25.5357C44.9766 23.3385 43.1978 21.5806 41.0006 21.5806Z"
                            fill="var(--gray-30)"
                            fillOpacity="0.85"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_641_37578">
                            <rect
                              width="39.0486"
                              height="7.97293"
                              fill="white"
                              transform="matrix(-1 0 0 -1 44.9766 29.5117)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    {dropdownOpen === index && (
                      <div className="dropdown-menu">
                        <button onClick={() => handleEdit(index)}>수정</button>
                        <button onClick={() => handleDelete(index)}>삭제</button>
                      </div>
                    )}
                  </div>
                )}
              </ReviewItem>
            ))
          ) : (
            <p>작성된 리뷰가 없습니다.</p>
          )}
        </ReviewList>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ReviewSection;
