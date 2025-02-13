import React, { useState, useEffect } from 'react';
import { TabMenu } from '../style';
import Recommended from './Recommended';
import Episode from './Episode';
import InfoSection from './InfoSection';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DetailPageNav = ({ activeTab, changeContent }) => {
  const [hasEpisodes, setHasEpisodes] = useState(false);
  const { detail, loading, error } = useSelector((state) => state.detailR);

  useEffect(() => {
    const checkEpisodes = async () => {
      if (!detail) return;

      if (detail?.belongs_to_collection) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/collection/${detail.belongs_to_collection.id}`,
            { params: { api_key: '89add566d52fc4fb04e06c4ff4a557b7', language: 'ko-KR' } }
          );
          
          const hasValidParts = response.data.parts && response.data.parts.length > 0;
          setHasEpisodes(hasValidParts);
        } catch (error) {
          setHasEpisodes(false);
        }
      } else if (detail?.episodes?.length > 0 || detail?.seasons?.length > 0) {
        setHasEpisodes(true);
      } else {
        setHasEpisodes(false);
      }
    };

    checkEpisodes();
  }, [detail]);

  useEffect(() => {
    if (!hasEpisodes && activeTab === 'episode') {
      changeContent('recommend', <Recommended />);
    }
  }, [hasEpisodes, activeTab, changeContent]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;

  const handleTabClick = (tab, content) => {
    changeContent(tab, content);
  };

  return (
    <TabMenu>
      {hasEpisodes && (
        <li
          className={activeTab === 'episode' ? 'active' : ''}
          onClick={() => handleTabClick('episode', <Episode detail={detail} />)}>
          에피소드
        </li>
      )}
      <li
        className={activeTab === 'recommend' ? 'active' : ''}
        onClick={() => handleTabClick('recommend', <Recommended />)}>
        추천
      </li>
      <li
        className={activeTab === 'detail' ? 'active' : ''}
        onClick={() => handleTabClick('detail', <InfoSection />)}>
        상세정보
      </li>
    </TabMenu>
  );
};

export default DetailPageNav;