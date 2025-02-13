import { useEffect } from 'react';
import { HeroSectionWrapper } from '../style';
import { StyledButton } from '../../../common/button/style';
import InfoSection from './InfoSection';
import ReviewSection from './ReviewSection';
import { useDispatch, useSelector } from 'react-redux';
import { getContentDetail } from '../../../store/modules/getThunk';
import { useLocation } from 'react-router';
import { detailActions } from '../../../store/modules/detailSlice';

const HeroSection = ({ changeContent, id }) => {
  const dispatch = useDispatch();
  const { detail, loading, error, cachedImages } = useSelector((state) => state.detailR);
  const { state } = useLocation();

  useEffect(() => {
    if (id && state?.type) {
      dispatch(getContentDetail({ type: state.type, id }));
    }

    return () => {
      dispatch(detailActions.clearDetail());
    };
  }, [dispatch, id, state?.type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;

  const { trailer } = detail.videoData;
  const { title, overview, backdrop_path, poster_path } = detail;
  const opts = trailer
    ? [
        'autoplay=1',
        'mute=1',
        'modestbranding=1',
        'showinfo=0',
        'controls=0',
        'loop=1',
        'rel=0',
        'playlist=' + trailer.key,
      ].join('&')
    : '';
  const imagePath = backdrop_path || poster_path;
  const imageUrl = cachedImages[imagePath] || `https://image.tmdb.org/t/p/w1280${imagePath}`;
  return (
    <HeroSectionWrapper>
      <h1>{title}</h1>
      <StyledButton $variant="primary" $size="large">
        재생하기
      </StyledButton>
      <div>
        {trailer ? (
          <div>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?${opts}`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media fullscreen;"
              // allowFullScreen
              style={{ pointerEvents: 'none', width: '100%', height: '500px' }}
            ></iframe>
          </div>
        ) : (
          <div>
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
              }}
            />
          </div>
        )}
      </div>
      <div className="actions">
        <button img="./public/icons/util/heart/off.svg">관심</button>
        <button img="./public/icons/util/share.svg">공유</button>
        <button img="./public/icons/util/review.svg" onClick={() => changeContent(<ReviewSection />)}>
          리뷰
        </button>
      </div>
      <div className="description" onClick={() => changeContent('detail', <InfoSection data={detail} />)}>
        {overview}
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
