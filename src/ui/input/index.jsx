import { StyledInput } from './style';

const Input = ({ placeholder, variant = 'primary', size = 'medium', type = 'text', fullWidth = false, ...props }) => {
  return (
    <StyledInput
      type={type}
      {...props}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      placeholder={placeholder}
    />
  );
};

export default Input;
