import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardBox } from '../style';
import { getContentDetail, getEpisodeDetails } from '../../../store/modules/getThunk';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";

const EpisodeList = () => {
  const { detail, loading, error, seasonDetails, episodeDetails, collection } = useSelector((state) => state.detailR);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSeasonClick = (e, seasonNumber) => {
    e.preventDefault();

    if (selectedSeason === seasonNumber) {
      setSelectedSeason(null);
    } else {
      setSelectedSeason(seasonNumber);
      if (!episodeDetails[seasonNumber]) {
        dispatch(getEpisodeDetails({ tvId: detail.id, seasonNumber }));
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;

  const handleMovieClick = (movieId) => {
    dispatch(getContentDetail({ type: 'movie', id: movieId }));
    navigate(`/movie/${movieId}`);
  };

  if (detail.seasons && seasonDetails) {
    return (
      <CardBox>
        {seasonDetails.map((season) => (
          <div
            key={season.id}
            className={`episode-item ${selectedSeason === season.season_number ? 'active' : ''}`}
          >
            <div
              className="pic"
              onClick={(e) => handleSeasonClick(e, season.season_number)}
              style={{ cursor: 'pointer' }}
            >
              {season.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={season.name} />
              )}
            </div>
            <div className="text-info">
              <h2>{season.name}</h2>
              <h3>
                {season.air_date}, {season.episodes?.length}개 에피소드
              </h3>
              <p>{season.overview}</p>
            </div>

            {selectedSeason === season.season_number && episodeDetails[season.season_number] && (
              <div className="episodes-list">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={8}
                  navigation
                  pagination={{ clickable: true }}
                >
                  {episodeDetails[season.season_number].map((episode) => (
                    <SwiperSlide key={episode.id}>
                      <div className="episode-detail">
                        <h4>
                          {episode.episode_number}. {episode.name}
                        </h4>
                        <p>{episode.overview || '줄거리 정보가 없습니다.'}</p>
                        {episode.still_path && (
                          <img src={`https://image.tmdb.org/t/p/w500${episode.still_path}`} alt={episode.name} />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        ))}
      </CardBox>
    );
  }
  return <div>컬렉션 또는 시즌 데이터가 없습니다.</div>;
};

export default EpisodeList;
