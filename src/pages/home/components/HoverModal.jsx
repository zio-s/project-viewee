import React, { useState, useEffect } from 'react';
import { HoverModalWrap } from '../style';
import { StyledPlayButton } from '../../../ui/button/playButton/style';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/authSlice';

const PlayButton = ({ children, onClick, size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <StyledPlayButton $size={size} $fullWidth={fullWidth} onClick={onClick} {...props}>
      {children}
    </StyledPlayButton>
  );
};

const DownloadButton = ({ content }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user) || null;
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    if (user) {
      setIsDownloaded(user.downloaded?.some((item) => item.id === content?.id) || false);
    }
  }, [user, content]); // Redux 상태 변경 시, 다시 체크하도록 의존성 추가

  if (!content) {
    console.warn('🚨 DownloadButton: content 데이터가 없습니다.');
    return null;
  }

  const handleDownloadClick = (event) => {
    event.stopPropagation();
    console.log('✅ 다운로드 토글 실행됨:', content);
    dispatch(authActions.toggleDownloaded(content));
    setIsDownloaded((prev) => !prev); // 로컬 상태 업데이트로 즉각 반응
  };

  return (
    <PlayButton className="steamedButton" onClick={handleDownloadClick}>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 1 }}
        animate={{ scale: isDownloaded ? 1.2 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {isDownloaded ? (
          <motion.path
            d="M2 10L9 17L21 3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.path
            d="M0.667969 11.0491C0.667969 11.7054 1.21708 12.241 1.85993 12.241H10.5251V20.9063C10.5251 21.5491 11.0608 22.0982 11.7171 22.0982C12.3733 22.0982 12.9225 21.5491 12.9225 20.9063V12.241H21.5743C22.2171 12.241 22.7661 11.7054 22.7661 11.0491C22.7661 10.3929 22.2171 9.84375 21.5743 9.84375H12.9225V1.19197C12.9225 0.549107 12.3733 0 11.7171 0C11.0608 0 10.5251 0.549107 10.5251 1.19197V9.84375H1.85993C1.21708 9.84375 0.667969 10.3929 0.667969 11.0491Z"
            fill="white"
          />
        )}
      </motion.svg>
    </PlayButton>
  );
};

