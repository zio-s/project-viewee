import { useSelector } from 'react-redux';
import MyPageNav from './components/MyPageNav';
import Profile from './components/Profile';
import { MyPageWrap } from './style';
import NotFiles from '../notfile';
import { useState } from 'react';
import MypageMain from './components/MypageContent/MypageMain';

const MyPage = () => {
  const authed = useSelector((state) => state.authR);
  const [content, setContent] = useState(<MypageMain />);
  const changeContent = (content) => {
    setContent(content);
  };
  return (
    <>
      {authed ? (
        <MyPageWrap>
          <Profile />
          <MyPageNav changeContent={changeContent} />
          {content}
        </MyPageWrap>
      ) : (
        <NotFiles />
      )}
    </>
  );
};

export default MyPage;
