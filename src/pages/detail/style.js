
import styled from 'styled-components';
import { StyledButton as OriginalStyledButton } from '../../common/button/style';
import { StyledInput as OriginalStyledInput } from '../../ui/input/style';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background: var(--background-color);
  width: 800px;
  height: 80vh;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  overflow-y: auto;
    h2{
      font-size: var(--font-content-xxxl);
      text-align: center;
      margin-bottom: 10px; 
    }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  fill: |;
  font-size: 20px;
  cursor: pointer;
`;

export const StarContainer = styled.div`
  font-size: 24px;
  text-align: center;
`;

export const ReviewInput = styled(OriginalStyledInput)`
  width: 100%; 
  padding: 20px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  font-size: 16px; 
  margin: 20px 0; 

  &:focus {
    border-color: var(--primary-50); 
    outline: none; 
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #f05a7e;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ReviewList = styled.div`
  margin-top: 20px;
`;

export const ReviewItem = styled.li`
  border-bottom: 1px solid var(--gray-60); // 테두리
  padding: 10px 15px; // 패딩
  margin: 10px 0; // 여백

  display: flex; // Flexbox로 위치 조정
  flex-direction: column; // 세로 방향으로 배치
  align-items: flex-start; // 좌측 정렬

  &:hover {
    background-color: var(--gray-80); // 호버 시 배경색 변화
  }

  .icon-container {
    display: flex; // 가로 정렬
    gap: 10px; // 아이콘 간격
    margin-top: 10px; // 상단 여백
  }

  span {
    font-size: var(--font-content-m); // 글자 크기
    color: var(--gray-50); // 글자 색상
    margin-bottom: 10px; // 아래쪽 여백
  }

  p {
    font-size: var(--font-content-l); // 본문 텍스트 크기
    color: var(--gray-30); // 본문 텍스트 색상
    margin-bottom: 10px; // 아래쪽 여백
  }

  .icon-wrapper {
    stroke: var(--gray-60); // 스트로크 색상
    border: 1.5px solid var(--gray-60); // 테두리
    border-radius: 25px; // 모서리 둥글기
    padding: 10px; // 패딩
    margin: 0 15px 15px 0;
    display: flex; // Flexbox로 정렬
    align-items: center; // 가운데 정렬
  }
`;





export const MovieInfoSection = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto; 
  padding : 50px 0;

  .movie-content {
    max-width: 1440px;
    display: flex;
    flex-shrink: 0;
    gap: 30px;
  }
  .poster-wrapper {
    width: 340px;
    height: 490px; 
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%; 
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .info-wrapper {
    flex-grow: 1;
    h2 {
      font-size: var(--font-lebel-l);
      margin-bottom: 15px;
    }
    .overview{
      font-size: var(--font-lebel-l);
      margin-bottom: 40px;
      display: block;
    }
  }
    

  .detail-row {
    display: flex;
    margin-bottom: 40px;
    .label {
      font-size: var(--font-lebel-l);
      margin: 0 60px 0 0;
    }
    .value{
      font-size: var(--font-lebel-l);
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
  padding : 50px 0;

  .episode-item {
    display: flex; 
    flex-direction: column; 
    overflow: hidden;
    height: 100%;  
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    
    .content {
    display: flex;
    align-items: center;
    }

    .pic {
    width: 345px;
    height: 195px; 
    flex-shrink: 0;
    border-radius: 5px;

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

.episodes-list {
  margin-top: 50px;
  width: 100%;
}

.swiper-slide{
  width: 200px;
}
.episode-detail {
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  h4{

  }
  p{

  }
}

.episode-detail img {
  width: 100%;
  border-radius: 6px;
}

.episode-detail:hover {
  transform: scale(1.05);
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
  padding : 50px 0;
  RecommendedContainer{
  }
`

export const RecommendeddBox = styled.div`
  max-width: 1440px;
  overflow: hidden; 
  margin-bottom: 75px;
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
      height: 100%;
      display: block;
      border-radius: 5px; 
      overflow: hidden;
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
  height: 100%;
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
  bottom: 50px;

  h1 {
    font-size: var(--font-title-s);
    margin-bottom: 30px;
  }

  p {
    font-size: var(--font-content-s);
    margin-bottom: 30px;
  }

  .description {
    margin-bottom : 30px;
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
      color: var(--hover-color);
      transition: transform 0.3s ease-in-out;
      transform: scale(1.2);
      
      svg {
      margin-bottom: 5px;
      color: var(--hover-color);
    }
    }

    
  }
`;



export const Container = styled.div`
  width: 100vw;
`;


export const TabMenu = styled.ul`
  max-width: 1440px;
  height: 60px;
  border-bottom: solid 3px;
  border-color: var(--gray-80);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto; 
  padding: 0;
  li {
    margin-right: 30px;
    padding: 0 30px;
    border-radius: 5px;
    font-size: var(--font-content-m);
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
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
