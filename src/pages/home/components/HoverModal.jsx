import React from 'react';
import { HoverModalWrap, HoverModalWrapper } from '../style';
import { StyledPlayButton } from '../../../ui/button/playButton/style';

const contentData = {
  age: '15+', // 연령 제한
  rating: '4.7', // 평점
  episodes: '12개', // 에피소드 수
  genres: ['드라마', '로맨틱', '스릴러'], // 장르
};

const PlayButton = ({ children, size = 'medium', fullWidth = false, icon, ...props }) => {
  return (
    <StyledPlayButton $size={size} $fullWidth={fullWidth} {...props}>
      {children}
    </StyledPlayButton>
  );
};

const HoverModal = () => {
  return (
    <HoverModalWrap>
      <div className="videoArea"></div>
      <div className="infoArea">
        <div className="iconArea">
          <PlayButton className="button">
            <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.85811 26.5605C2.35142 27.4707 0.625 26.7488 0.625 25.1794V2.67301C0.625 1.13492 2.47699 0.475747 3.85811 1.29188L22.2838 12.2154C23.6022 13.0002 23.6336 14.8835 22.2838 15.6997L3.85811 26.5605Z"
                fill="white"
              />
            </svg>
          </PlayButton>
          <PlayButton className="steamedButton">찜</PlayButton>
          <PlayButton className="likeButton">
            <svg width="30" height="30" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_686_37338)">
                <path
                  d="M24.6822 45.995C25.1216 45.995 25.7495 45.702 26.2098 45.43C37.9913 37.8965 45.462 29.1284 45.462 20.2137C45.462 12.8058 40.377 7.57422 33.8061 7.57422C29.7254 7.57422 26.5865 9.83427 24.6822 13.2871C22.8198 9.85519 19.639 7.57422 15.5583 7.57422C8.98745 7.57422 3.90234 12.8058 3.90234 20.2137C3.90234 29.1284 11.373 37.8965 23.1756 45.43C23.615 45.702 24.2427 45.995 24.6822 45.995Z"
                  fill="var(--primary-50"
                  fill-opacity="0.85"
                />
              </g>
              <defs>
                <clipPath id="clip0_686_37338">
                  <rect width="41.5596" height="39.6973" fill="white" transform="translate(3.90234 6.29688)" />
                </clipPath>
              </defs>
            </svg>
          </PlayButton>
          <PlayButton className="moreButton">
            <svg width="30" height="30" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_643_37718)">
                <path
                  d="M25.6616 37.5109C26.1848 37.5109 26.7078 37.3017 27.0637 36.904L43.2607 20.3094C43.6164 19.9537 43.8257 19.4933 43.8257 18.9702C43.8257 17.882 43.0094 17.0449 41.9214 17.0449C41.3982 17.0449 40.9169 17.2542 40.561 17.589L24.5315 33.9743H26.7707L10.7411 17.589C10.4062 17.2542 9.92494 17.0449 9.38087 17.0449C8.29269 17.0449 7.47656 17.882 7.47656 18.9702C7.47656 19.4933 7.68583 19.9537 8.04157 20.3304L24.2386 36.904C24.6362 37.3017 25.1175 37.5109 25.6616 37.5109Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_643_37718">
                  <rect width="36.3491" height="22.2866" fill="white" transform="translate(7.47656 15.2246)" />
                </clipPath>
              </defs>
            </svg>
          </PlayButton>
        </div>
        <div className="textArea">
          <span className="age">{contentData.age}</span>{' '}
          <span id="starNumber">
            <svg width="20" height="20" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_632_1076)">
                <path
                  d="M10.983 46.7535C11.841 47.4232 12.9292 47.193 14.2266 46.2514L25.2966 38.111L36.3877 46.2514C37.685 47.193 38.7523 47.4232 39.6312 46.7535C40.4893 46.105 40.6775 45.0376 40.1544 43.51L35.7807 30.4939L46.9553 22.4582C48.2528 21.5375 48.776 20.5748 48.4412 19.5285C48.1064 18.524 47.1228 18.0218 45.5116 18.0427L31.8048 18.1264L27.6403 5.04743C27.1382 3.49888 26.3848 2.72461 25.2966 2.72461C24.2294 2.72461 23.476 3.49888 22.9739 5.04743L18.8095 18.1264L5.10275 18.0427C3.49141 18.0218 2.50787 18.524 2.17305 19.5285C1.8173 20.5748 2.36139 21.5375 3.65882 22.4582L14.8335 30.4939L10.4599 43.51C9.93673 45.0376 10.1251 46.105 10.983 46.7535Z"
                  fill="#FFD034"
                />
              </g>
              <defs>
                <clipPath id="clip0_632_1076">
                  <rect width="46.4734" height="47.3982" fill="white" transform="translate(2.06641 2.72461)" />
                </clipPath>
              </defs>
            </svg>
            {contentData.rating}
          </span>
          <span>에피소드{contentData.episodes}</span>
        </div>
        <div className="textArea">
          <span>{contentData.genres[0]}</span> <span>{contentData.genres[1]}</span> <span>{contentData.genres[2]}</span>
        </div>
      </div>
    </HoverModalWrap>
  );
};

export default HoverModal;