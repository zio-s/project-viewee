import React from 'react';
import { RecommendedWrapper } from '../style';
import RecommendedMovies from './RecommendedMovies';

const Recommended = () => {
  return (
    <RecommendedWrapper>
    <div className='RecommendedContainer'>
      <RecommendedMovies/>
    </div>
    </RecommendedWrapper>
  );
};

export default Recommended;