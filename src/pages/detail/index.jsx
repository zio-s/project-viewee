import { useState, useCallback, useEffect } from 'react';
import EpisodeList from './components/EpisodeList';
import { Container } from './style';
import HeroSection from './components/HeroSection';
import DetailPageNav from './components/DetailPageNav';
import { useLocation, useParams } from 'react-router';
import { getContentDetail } from '../../store/modules/getThunk';
import { useDispatch } from 'react-redux';

const Detail = () => {
  const [activeTab, setActiveTab] = useState('episode');
  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />);
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const changeContent = useCallback((tab, content) => {
    setActiveTab(tab);
    setActiveTabContent(content);
  }, []);
  useEffect(() => {
    const type = location.pathname.split('/')[1];
    dispatch(
      getContentDetail({
        type: type,
        id: id,
      })
    );
    window.scrollTo(0, 0);
  }, [dispatch, id, location.pathname]);
  return (
    <Container>
      <HeroSection changeContent={changeContent} id={id} />
      <DetailPageNav activeTab={activeTab} changeContent={changeContent} />
      <div>{activeTabContent}</div>
    </Container>
  );
};

export default Detail;
