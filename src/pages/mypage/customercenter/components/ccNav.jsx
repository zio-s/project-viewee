import { useEffect, useState } from 'react';
import { CCNavWrap } from './style';

const CCNav = ({ isActive, changeTap }) => {
  const [isMobile, setIsMobile] = useState(null);
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
    <CCNavWrap>
      <li className={isActive === 'notice' ? 'on' : ''} onClick={() => changeTap('notice')}>
        공지사항
      </li>
      <li className={isActive === 'faq' ? 'on' : ''} onClick={() => changeTap('faq')}>
        자주 묻는 질문 FAQ
      </li>
      <li className={isActive === 'qna' ? 'on' : ''} onClick={() => changeTap('qna')}>
        1:1 문의
      </li>
      {isMobile ? (
        ''
      ) : (
        <li className={isActive === 'terms' ? 'on' : ''} onClick={() => changeTap('terms')}>
          이용약관
        </li>
      )}
    </CCNavWrap>
  );
};

export default CCNav;
