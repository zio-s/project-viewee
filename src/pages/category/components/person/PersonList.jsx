import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PersonCard } from './style';
import { getContentDetail } from '../../../../store/modules/getThunk';

const PersonList = ({ searchData, category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personResults = searchData?.filter((item) => item.media_type === 'person');

  if (!personResults || personResults.length === 0) {
    return null;
  }

  const handleWorkClick = (work) => {
    const type = work.media_type || (work.first_air_date ? 'tv' : 'movie');

    dispatch(
      getContentDetail({
        type,
        id: work.id,
      })
    );
    navigate(`/category/${work.id}`);
  };

  return (
    <PersonCard>
      {personResults.map((person) => (
        <div key={person.id}>
          <div className="person-card">
            {person.profile_path && (
              <img
                className="profile-image"
                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                alt={person.name}
              />
            )}
            <div className="person-info">
              <h2 className="person-name">{person.name}</h2>
              {person.original_name && person.original_name !== person.name && (
                <p className="original-name">{person.original_name}</p>
              )}
              {person.known_for_department && <p className="department">{person.known_for_department}</p>}
            </div>
          </div>

          {person.known_for && person.known_for.length > 0 && (
            <div className="known-for">
              <h3 className="known-for-title">대표작</h3>
              <div className="known-for-list">
                {person.known_for.map((work) => (
                  <div
                    key={work.id}
                    className="movie-card"
                    onClick={() => handleWorkClick(work)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="movie-poster-container">
                      {work.poster_path ? (
                        <img
                          className="movie-poster"
                          src={`https://image.tmdb.org/t/p/w500${work.poster_path}`}
                          alt={work.title || work.name}
                        />
                      ) : (
                        <div className="movie-poster no-image" />
                      )}
                    </div>
                    <p className="movie-title">{work.title || work.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </PersonCard>
  );
};

export default PersonList;
