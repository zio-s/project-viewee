import { useDispatch } from 'react-redux';
import { CCSubNavWrap } from './style';
import { pageActions } from '../../../../store/modules/pageSlice';

const SubNav = ({ data, isActive, handleClick }) => {
  const tagList = data.map((item) => item.tag);
  const tag = new Set(tagList);
  const tagArray = [...tag];
  return (
    <CCSubNavWrap>
      <li
        className={isActive === 'all' ? 'on' : ''}
        onClick={() => {
          handleClick('all');
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
            // c
          }}
        >
          {item}
        </li>
      ))}
    </CCSubNavWrap>
  );
};

export default SubNav;
