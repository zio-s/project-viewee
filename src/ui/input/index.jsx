import { forwardRef } from 'react';
import { StyledInput } from './style';

const Input = forwardRef(
  ({ placeholder, variant = 'primary', size = 'medium', type = 'text', fullWidth = false, ...props }, ref) => {
    return (
      <StyledInput
        type={type}
        {...props}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);

export default Input;