const LikeButton = ({ onLiked, onClick, content }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user) || null;

  if (!content) {
    console.warn('🚨 LikeButton: content 데이터가 없습니다.');
    return null;
  }

  const isLiked = user?.liked?.some((item) => item.id === content?.id) || false;

  const handleLikeClick = () => {
    console.log('✅ 좋아요 토글 실행됨:', content);
    dispatch(authActions.toggleLiked(content));
    setOnLiked(!onLiked);
  };

  return (
    <PlayButton className="likeButton" onClick={onClick}>
      <motion.svg
        width="35"
        height="35"
        viewBox="0 0 51 51"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 1 }}
        animate={{
          y: onLiked ? [-10, 0] : [0, -5, 0],
          rotate: onLiked ? [0, -10, 10, -5, 5, 0] : 0,
          scale: onLiked ? [1, 1.2, 1] : [1, 0.8, 1],
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <motion.path
          d="M4.69549 24.0373C4.58964 22.82 5.54918 21.7734 6.77099 21.7734H10.7486C11.8993 21.7734 12.832 22.7061 12.832 23.8568V43.6484C12.832 44.7991 11.8993 45.7318 10.7486 45.7318H8.492C7.41136 45.7318 6.51011 44.9055 6.4165 43.829L4.69549 24.0373Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={onLiked ? 'white' : 'none'}
          animate={{ fill: onLiked ? 'white' : 'none' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        <motion.path
          d="M19.082 23.2052C19.082 22.3347 19.6231 21.5555 20.4105 21.1844C22.1277 20.3749 25.0538 18.7461 26.3737 16.5448C28.0748 13.7077 28.3957 8.58172 28.4479 7.40758C28.4552 7.24322 28.4505 7.07866 28.4731 6.91569C28.7551 4.88225 32.6803 7.25773 34.1862 9.7694C35.0035 11.1325 35.1083 12.9234 35.0223 14.3217C34.9304 15.8177 34.4917 17.2629 34.0614 18.6988L33.1445 21.7573H44.4538C45.8354 21.7573 46.8342 23.0774 46.4587 24.4069L40.8646 44.2147C40.6112 45.1121 39.7922 45.7318 38.8597 45.7318H21.1654C20.0147 45.7318 19.082 44.7991 19.082 43.6484V23.2052Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={onLiked ? 'white' : 'none'}
          animate={{ fill: onLiked ? 'white' : 'none' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.svg>
    </PlayButton>
  );
};

const HoverModal = ({ reviewData, detailData }) => {
  const dispatch = useDispatch();
  const [onLiked, setOnLiked] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const navigate = useNavigate();
  const content = detailData?.detail || reviewData;

  useEffect(() => {
    if (detailData?.detail?.videos?.results) {
      const trailer = detailData.detail.videos.results.find(
        (video) => (video.type === 'Trailer' || video.type === 'Teaser') && video.site === 'YouTube'
      );
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    }
    console.log('showTrailer changed to:', showTrailer);
  }, [detailData]);
  useEffect(() => {
    console.log('🔥 HoverModal: content 값:', content);
  }, [content]);

  const handlePlayClick = () => {
    if (trailerKey) {
      setShowTrailer(true);
      setIsTrailerPlaying(true);
    }
  };

  const handleLikeClick = () => {
    console.log('✅ 좋아요 토글 실행됨:', content);
    dispatch(authActions.toggleLiked(content));
    setOnLiked(!onLiked);
  };

  const handleImageHover = () => {
    if (trailerKey) {
      setShowTrailer(true);
    }
  };
  const handleImageLeave = () => setShowTrailer(false);
  const onGo = (content) => {
    navigate(`/${content.media_type || 'tv'}/${content.id}`);
  };
  const getAgeRating = () => {
    if (content?.adult) return '19+';
    if (content?.content_ratings?.results) {
      const koreanRating = content.content_ratings.results.find((rating) => rating.iso_3166_1 === 'KR');
      return koreanRating ? koreanRating.rating : '15+';
    }
    return '15+';
  };

  const getEpisodeInfo = () => {
    if (detailData?.episodeDetails?.episode_count) {
      return `에피소드 ${detailData.episodeDetails.episode_count}개`;
    }
    if (detailData?.seasonDetails?.length) {
      return `시즌 ${detailData.seasonDetails.length}개`;
    }
    if (content?.number_of_episodes) {
      return `에피소드 ${content.number_of_episodes}개`;
    }
    return '';
  };

  const genres = content?.genres?.map((genre) => genre.name) || ['장르 정보 없음'];
  const rating = content?.vote_average?.toFixed(1) || '0.0';
  const opts = trailerKey
    ? [
        'autoplay=1',
        'mute=1',
        'modestbranding=1',
        'showinfo=0',
        'controls=0',
        'loop=1',
        'rel=0',
        'playlist=' + trailerKey,
      ].join('&')
    : '';
  return (
    <HoverModalWrap>
      <div className="videoArea" onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
        {showTrailer && trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?${opts}`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            style={{
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${content.poster_path || content.backdrop_path}`}
            alt={content.title || content.name}
          />
        )}
      </div>

      <div className="infoArea">
        <div className="iconArea">
          <PlayButton className="button" onClick={handlePlayClick}>
            <svg width="24" height="24" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.85811 26.5605C2.35142 27.4707 0.625 26.7488 0.625 25.1794V2.67301C0.625 1.13492 2.47699 0.475747 3.85811 1.29188L22.2838 12.2154C23.6022 13.0002 23.6336 14.8835 22.2838 15.6997L3.85811 26.5605Z"
                fill="white"
              />
            </svg>
          </PlayButton>
          <DownloadButton content={content} />
          <LikeButton onLiked={onLiked} onClick={handleLikeClick} content={content} />
          <PlayButton className="moreButton" onClick={() => onGo(content)}>
            <svg width="30" height="30" viewBox="0 0 51 51" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M35.0831 26.2461C35.0831 25.7229 34.874 25.2416 34.4763 24.865L17.9026 8.62612C17.526 8.27037 17.0656 8.08203 16.5215 8.08203C15.4542 8.08203 14.6172 8.89816 14.6172 9.98633C14.6172 10.5095 14.8265 10.9908 15.1613 11.3465L30.3957 26.2461L15.1613 41.1456C14.8265 41.5013 14.6172 41.9619 14.6172 42.5058C14.6172 43.594 15.4542 44.4102 16.5215 44.4102C17.0656 44.4102 17.526 44.2219 17.9026 43.8451L34.4763 27.6272C34.874 27.2297 35.0831 26.7692 35.0831 26.2461Z"
                fill="white"
              />
            </svg>
          </PlayButton>
        </div>

        <div className="textArea">
          <span className="age">{getAgeRating()}</span>
          <span className="dot"></span>
          <span id="starNumber">
            <svg width="20" height="20" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.983 46.7535C11.841 47.4232 12.9292 47.193 14.2266 46.2514L25.2966 38.111L36.3877 46.2514C37.685 47.193 38.7523 47.4232 39.6312 46.7535C40.4893 46.105 40.6775 45.0376 40.1544 43.51L35.7807 30.4939L46.9553 22.4582C48.2528 21.5375 48.776 20.5748 48.4412 19.5285C48.1064 18.524 47.1228 18.0218 45.5116 18.0427L31.8048 18.1264L27.6403 5.04743C27.1382 3.49888 26.3848 2.72461 25.2966 2.72461C24.2294 2.72461 23.476 3.49888 22.9739 5.04743L18.8095 18.1264L5.10275 18.0427C3.49141 18.0218 2.50787 18.524 2.17305 19.5285C1.8173 20.5748 2.36139 21.5375 3.65882 22.4582L14.8335 30.4939L10.4599 43.51C9.93673 45.0376 10.1251 46.105 10.983 46.7535Z"
                fill="#FFD034"
              />
            </svg>
            {rating}
          </span>
          {getEpisodeInfo() && (
            <>
              <span className="dot"></span>
              <span>{getEpisodeInfo()}</span>
            </>
          )}
        </div>

        <div className="textArea">
          {genres.map((genre, index) => (
            <React.Fragment key={index}>
              <span>{genre}</span>
              {index < genres.length - 1 && <span className="dot"></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </HoverModalWrap>
  );
};

export default HoverModal;
