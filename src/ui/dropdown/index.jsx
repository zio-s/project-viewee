import { useState } from 'react';
import { StyledDropDown } from './style';

const DropDown = ({ title, item, variant = 'primary', size = 'medium', icon, handleClick }) => {
  const [option, setOption] = useState(item[0]);
  const [isOpen, setIsOpen] = useState(false);
  const listOn = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (e) => {
    setOption(e.target.innerText);
    setIsOpen(false);
    handleClick(e.target.innerText);
  };
  return (
    <StyledDropDown $variant={variant} $size={size}>
      <div className="dropdown" onClick={listOn}>
        <div className="option">{option}</div>

        <div className="icon">
          <img src="/icons/arrow/bottom.svg" />
        </div>
      </div>
      {isOpen ? (
        <div className="dropdown-list">
          {item.map((item, index) => (
            <div key={index} className="list-item" onClick={handleSelect}>
              {item}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </StyledDropDown>
  );
};

export default DropDown;
