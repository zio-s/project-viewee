import { StyledReviewButton } from './style';

const ReviewButton = ({ number, size = 'medium', fullWidth = false, type, ...props }) => {
  const renderIcon = () => {
    if (type == 'good') {
      return <div className="iconBox">b</div>;
    } else {
      return <div className="iconBox">ㅠ</div>;
    }
  };
  return (
    <a href="#">
      <StyledReviewButton $size={size} $fullWidth={fullWidth} {...props}>
        {renderIcon()}
        {number}
      </StyledReviewButton>
    </a>
  );
};

export default ReviewButton;
