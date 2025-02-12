import { StyledInput } from './style';

const Input = ({ placeholder, variant = 'primary', size = 'medium', fullWidth = false, ...props }) => {
  return <StyledInput $variant={variant} $size={size} $fullWidth={fullWidth} placeholder={placeholder} {...props} />;
};

export default Input;
