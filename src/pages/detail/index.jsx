import { useState, useCallback } from 'react';
import EpisodeList from './components/EpisodeList';
import { Container } from './style';
import HeroSection from './components/HeroSection'
import DetailPageNav from './components/DetailPageNav';
import { useParams } from 'react-router';

const Detail = () => {
  const [activeTab, setActiveTab] = useState('episode');
  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />);
  const { id } = useParams();

  const changeContent = useCallback((tab, content) => {
    setActiveTab(tab);
    setActiveTabContent(content);
  }, []);

  return (
    <Container>
      <HeroSection changeContent={changeContent} id={id} />
      <DetailPageNav activeTab={activeTab} changeContent={changeContent} />
      <div>{activeTabContent}</div>
    </Container>
  );
};

export default Detail;
