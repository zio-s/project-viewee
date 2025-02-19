import styled from 'styled-components';
import { StyledButton as OriginalStyledButton } from '../../common/button/style';

export const MovieInfoSection = styled.div`
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
  padding: 10px 20px; // 패딩
  border-radius: 5px; // 테두리 반경
  font-size: 1.2rem; // 글꼴 크기

  // 추가 스타일을 여기에 추가
  &:hover {
  }
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  // 2개의 열로 구성
  gap: 20px;
  padding: 20px;

  .episode-item {
    display: flex;
    flex-direction: column;  // 세로 방향으로 변경
    border-radius: 8px;
    overflow: hidden;
    min-height: 200px;
    height: 100%;  
    
    .pic {
    width: 100%;
    height: 300px; 

      img {
        width: 50%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .text-info {
      flex: 1;
      padding: 20px;
      color: #fff;
      
      h2 {
        font-size: var(--font-content-l);
        margin: 0 0 6px 0;
      }
      
      h3 {
        font-size: var(--font-content-l);
        color: var(--gray-50);
        margin: 0 0 15px 0;
      }
      
      p {
        font-size: var(--font-content-s);
        color: var(--gray-50);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;  // 화면이 작아지면 한 줄에 하나씩 표시
    
    .episode-item {
      .pic {
        height: 250px;
      }
    }
  }
`;

export const EpisodeWrap = styled.div`
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
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 어두운 필터 */
  z-index: 0;
`;

export const HeroContent = styled.div`
  max-width: 1440px;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 1;
  color: white;
  text-align: left;
  max-width: 600px;
  padding: 20px;

  h1 {
    font-size: var(--font-title-s);
    font-weight: bold;
    margin-bottom: 15px;
  }

  .description {
    margin-top: 15px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;



export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 50%;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
  }
`;



export const Container = styled.div`
  width: 100%;
`;


export const TabMenu = styled.ul`
  max-width: 1440px;
  border-bottom: solid 3px;
  border-color: var(--gray-80);
  width: 100%;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
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

export const PlayButton = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-50);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Description = styled.p`
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: var(--primary-50);
`;
