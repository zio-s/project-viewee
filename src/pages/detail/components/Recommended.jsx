import React from 'react';
import { useSelector } from 'react-redux';
import { RecommendedWrapper } from '../style';
import RecommendedMovies from './RecommendedMovies';

const Recommended = () => {
  const { loading, error } = useSelector((state) => state.detailR);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {error}</div>;

  return (
    <RecommendedWrapper>
      <div className='RecommendedContainer'>
        <RecommendedMovies />
      </div>
    </RecommendedWrapper>
  );
};

export default Recommended;
