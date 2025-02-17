import React from 'react';
import { HoverModalWrap, HoverModalWrapper } from '../style';
import PlayButton from '../../../ui/button/playButton';

const HoverModal = () => {
  return (
    <HoverModalWrap>
      <div className="videoArea"></div>
      <div className="infoArea">
        <div className="iconArea">
          <PlayButton className="button"></PlayButton>
          <PlayButton className="button"></PlayButton>
          <PlayButton className="button"></PlayButton>
          <PlayButton className="moreButton"></PlayButton>
        </div>
        <div className="textArea">
          <span className="age">all</span> <span>5.0</span> <span>드라마</span>
        </div>
        <div className="textArea">
          <span>드라마</span> <span>드라마</span> <span>드라마</span>
        </div>
      </div>
    </HoverModalWrap>
  );
};

export default HoverModal;
