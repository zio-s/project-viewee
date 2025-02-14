import React, { useState, useEffect } from 'react';
import { TabMenu } from '../style';
import Recommended from './Recommended';
import Episode from './Episode';
import InfoSection from './InfoSection';
import { useDispatch, useSelector } from 'react-redux';
import { getCollection } from '../../../store/modules/getThunk'; 

const DetailPageNav = ({ activeTab, changeContent }) => {
  const [hasEpisodes, setHasEpisodes] = useState(false);
  const [currentTab, setCurrentTab] = useState(activeTab);
  const dispatch = useDispatch();
  const { detail, collection, loading, error } = useSelector((state) => state.detailR);

  useEffect(() => {
    if (!detail || !detail.belongs_to_collection) return;
  
    const fetchCollection = async () => {
      await dispatch(getCollection(detail.belongs_to_collection.id));  
    };
  
    fetchCollection();
  }, [dispatch, detail]);

  useEffect(() => {
    if (collection && collection.parts && collection.parts.length > 0) {
      setHasEpisodes(true);
    } else if (detail?.episodes?.length > 0 || detail?.seasons?.length > 0) {
      setHasEpisodes(true);
    } else {
      setHasEpisodes(false);
    }
  }, [collection, detail]);

  useEffect(() => {
    if (hasEpisodes) {
      setCurrentTab('episode');
      changeContent('episode', <Episode />);
    } else {
      setCurrentTab('recommend');
      changeContent('recommend', <Recommended />);
    }
  }, [hasEpisodes, changeContent]);

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
