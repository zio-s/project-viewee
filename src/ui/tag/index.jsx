import { StyledTag, TagWrapper } from './style';

const Tag = ({ item, size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <TagWrapper>
      {item.map((item, index) => (
        <StyledTag key={index} $size={size} $fullWidth={fullWidth} {...props}>
          #{item}{' '}
        </StyledTag>
      ))}
    </TagWrapper>
  );
};

export default Tag;
