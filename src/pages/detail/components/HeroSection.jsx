import { useEffect } from "react";
import { HeroSectionWrapper, BackgroundContent, HeroContent, Actions, StyledButton, Buttons } from "../style";
import InfoSection from "./InfoSection";
import ReviewSection from "./ReviewSection";
import { useDispatch, useSelector } from "react-redux";
import { getContentDetail } from "../../../store/modules/getThunk";
import { useLocation } from "react-router";
import { detailActions } from "../../../store/modules/detailSlice";

const HeroSection = ({ changeContent, id }) => {
  const dispatch = useDispatch();
  const { detail, loading, error, cachedImages } = useSelector((state) => state.detailR);
  const { state } = useLocation();

  useEffect(() => {
    if (id && state?.type) {
      dispatch(getContentDetail({ type: state.type, id }));
    }
    return () => {
      dispatch(detailActions.clearDetail());
    };
  }, [dispatch, id, state?.type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;

  const { trailer } = detail.videoData;
  const { title, overview, backdrop_path, poster_path } = detail;
  const opts = trailer
    ? [
        "autoplay=1",
        "mute=1",
        "modestbranding=1",
        "showinfo=0",
        "controls=0",
        "loop=1",
        "rel=0",
        "playlist=" + trailer.key,
      ].join("&")
    : "";
  const imagePath = backdrop_path || poster_path;
  const imageUrl = cachedImages[imagePath] || `https://image.tmdb.org/t/p/w1280${imagePath}`;

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...더보기` : text;
  };

  const { release_date, runtime, genres, certification } = detail;
  const releaseYear = release_date ? release_date.split("-")[0] : "미정";
  const formattedRuntime = runtime ? `${runtime}분` : "미정";
  const genreNames = genres?.map((genre) => genre.name).join(", ") || "미정";
  const getRating = () => {
    const releaseDates = detail?.release_dates?.results;
    if (!releaseDates) return '등급 정보 없음';
    const koreanRelease = releaseDates.find((item) => item.iso_3166_1 === 'KR');
    const certification = koreanRelease?.release_dates[0]?.certification;
    const ratingMap = {
      ALL: '전체 관람가',
      12: '12세 관람가',
      15: '15세 관람가',
      18: '청소년 관람불가',
      G: '전체 관람가',
      PG: '12세 관람가',
      'PG-13': '15세 관람가',
      R: '청소년 관람불가',
      'NC-17': '청소년 관람불가',
    };
    return ratingMap[certification] || '등급 정보 없음';
  };


  return (
    <HeroSectionWrapper>
      <BackgroundContent>
        {trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?${opts}`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
          ></iframe>
        ) : (
          <img src={imageUrl} alt={title} />
        )}
      </BackgroundContent>
      <div className = 'inner'>
        <HeroContent>
        <h1>{title}</h1>
        <p>
        {releaseYear} | {formattedRuntime} | {genreNames} | {getRating()}
        </p>

        <Buttons>
        <StyledButton $variant="primary" $size="large">
          미리보기
        </StyledButton> 
        <Actions>
          <div>
            <svg width="32" height="32" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.90234 20.2137C3.90234 29.1284 11.373 37.8965 23.1756 45.43C23.615 45.702 24.2427 45.995 24.6822 45.995C25.1216 45.995 25.7495 45.702 26.2098 45.43C37.9913 37.8965 45.462 29.1284 45.462 20.2137C45.462 12.8058 40.377 7.57422 33.5968 7.57422C29.7254 7.57422 26.5865 9.41573 24.6822 12.2408C22.8198 9.43666 19.639 7.57422 15.7676 7.57422C8.98745 7.57422 3.90234 12.8058 3.90234 20.2137ZM7.27149 20.2137C7.27149 14.6473 10.8708 10.9434 15.7257 10.9434C19.6599 10.9434 21.9198 13.3917 23.2591 15.4844C23.8241 16.3214 24.18 16.5516 24.6822 16.5516C25.1845 16.5516 25.4984 16.3005 26.1052 15.4844C27.5491 13.4336 29.7254 10.9434 33.6386 10.9434C38.4936 10.9434 42.0929 14.6473 42.0929 20.2137C42.0929 27.9982 33.8688 36.3899 25.1216 42.2074C24.9123 42.3538 24.7659 42.4584 24.6822 42.4584C24.5984 42.4584 24.452 42.3538 24.2636 42.2074C15.4955 36.3899 7.27149 27.9982 7.27149 20.2137Z" 
            fill="currentColor"/>  
            </svg>
            관심
          </div>  

          <div>
            <svg width="32" height="32" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">  
            <path d="M37.832 34.4369C36.2487 34.4369 34.832 35.0619 33.7487 36.041L18.8945 27.3952C18.9987 26.916 19.082 26.4369 19.082 25.9369C19.082 25.4368 18.9987 24.9577 18.8945 24.4785L33.582 15.916C34.707 16.9577 36.1862 17.6035 37.832 17.6035C41.2904 17.6035 44.082 14.8118 44.082 11.3535C44.082 7.89518 41.2904 5.10352 37.832 5.10352C34.3737 5.10352 31.582 7.89518 31.582 11.3535C31.582 11.8535 31.6654 12.3327 31.7695 12.8118L17.082 21.3744C15.957 20.3327 14.4779 19.6868 12.832 19.6868C9.3737 19.6868 6.58203 22.4785 6.58203 25.9369C6.58203 29.3952 9.3737 32.1869 12.832 32.1869C14.4779 32.1869 15.957 31.541 17.082 30.4993L31.9154 39.1452C31.8112 39.5827 31.7487 40.041 31.7487 40.5202C31.7487 43.8744 34.4779 46.5827 37.832 46.5827C41.1862 46.5827 43.9154 43.8744 43.9154 40.5202C43.9154 37.166 41.1862 34.4369 37.832 34.4369ZM37.832 9.27018C38.9779 9.27018 39.9154 10.2077 39.9154 11.3535C39.9154 12.4993 38.9779 13.4368 37.832 13.4368C36.6862 13.4368 35.7487 12.4993 35.7487 11.3535C35.7487 10.2077 36.6862 9.27018 37.832 9.27018ZM12.832 28.0202C11.6862 28.0202 10.7487 27.0827 10.7487 25.9369C10.7487 24.791 11.6862 23.8535 12.832 23.8535C13.9779 23.8535 14.9154 24.791 14.9154 25.9369C14.9154 27.0827 13.9779 28.0202 12.832 28.0202ZM37.832 42.6035C36.6862 42.6035 35.7487 41.666 35.7487 40.5202C35.7487 39.3744 36.6862 38.4369 37.832 38.4369C38.9779 38.4369 39.9154 39.3744 39.9154 40.5202C39.9154 41.666 38.9779 42.6035 37.832 42.6035Z" 
            fill="currentColor"/>
            </svg>
            공유
          </div>

          <div>
            <svg width="32" height="32" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.1758 7.18945H10.4883C9.03915 7.19358 7.65054 7.77107 6.62585 8.79577C5.60115 9.82046 5.02365 11.2091 5.01953 12.6582V31.4082C5.02365 32.8573 5.60115 34.2459 6.62585 35.2706C7.65054 36.2953 9.03915 36.8728 10.4883 36.877H14.3945V44.6895L23.5469 37.0586C23.6874 36.9412 23.8647 36.8769 24.0479 36.877H40.1758C41.6249 36.8728 43.0135 36.2953 44.0382 35.2706C45.0629 34.2459 45.6404 32.8573 45.6445 31.4082V12.6582C45.6404 11.2091 45.0629 9.82046 44.0382 8.79577C43.0135 7.77107 41.6249 7.19358 40.1758 7.18945V7.18945Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M15.957 25.1582C17.6829 25.1582 19.082 23.7591 19.082 22.0332C19.082 20.3073 17.6829 18.9082 15.957 18.9082C14.2311 18.9082 12.832 20.3073 12.832 22.0332C12.832 23.7591 14.2311 25.1582 15.957 25.1582Z" fill="currentColor"/>
            <path d="M25.332 25.1582C27.0579 25.1582 28.457 23.7591 28.457 22.0332C28.457 20.3073 27.0579 18.9082 25.332 18.9082C23.6061 18.9082 22.207 20.3073 22.207 22.0332C22.207 23.7591 23.6061 25.1582 25.332 25.1582Z" fill="currentColor"/>
            <path d="M34.707 25.1582C36.4329 25.1582 37.832 23.7591 37.832 22.0332C37.832 20.3073 36.4329 18.9082 34.707 18.9082C32.9811 18.9082 31.582 20.3073 31.582 22.0332C31.582 23.7591 32.9811 25.1582 34.707 25.1582Z" fill="currentColor"/>
            </svg>
            댓글
          </div>
        </Actions>
        </Buttons>
        <div className="description" onClick={() => {
  changeContent("detail", <InfoSection data={detail} />);
}}>
  {truncateText(overview, 95)}
</div>
      </HeroContent>
</div>
      
    </HeroSectionWrapper>
  );
};

export default HeroSection;
