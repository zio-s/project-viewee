import React from 'react';
import { TabMenu } from '../style';
import Recommended from './Recommended';
import Episode from './Episode';
import InfoSection from './InfoSection';

const DetailPageNav = ({ activeTab, changeContent, detail }) => {
  // detail이 존재하고 시리즈 또는 에피소드가 있는지 확인
  const hasEpisodesOrSeries = detail && (detail?.belongs_to_collection || detail?.episodes?.length > 0 || detail?.type === 'tv');

  const handleTabClick = (tab, content) => {
    changeContent(tab, content);
  };

  return (
    <TabMenu>
      {hasEpisodesOrSeries && (
        <li
          className={activeTab === 'episode' ? 'active' : ''}
          onClick={() => handleTabClick('episode', <Episode />)}
        >
          에피소드
        </li>
      )}
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
