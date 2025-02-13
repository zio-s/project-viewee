import styled from 'styled-components';
import { StyledButton } from '../../common/button/style';

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

export const HeroSectionWrapper = styled.div`
  padding: 20px;
  color: #fff;
  background: #1c1c1e;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .play-button {
    padding: 10px 20px;
    background-color: var(--primary-50);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    button {
      padding: 8px 16px;
      border: none;
      background: #333;
      color: white;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: var(--hover-color);
      }
    }
  }

  .description {
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    color: white; 

    &:hover {
      color: var(--primary-50);
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
  padding: 0 240px;
  color: #fff;
  background-color: background-color;
`;


export const TabMenu = styled.ul`
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
