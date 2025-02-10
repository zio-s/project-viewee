import { useEffect, useState } from 'react';
import EpisodeList from './components/EpisodeList';
import ReviewSection from './components/ReviewSection';
import InfoSection from './components/InfoSection';
import { Container, PlayButton, Description } from './style';
import DetailPageNav from './components/DetailPageNav';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getContentDetail } from '../../store/modules/getThunk';
import { detailActions } from '../../store/modules/detailSlice';

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state.detailR);

  useEffect(() => {
    if (id && state?.type) {
      dispatch(getContentDetail({ type: state.type, id }));
    }

    return () => {
      dispatch(detailActions.clearDetail());
    };
  }, [dispatch, id, state?.type]);

  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />);

  const changeContent = (content) => {
    setActiveTabContent(content);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;
  const bgurl = `https://image.tmdb.org/t/p/w500/`;
  return (
    <Container>
      <div className="video-header">
        <h1>{detail.title || detail.name}</h1>
        <PlayButton>재생하기</PlayButton>
        <div className="actions">
          <button>관심</button>
          <button>공유</button>
          {/* 데이터 이미지 사용방법 */}
          <img src={`${bgurl}/${detail.poster_path}`} alt="" />

          <button onClick={() => changeContent(<ReviewSection />)}>리뷰</button>
        </div>
        <Description onClick={() => changeContent(<InfoSection />)}>{detail.overview}</Description>
      </div>

      <DetailPageNav activeTab={activeTabContent} changeContent={changeContent} />

      <div>{activeTabContent}</div>
    </Container>
  );
};

export default Detail;
