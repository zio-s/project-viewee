import { StyledTopButton } from './style';

const TopButton = ({ children, size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <a href="#">
      <StyledTopButton $size={size} $fullWidth={fullWidth} {...props}>
        {icon && icon}^
      </StyledTopButton>
    </a>
  );
};

export default TopButton;
