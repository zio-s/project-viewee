import { useState } from 'react';
import EpisodeList from './components/Episode';

import { Container } from './style';
import DetailPageNav from './components/DetailPageNav';
import HeroSection from './components/HeroSection';
import { useParams } from 'react-router';

const Detail = () => {
  const [activeTab, setActiveTab] = useState('episode');
  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />);
  const { id } = useParams();

  const changeContent = (tab, content) => {
    setActiveTab(tab);
    setActiveTabContent(content);
  };

  return (
    <Container>
      <HeroSection changeContent={changeContent} id={id} />

      <DetailPageNav activeTab={activeTab} changeContent={changeContent} />

      <div>{activeTabContent}</div>
    </Container>
  );
};

export default Detail;
