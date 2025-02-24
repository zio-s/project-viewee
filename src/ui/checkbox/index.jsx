import { StyledCheckBox } from './style';

const CheckBox = ({
  id,
  children,
  variant = 'primary',
  size = 'medium',
  icon = <img src="/icons/util/check.svg" />,
  ...props
}) => {
  return (
    <StyledCheckBox $variant={variant} $size={size}>
      <input id={id} type="checkbox" {...props} />
      <label htmlFor={id} className="labelBox">
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
