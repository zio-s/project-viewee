import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200vh;
  position: relative;
  overflow: hidden;
`;

export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

export const Card = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${({ $isMobile }) => ($isMobile ? '280px' : '320px')};
  height: ${({ $isMobile }) => ($isMobile ? '200px' : '240px')};
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  transform-origin: center center;
  will-change: transform;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 280px;
    height: 200px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 220px;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: pointer;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;
export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span`
  color: #ffd700;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.6rem;
  color: #000;
  justify-content: space-between;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    gap: 8px;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;

  .back-p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: var(--font-content-xxl);
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #000;
  margin-bottom: 8px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CardText = styled.p`
  font-size: 2rem;
  color: #000;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.3;
  }
`;
