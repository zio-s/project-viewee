import { useSelector } from 'react-redux';
import MyPageNav from './components/MyPageNav';
import Profile from './components/Profile';
import { MyPageWrap } from './style';
import NotFiles from '../notfile';
import { useState } from 'react';
import MypageMain from './components/MypageContent/MypageMain';
import Tag from '../../ui/tag';

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
          <div className="content">
            <Profile />
            <MyPageNav changeContent={changeContent} />
            {content}
          </div>
        </MyPageWrap>
      ) : (
        <NotFiles />
      )}
    </>
  );
};

export default MyPage;
