import { useSelector } from 'react-redux';
import MyPageContent from './components/MyPageContent';
import MyPageNav from './components/MyPageNav';
import Profile from './components/Profile';
import { MyPageWrap } from './style';
import NotFiles from '../notfile';
import { useState } from 'react';

const MyPage = () => {
  const authed = useSelector((state) => state.authR);
  const [content, useContent] = useState(<MyPageContent />);
  const changeContent = (content) => {
    useContent(content);
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
