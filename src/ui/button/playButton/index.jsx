import { StyledPlayButton } from './style';

const PlayButton = ({ children, size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <StyledPlayButton $size={size} $fullWidth={fullWidth} {...props}>
      {icon && icon} &gt;
    </StyledPlayButton>
  );
};

export default PlayButton;
