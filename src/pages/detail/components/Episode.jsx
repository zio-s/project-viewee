import React from 'react';
import { EpisodeWrap } from '../style';
import EpisodeList from './EpisodeList';

const Episode = () => {
  return (
    <EpisodeWrap>
    <div className='EpisodeContainer'>
      <EpisodeList/>
    </div>
    </EpisodeWrap>
  );
};

export default Episode;
