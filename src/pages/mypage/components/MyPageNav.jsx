import { useEffect, useState } from 'react';
import MyPageContent from './MypageContent/MyPageContent';
import { MyReview } from './MyReview/MyReview';
import { MyPageNavWrap } from './style';
import { useNavigate } from 'react-router';
import { RequestList } from './RequestList';

const MyPageNav = ({ changeContent }) => {
  const [isActive, setIsActive] = useState('content');
  const handleTap = (tap, content) => {
    setIsActive(tap);
    setTimeout(() => {
      changeContent(content);
    }, 100);
  };
  const navigate = useNavigate();
  const onQnaPage = () => {
    navigate('/qna');
  };
  const onCustomerPage = () => {
    navigate('/support');
  };
  const [isTablet, setIsTablet] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1023);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isOnMobile, setIsOnMobile] = useState(false);
  const onMobile = () => {
    setIsOnMobile(!isOnMobile);
  };

  return (
    <MyPageNavWrap>
      <ul>
        <li
          className={isActive === 'content' ? 'on' : ''}
          onClick={() => handleTap('content', <MyPageContent changeContent={changeContent} />)}
        >
          나의 컨텐츠
        </li>
        <li className={isActive === 'review' ? 'on' : ''} onClick={() => handleTap('review', <MyReview />)}>
          리뷰 관리
        </li>
        {isTablet ? (
          <li className={isActive === 'requestList' ? 'on' : ''} onClick={onMobile}>
            {isActive === 'requestList' ? '문의 내역' : '문의'}
            <ul style={isOnMobile ? { display: 'flex' } : { display: 'none' }}>
              <li onClick={() => handleTap('requestList', <RequestList />)}>문의 내역</li>
              <li onClick={onQnaPage}>문의 페이지</li>
            </ul>
          </li>
        ) : (
          <li className={isActive === 'requestList' ? 'on' : ''}>
            {isActive === 'requestList' ? '문의 내역' : '문의'}
            <ul>
              <li onClick={() => handleTap('requestList', <RequestList />)}>문의 내역</li>
              <li onClick={onQnaPage}>문의 페이지</li>
            </ul>
          </li>
        )}

        <li onClick={onCustomerPage}>고객 센터</li>
      </ul>
    </MyPageNavWrap>
  );
};

export default MyPageNav;
