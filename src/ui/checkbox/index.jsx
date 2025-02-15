import { StyledCheckBox } from './style';

const CheckBox = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon = <img src="/icons/util/check.svg" />,
  ...props
}) => {
  return (
    <StyledCheckBox $variant={variant} $size={size}>
      <input id="a" type="checkbox" {...props} />
      <label htmlFor="a" className="labelBox">
        <div className="labelBox">
          <div className="iconBox">{icon}</div>
          {children}
          {/* <Checked /> */}
        </div>
      </label>
    </StyledCheckBox>
  );
};

export default CheckBox;
