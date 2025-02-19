import { useState, useCallback, useEffect } from 'react';
import EpisodeList from './components/EpisodeList';
import { Container } from './style';
import HeroSection from './components/HeroSection';
import DetailPageNav from './components/DetailPageNav';
import { useParams } from 'react-router';
import { getContentDetail } from '../../store/modules/getThunk';
import { useDispatch } from 'react-redux';

const Detail = () => {
  const [activeTab, setActiveTab] = useState('episode');
  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />);
  const { id } = useParams();
  const dispatch = useDispatch();
  const changeContent = useCallback((tab, content) => {
    setActiveTab(tab);
    setActiveTabContent(content);
  }, []);
  useEffect(() => {
    dispatch(
      getContentDetail({
        type: 'movie',
        id: id,
      })
    );
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  return (
    <Container>
      <HeroSection changeContent={changeContent} id={id} />
      <DetailPageNav activeTab={activeTab} changeContent={changeContent} />
      <div>{activeTabContent}</div>
    </Container>
  );
};

export default Detail;
