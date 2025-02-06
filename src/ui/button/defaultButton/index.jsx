import { StyledButton } from './style';

const Button = ({ children, variant = 'primary', size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;
