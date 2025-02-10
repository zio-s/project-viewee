import React, { useState } from 'react';
import EpisodeList from './components/EpisodeList';
import ReviewSection from './components/ReviewSection';
import InfoSection from './components/InfoSection';
import { Container, PlayButton, Description } from './style';
import DetailPageNav from './components/DetailPageNav';

const Detail = () => {
  const [activeTabContent, setActiveTabContent] = useState(<EpisodeList />); 

  const changeContent = (content) => {
    setActiveTabContent(content);
  };

  return (
    <Container>
      <div className="video-header">
        <h1>모가디슈</h1>
        <PlayButton>재생하기</PlayButton>
        <div className="actions">
          <button>관심</button>
          <button>공유</button>
          <button onClick={() => changeContent(<ReviewSection/>)}>리뷰</button>
        </div>
        <Description onClick={() => changeContent(<InfoSection />)}>
          대전으로 고립된... 줄거리 클릭 시 상세정보로 이동
        </Description>
      </div>

      <DetailPageNav activeTab={activeTabContent} changeContent={changeContent} />

      <div>{activeTabContent}</div> 
    </Container>
  );
};

export default Detail;