import { StyledGrayButton } from './style';

const GrayButton = ({ size = 'medium', fullWidth = false, type, ...props }) => {
  const renderIcon = () => {
    if (type == 'dropdown') {
      return <div className="iconBox">V</div>;
    } else if (type == 'good') {
      return <div className="iconBox">b</div>;
    } else if (type == 'plus') {
      return <div className="iconBox">+</div>;
    }
  };
  return (
    <StyledGrayButton $size={size} $fullWidth={fullWidth} {...props}>
      {renderIcon()}
    </StyledGrayButton>
  );
};

export default GrayButton;
