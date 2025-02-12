import React from 'react';
import InfoSection from './InfoSection';
import { TabMenu } from '../style';
import Recommended from "./Recommended";
import Episode from './Episode';

const DetailPageNav = ({ activeTab, changeContent }) => {
  const handleTabClick = (tab, content) => {
    changeContent(tab, content); 
  };

  return (
    <TabMenu>
      <li
        className={activeTab === 'episode' ? 'active' : ''} 
        onClick={() => handleTabClick('episode', <Episode />)}
      >
        에피소드
      </li>
      <li
        className={activeTab === 'recommend' ? 'active' : ''}
        onClick={() => handleTabClick('recommend', <Recommended />)}
      >
        추천
      </li>
      <li
        className={activeTab === 'detail' ? 'active' : ''}
        onClick={() => handleTabClick('detail', <InfoSection />)}
      >
        상세정보
      </li>
    </TabMenu>
  );
};

export default DetailPageNav;
