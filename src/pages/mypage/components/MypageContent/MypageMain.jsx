import { MyPageMainWrap } from './style';
import MyPageContent from './MyPageContent';
import { useState } from 'react';

const MypageMain = () => {
  const changeContent = (content) => {
    setContent(content);
  };
  const [content, setContent] = useState(<MyPageContent changeContent={changeContent} />);

  return (
    <MyPageMainWrap>
      <div className="content">{content}</div>
    </MyPageMainWrap>
  );
};

export default MypageMain;
