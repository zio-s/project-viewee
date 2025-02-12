import React, { useState } from 'react';
import EpisodeList from './components/Episode';
import ReviewSection from './components/ReviewSection';
import InfoSection from './components/InfoSection';
import { Container } from './style';
import DetailPageNav from './components/DetailPageNav';
import HeroSection from './components/HeroSection';

const Detail = () => {
  const [activeTab, setActiveTab] = useState('episode'); 
  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />); 

  const changeContent = (tab, content) => {
    setActiveTab(tab); 
    setActiveTabContent(content); 
  };

  return (
    <Container>
      <HeroSection changeContent={changeContent} />
      
      <DetailPageNav activeTab={activeTab} changeContent={changeContent} />
      
      <div>{activeTabContent}</div> 
    </Container>
  );
};

export default Detail;
