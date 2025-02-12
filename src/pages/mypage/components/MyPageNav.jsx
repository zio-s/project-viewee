import { useState } from 'react';
import Ask from './Ask';
import CustomerCenter from './CustomerCenter';
import MyPageContent from './MypageContent/MyPageContent';
import { MyReview } from './MyReview/MyReview';
import { MyPageNavWrap } from './style';

const MyPageNav = ({ changeContent }) => {
  const [isActive, setIsActive] = useState('content');
  const handleTap = (tap, content) => {
    setIsActive(tap);
    setTimeout(() => {
      changeContent(content);
    }, 100);
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
          <ul>
            <li>문의 내역</li>
            <li>문의 페이지</li>
          </ul>
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
