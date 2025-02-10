import { useState } from 'react';
import EpisodeList from './EpisodeList';
import ReviewSection from './ReviewSection';
import InfoSection from './InfoSection';
import { TabMenu } from '../style';

const DetailPageNav = ({ changeContent }) => {
  const [isActive, setIsActive] = useState('episode'); 

  const handleTabClick = (tab, content) => {
    setIsActive(tab);
    changeContent(content);
  };

  return (
    <TabMenu>
      <li
        className={isActive === 'episode' ? 'active' : ''}
        onClick={() => handleTabClick('episode', <EpisodeList />)}
      >
        에피소드
      </li>
      <li
        className={isActive === 'recommend' ? 'active' : ''}
        onClick={() => handleTabClick('recommend', <div>추천 영화 섹션 (Swiper 사용 예정)</div>)}
      >
        추천
      </li>
      <li
        className={isActive === 'detail' ? 'active' : ''}
        onClick={() => handleTabClick('detail', <InfoSection />)}
      >
        상세정보
      </li>
    </TabMenu>
  );
};

export default DetailPageNav;
