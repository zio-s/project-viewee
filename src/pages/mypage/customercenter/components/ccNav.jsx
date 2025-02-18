import { CCNavWrap } from './style';

const CCNav = ({ isActive, changeTap }) => {
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
      <li className={isActive === 'terms' ? 'on' : ''} onClick={() => changeTap('terms')}>
        이용약관
      </li>
    </CCNavWrap>
  );
};

export default CCNav;
