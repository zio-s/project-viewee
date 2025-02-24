import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardBox } from '../style';
import { getContentDetail, getEpisodeDetails } from '../../../store/modules/getThunk';
import { useNavigate } from 'react-router';

const EpisodeList = () => {
  const { detail, loading, error, seasonDetails, episodeDetails, collection } = useSelector((state) => state.detailR);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSeasonClick = (e, seasonNumber) => {
    e.preventDefault();

    const currentPosition = window.scrollY;

    if (selectedSeason === seasonNumber) {
      setSelectedSeason(null);
    } else {
      setSelectedSeason(seasonNumber);
      if (!episodeDetails[seasonNumber]) {
        dispatch(getEpisodeDetails({ tvId: detail.id, seasonNumber }));
      }
    }
    setTimeout(() => {
      window.scrollTo(0, currentPosition);
    }, 10);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;

  const converRuntime = (minutes) => {
    if (!minutes || minutes === 0) return '시간 정보 없음';

    const hours = Math.floor(minutes / 60);
    const Minutes = minutes % 60;

    if (hours > 0) {
      return `${hours}시간 ${Minutes}분`;
    }
    return `${Minutes}분`;
  };

  const handleMovieClick = (movieId) => {
    dispatch(getContentDetail({ type: 'movie', id: movieId }));
    navigate(`/movie/${movieId}`);
  };

  if (detail.belongs_to_collection && collection) {
    return (
      <CardBox>
        {collection.parts?.map((movie) => (
          <div key={movie.id} className="episode-item">
            <div className="pic" onClick={() => handleMovieClick(movie.id)}>
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              )}
            </div>
            <div>
            <h2>{movie.title}</h2>
            <h3>
              {movie.release_date}, {converRuntime(movie.runtime)}
            </h3>
            </div>
            <p>{movie.overview}</p>
          </div>
        ))}
      </CardBox>
    );
  }

  // TV 시리즈인 경우
  if (detail.seasons && seasonDetails) {
    return (
      <CardBox>
        {seasonDetails.map((season) => (
          <div
            key={season.id}
<<<<<<< HEAD
            className={`episode-item ${selectedSeason === season.season_number ? 'active' : ''}`} 
=======
            className={`episode-item ${selectedSeason === season.season_number ? 'active' : ''}`} // ✅ active 클래스 추가
>>>>>>> develop
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
            </div>
            <p>{season.overview}</p>
            <>
              {selectedSeason === season.season_number && episodeDetails[season.season_number] && (
                <div className="episodes-list">
                  {episodeDetails[season.season_number].map((episode) => (
                    <div key={episode.id} className="episode-detail">
                      <h4>
                        {episode.episode_number}. {episode.name}
                      </h4>
                      {episode.overview || '줄거리 정보가 없습니다.'}
                      <img src={`https://image.tmdb.org/t/p/w500${episode.still_path}`} alt={episode.name} />
                    </div>
                  ))}
                </div>
              )}
            </>
          </div>
        ))}
      </CardBox>
    );
  }
  return <div>컬렉션 또는 시즌 데이터가 없습니다.</div>;
};

export default EpisodeList;
