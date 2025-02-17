import { CCSubNavWrap } from './style';
import { useEffect, useState } from 'react';
import DropDown from '../../../../ui/dropdown';

const SubNav = ({ data, isActive, handleClick }) => {
  const tagList = data.map((item) => item.tag);
  const tag = new Set(tagList);
  const tagArray = [...tag];
  const mobiletagArray = ['전체', ...tag];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CCSubNavWrap>
      {isMobile ? (
        <div className="subNavMobile">
          <DropDown item={mobiletagArray} handleClick={handleClick} />
        </div>
      ) : (
        <>
          <li
            className={isActive === '전체' ? 'on' : ''}
            onClick={() => {
              handleClick('전체');
            }}
          >
            전체
          </li>
          {tagArray.map((item, index) => (
            <li
              key={index}
              className={isActive === item ? 'on' : ''}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </li>
          ))}
        </>
      )}
    </CCSubNavWrap>
  );
};

export default SubNav;
