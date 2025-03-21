import React, { useEffect } from 'react';
import { MovieInfoSection } from '../style';
import { useDispatch, useSelector } from 'react-redux';
import { getContentDetail } from '../../../store/modules/getThunk';
import { useLocation } from 'react-router';

const InfoSection = ({ changeContent, id }) => {
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state?.detailR);
  const { state } = useLocation();

  useEffect(() => {
    if (id && state?.type && !detail) {
      dispatch(getContentDetail({ type: state?.type, id }));
    }
  }, [dispatch, detail, id, state?.type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;

  const isMovie = !!detail?.original_title;
  const isTV = !!detail?.original_name;
  const {
    title,
    original_name,
    original_title,
    backdrop_path,
    poster_path,
    release_date,
    first_air_date,
    genres,
    credits,
    overview,
  } = detail;
  const contentTitle = title || original_name || original_title;
  const releaseDate = isMovie ? release_date : isTV ? first_air_date : first_air_date;
  const genreList = Array.isArray(genres) ? genres : [genres];
  const genreText = genreList.map((genre) => genre.name).join(',') || '장르 정보 없음';
  const cast =
    credits?.cast
      .slice(0, 6)
      .map((actor) => actor.name)
      .join(',') || '출연진 정보 없음';
  const director = credits?.crew.find((member) => member.job || Writing === 'Director')?.name || '감독 정보 없음';
  const imagePath = backdrop_path || poster_path;

  const getRating = () => {
    const releaseDates = detail?.release_dates?.results;
    if (!releaseDates) return '등급 정보 없음';
    const koreanRelease = releaseDates.find((item) => item.iso_3166_1 === 'KR');
    const certification = koreanRelease?.release_dates[0]?.certification;

    const ratingMap = {
      ALL: <img src='../public/icons/age/square/ALL.svg' alt='전체 관람가' />,
      12: <img src='../public/icons/age/square/12.svg' alt='12세 관람가' />,
      15: <img src='../public/icons/age/square/15.svg' alt='15세 관람가' />,
      18: <img src='../public/icons/age/square/19.svg' alt='19세 관람가' />,
      G: <img src='../public/icons/age/square/ALL.svg' alt='전체 관람가' />,
      PG: <img src='../public/icons/age/square/12.svg' alt='12세 관람가' />,
      'PG-13': <img src='../public/icons/age/square/15.svg' alt='15세 관람가' />,
      R: <img src='../public/icons/age/square/19.svg' alt='19세 관람가' />,
      'NC-17': <img src='../public/icons/age/square/19.svg' alt='19세 관람가' />,
    };
    return ratingMap[certification] || '등급 정보 없음';
  };

  return (
    <MovieInfoSection>
      <div className="movie-content">
        <div className="poster-wrapper">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={contentTitle} />
        </div>
        <div className="info-wrapper">
          <h2>{contentTitle}</h2>
          <span className='overview'>{overview}</span>
          <div className="movie-details">
            <div className="detail-row">
              <span className="label">개봉</span>
              <span className="value">{releaseDate}</span>
            </div>
            <div className="detail-row">
              <span className="label">장르</span>
              <span className="value">{genreText}</span>
            </div>
            <div className="detail-row">
              <span className="label">출연</span>
              <span className="value">{cast}</span>
            </div>
            <div className="detail-row">
              <span className="label">감독</span>
              <span className="value">{director}</span>
            </div>
            <div className="detail-row">
              <span className="label">등급</span>
              <span className="value">{getRating()}</span>
            </div>
          </div>
          <div className="navigation-icons"></div>
        </div>
      </div>
    </MovieInfoSection>
  );
};

export default InfoSection;
