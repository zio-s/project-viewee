import { useState } from 'react';
import { StyledDropDown } from './style';

const DropDown = ({ title, item, variant = 'primary', size = 'medium', icon }) => {
  const [option, setOption] = useState(item[0]);
  const [isOpen, setIsOpen] = useState(false);
  const listOn = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (e) => {
    setOption(e.target.innerText);
    setIsOpen(false);
  };
  return (
    <StyledDropDown $variant={variant} $size={size}>
      <div className="dropdown" onClick={listOn}>
        {option}
        <div className="icon">V</div>
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
