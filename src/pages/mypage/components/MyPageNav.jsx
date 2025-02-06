import Ask from './Ask';
import CustomerCenter from './CustomerCenter';
import MyPageContent from './MyPageContent';
import { MyReview } from './MyReview';
import { MyPageNavWrap } from './style';

const MyPageNav = ({ changeContent }) => {
  return (
    <MyPageNavWrap>
      <ul>
        <li onClick={() => changeContent(<MyPageContent />)}>나의 컨텐츠</li>
        <li onClick={() => changeContent(<MyReview />)}>리뷰 관리</li>
        <li onClick={() => changeContent(<Ask />)}>문의</li>
        <li onClick={() => changeContent(<CustomerCenter />)}>고객센터</li>
      </ul>
    </MyPageNavWrap>
  );
};

export default MyPageNav;
