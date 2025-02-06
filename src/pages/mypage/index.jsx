import MyPageContent from './components/MyPageContent';
import MyPageNav from './components/MyPageNav';
import Profile from './components/Profile';
import { MyPageWrap } from './style';

const MyPage = () => {
  return (
    <MyPageWrap>
      <Profile />
      <MyPageNav />
      <MyPageContent />
    </MyPageWrap>
  );
};

export default MyPage;
