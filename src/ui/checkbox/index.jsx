import { StyledCheckBox } from './style';

const CheckBox = ({ children, variant = 'primary', size = 'medium', icon }) => {
  return (
    <StyledCheckBox $variant={variant} $size={size}>
      <input id="a" type="checkbox" />
      <label htmlFor="a" className="labelBox">
        <div className="labelBox">
          <div className="iconBox">v{icon}</div>
          {children}
          {/* <Checked /> */}
        </div>
      </label>
    </StyledCheckBox>
  );
};

export default CheckBox;
