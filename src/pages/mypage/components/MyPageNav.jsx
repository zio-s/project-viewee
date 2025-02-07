import { useState } from 'react';
import Ask from './Ask';
import CustomerCenter from './CustomerCenter';
import MyPageContent from './MyPageContent';
import { MyReview } from './MyReview';
import { MyPageNavWrap } from './style';

const MyPageNav = ({ changeContent }) => {
  const [isActive, setIsActive] = useState('content');
  const handleTap = (tap, content) => {
    setIsActive(tap);
    changeContent(content);
  };
  return (
    <MyPageNavWrap>
      <ul>
        <li className={isActive === 'content' ? 'on' : ''} onClick={() => handleTap('content', <MyPageContent />)}>
          나의 컨텐츠
        </li>
        <li className={isActive === 'review' ? 'on' : ''} onClick={() => handleTap('review', <MyReview />)}>
          리뷰 관리
        </li>
        <li className={isActive === 'ask' ? 'on' : ''} onClick={() => handleTap('ask', <Ask />)}>
          문의
        </li>
        <li
          className={isActive === 'customercenter' ? 'on' : ''}
          onClick={() => handleTap('customercenter', <CustomerCenter />)}
        >
          고객 센터
        </li>
      </ul>
    </MyPageNavWrap>
  );
};

export default MyPageNav;
