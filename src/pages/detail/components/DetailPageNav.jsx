import React, { useState, useEffect } from 'react';
import { TabMenu } from '../style';
import Recommended from './Recommended';
import Episode from './Episode';
import InfoSection from './InfoSection';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DetailPageNav = ({ activeTab, changeContent }) => {
  const [hasEpisodes, setHasEpisodes] = useState(false);
  const [currentTab, setCurrentTab] = useState(activeTab);
  const { detail, loading, error } = useSelector((state) => state.detailR);

  useEffect(() => {
    const checkEpisodes = async () => {
      if (!detail) return;
  
      let validEpisodes = false;
  
      if (detail?.belongs_to_collection) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/collection/${detail.belongs_to_collection.id}`,
            { params: { api_key: '89add566d52fc4fb04e06c4ff4a557b7', language: 'ko-KR' } }
          );
          validEpisodes = response.data.parts && response.data.parts.length > 0;
        } catch {
          validEpisodes = false;
        }
      } else if (detail?.episodes?.length > 0 || detail?.seasons?.length > 0) {
        validEpisodes = true;
      }
  
      setHasEpisodes(validEpisodes);
    };
  
    checkEpisodes();
  }, [detail]);

  useEffect(() => {
    if (hasEpisodes) {
      setCurrentTab('episode');
      changeContent('episode', <Episode />);
    } else {
      setCurrentTab('recommend');
      changeContent('recommend', <Recommended />);
    }
  }, [hasEpisodes, detail]);
  
  useEffect(() => {
    if (activeTab === 'detail') {
      setCurrentTab('detail');
    }
  }, [activeTab]);
  

  const handleTabClick = (tab, content) => {
    setCurrentTab(tab);
    changeContent(tab, content);
  };
  

  return (
    <TabMenu>
      {hasEpisodes && (
        <li
          className={currentTab === 'episode' ? 'active' : ''}
          onClick={() => handleTabClick('episode', <Episode detail={detail} />)}
        >
          에피소드
        </li>
      )}
      <li
        className={currentTab === 'recommend' ? 'active' : ''}
        onClick={() => handleTabClick('recommend', <Recommended />)}
      >
        추천
      </li>
      <li
        className={currentTab === 'detail' ? 'active' : ''}
        onClick={() => handleTabClick('detail', <InfoSection />)}
      >
        상세정보
      </li>
    </TabMenu>
  );
};

export default DetailPageNav;
