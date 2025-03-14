import { useEffect, useState } from 'react';
import { VisualWrap, SectionWrapper, NewCardsSectionTitle, NewMoreLink, EventSectionWrapper, HomeWrap } from './style';
import SwiperSection from './components/SwiperSection';
import ContentSwiper from './components/ContentSwiper';
import MarqueeSection from './components/MarqueeSection';
import MarqueeSection2 from './components/MarqueeSection2';
import TopRated from './components/TopRated';
import SpecialEdition from './components/SpecialEdition';
import TagSection from './components/TagSection';
import { useDispatch, useSelector } from 'react-redux';
import { MainPageData } from '../../store/modules/getThunk';
import NowPlaying from './components/NowPlaying';
import Recommend from './components/Recommend';
import SpecialEdition2 from './components/SpecialEdition2';
import SpecialEdition2Back from './components/SpecialEdition2Back';
import SpecialEditionBack from './components/SpeicialEditionBack';
import PopupBanner from '../../common/popup/PopupBanner';
import { Link } from 'react-router';

const Home = () => {
  const dispatch = useDispatch();
  const { trending, hot, review, upcoming, nowPlaying, loading } = useSelector((state) => state.tmdbR);
  const [showFirst, setShowFirst] = useState(Math.random() < 0.5);

  useEffect(() => {
    dispatch(MainPageData());
    // window.scrollTo(0, 0);
  }, [dispatch]);

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSelectGenre = (genreId) => {
    setSelectedGenre(genreId);
  };

  // 컨텐츠 클릭 핸들러
  // const handleContentClick = (content) => {
  //   dispatch(addToContinueWatching(content));
  // };
  return (
    <HomeWrap>
      <SwiperSection />
      <VisualWrap>
        <SectionWrapper>
          <TagSection />
        </SectionWrapper>
        <SectionWrapper>
          <TopRated hotData={trending} />
        </SectionWrapper>

        {showFirst ? (
          <EventSectionWrapper>
            <SpecialEditionBack />
            <SpecialEdition />
          </EventSectionWrapper>
        ) : (
          <EventSectionWrapper>
            <SpecialEdition2Back />
            <SpecialEdition2 />
          </EventSectionWrapper>
        )}

        <SectionWrapper>
          <NowPlaying nowPlaying={nowPlaying} />
        </SectionWrapper>
      </VisualWrap>
      <div>
        <Link to="/tv/126485">
          <img src="/images/lineBanner1.png" alt="banner" className="lineBanner" />
        </Link>
      </div>
      <VisualWrap>
        <NewCardsSectionTitle>
          지구에서 나만 안본 그 작품
          <NewMoreLink href="./page/nowplaying.html" className="more">
            <svg className="moreIcon" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_630_1220)">
                <path
                  d="M35.0831 26.2461C35.0831 25.7229 34.874 25.2416 34.4763 24.865L17.9026 8.62612C17.526 8.27037 17.0656 8.08203 16.5215 8.08203C15.4542 8.08203 14.6172 8.89816 14.6172 9.98633C14.6172 10.5095 14.8265 10.9908 15.1613 11.3465L30.3957 26.2461L15.1613 41.1456C14.8265 41.5013 14.6172 41.9619 14.6172 42.5058C14.6172 43.594 15.4542 44.4102 16.5215 44.4102C17.0656 44.4102 17.526 44.2219 17.9026 43.8451L34.4763 27.6272C34.874 27.2297 35.0831 26.7692 35.0831 26.2461Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_630_1220">
                  <rect width="20.4659" height="36.3491" fill="white" transform="translate(14.6172 8.08203)" />
                </clipPath>
              </defs>
            </svg>
          </NewMoreLink>
        </NewCardsSectionTitle>
      </VisualWrap>

      <MarqueeSection />
      <MarqueeSection2 />
      <VisualWrap>
        <SectionWrapper>
          <ContentSwiper reviewData={review} />
        </SectionWrapper>

        <SectionWrapper>
          <Recommend hotData={hot} />
        </SectionWrapper>
        <PopupBanner />
      </VisualWrap>
      <div>
        <Link to="/subscribe">
          <img src="/images/lineBanner2.png" alt="banner" className="lineBanner" />
        </Link>
      </div>
    </HomeWrap>
  );
};

export default Home;
