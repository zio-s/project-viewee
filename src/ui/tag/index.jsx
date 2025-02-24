import { StyledTag, TagWrapper } from './style';

const Tag = ({ children, size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <TagWrapper>
      <StyledTag $size={size} $fullWidth={fullWidth} {...props}>
        #{children}{' '}
      </StyledTag>
    </TagWrapper>
  );
};

export default Tag;
