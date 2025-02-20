



import styled from 'styled-components';
import { StyledButton as OriginalStyledButton } from '../../common/button/style';

export const MovieInfoSection = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;     
  margin: 0 auto; 

  .movie-content {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }
  .poster-wrapper {
    flex-shrink: 0;
    width: 200px;
    
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
  .info-wrapper {
    flex-grow: 1;
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  .detail-row {
    display: flex;
    margin-bottom: 10px;
    .label {
      width: 80px;
      color: #888;
    }
  }
`;

export const StyledButton = styled(OriginalStyledButton)`
  width: 350px;
  height: 60px; 
  font-size: var(--font-content-l);
  margin: 0 20px 0 0;

  &:hover {
  }
`;

export const Buttons = styled.div`
  display : flex;
  alignItems : center;
  margin: 0 0 30px 0;

`


export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 25px;

  .episode-item {
    display: flex; 
    flex-direction: column; /* 전체 아이템을 세로로 배치 */
    border-radius: 8px;
    overflow: hidden;
    height: 100%;  
    
    .content {
    display: flex;
    align-items: center;
    }

    .pic {
    width: 345px;
    height: 195px; 
    flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .text-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      h2 {
        font-size: var(--font-content-l);
        margin-bottom: 6px;
      }

      h3 {
        font-size: var(--font-content-m);
        color: var(--gray-50);
      }
    }

    p {
    grid-area: paraagraph;
    grid-column: 1/ span2 ;
      font-size: var(--font-content-s);
      color: var(--gray-50);
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;  // 화면이 작아지면 한 줄에 하나씩 표시
    
    .episode-item {
      .pic {
        height: 250px;
        width: 145px;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const EpisodeWrap = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;    
  margin: 0 auto; 
  .EpisodeContainer {
  display: block;
  padding : 0;
  margin : 0;
  }
`

export const CustomButton = styled(StyledButton)`
  color: white;
  font-size: 18px;
  padding: 12px 24px;

`;
export const RecommendedWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto; 
  RecommendedContainer{
  }
`

export const RecommendeddBox = styled.div`
  h2 {
    font-size: var(--font-content-xxl);
    margin-bottom: 15px;
  }
  .movie-slide {
    flex: 0 0 auto;
    width: 270px;
    height: 380px;
    img {
      width: 100%;
      display: block;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 770px;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner{
  max-width: 1440px;
  margin: 0 auto; 
  padding: 0; 

  }
`;

export const BackgroundContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 770px;
  overflow: hidden;
  
  iframe, img { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  z-index: 1;
  text-align: left;

  h1 {
    font-size: var(--font-title-s);
    margin-bottom: 30px;
  }

  p {
    font-size: var(--font-content-s);
    margin-bottom: 30px;
  }

  .description {
    margin-bottom : 50px;
    font-size: var(--font-content-s);
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 20px;
    font-size: var(--font-content-s);
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--primary-50);
      transform: scale(1.2);
    }

    svg {
      margin-bottom: 5px;
      color: white;
      transition: transform 0.3s ease-in-out, color 0.2s ease-in-out, filter 0.3s ease-in-out;

      &:hover {
        color: var(--primary-50);
        transform: scale(1.2);
        filter: drop-shadow(0 0 8px var(--primary-50));
      }
    }
  }
`;



export const Container = styled.div`
  width: 100vw;
`;


export const TabMenu = styled.ul`
  max-width: 1440px;
  border-bottom: solid 3px;
  border-color: var(--gray-80);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto; 
  list-style: none;
  padding: 0;
  li {
    margin-right: 20px;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: var(--font-content-m);
    &:hover {
        color: var(--hover-color);
      }

    &.active {
        color: var(--hover-color);
    }
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  background-color: #1c1c1e;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Description = styled.p`
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: var(--primary-50);
`;
