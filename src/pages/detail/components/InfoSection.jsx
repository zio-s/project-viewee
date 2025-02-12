import React from 'react';
import { MovieInfoSection } from '../style';

const InfoSection = () => {
  return (
    <MovieInfoSection>
    <div className="movie-content">
      <div className="poster-wrapper">
        <img src="" alt="포스터" />
      </div>
      
      <div className="info-wrapper">
        <h2>영화 제목</h2>
        <div className="movie-details">
          <div className="detail-row">
            <span className="label">장르</span>
            <span className="value">액션, 드라마</span>
          </div>
          <div className="detail-row">
            <span className="label">출연</span>
            <span className="value">조인성, 김윤주</span>
          </div>
          <div className="detail-row">
            <span className="label">감독</span>
            <span className="value">조인성</span>
          </div>
          <div className="detail-row">
            <span className="label">등급</span>
            <span className="value">15세 이상</span>
          </div>
        </div>
        
        <div className="navigation-icons">
        </div>
      </div>
    </div>
    </MovieInfoSection>
  );
};

export default InfoSection;
