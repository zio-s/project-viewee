import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

export const Container = styled.div`
  width: 100%;
  height: 200vh;
  position: relative;
  overflow: hidden;
`;

export const CardsWrapper = styled.div`
  position: fixed;
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
  width: 220px;
  height: 180px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  transform-origin: center center;
  will-change: transform;
  cursor: pointer;

  ${mobileMore`
    width: 280px;
    height: 200px;
  `}

  ${tabletMore`
    width: 320px;
    height: 240px;
  `}
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
  padding: 12px;
  gap: 12px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;

  ${mobileMore`
    padding: 15px;
    gap: 15px;
  `}

  ${tabletMore`
    padding: 20px;
    gap: 20px;
  `}
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: ${(props) => props.$bgColor};
  border-radius: 5px;

  ${mobileMore`
    padding: 15px;
  `}

  ${tabletMore`
    padding: 20px;
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  ${mobileMore`
    margin-bottom: 10px;
  `}
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span`
  color: #ffd700;
  font-size: 1rem;

  ${mobileMore`
    font-size: 1.3rem;
  `}

  ${tabletMore`
    font-size: 1.6rem;
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1.1rem;
  color: #000;
  justify-content: space-between;

  ${mobileMore`
    font-size: 1.3rem;
    gap: 8px;
  `}

  ${tabletMore`
    font-size: 1.6rem;
    gap: 10px;
  `}
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${mobileMore`
    gap: 20px;
  `}

  ${tabletMore`
    gap: 25px;
  `}

  .back-p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: var(--font-content-m);
    ${tabletMore`
    font-size: var(--font-content-xxl);
  `};
  }

  .back-i {
    svg {
      width: 15px;
      ${mobileMore`width: 20px;`}
      ${tabletMore`width: 40px;`}
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 6px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${mobileMore`
    font-size: 1.4rem;
    margin-bottom: 8px;
  `}

  ${tabletMore`
    font-size: 1.6rem;
  `}
`;

export const CardText = styled.p`
  font-size: 1.1rem;
  color: #000;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;

  ${mobileMore`
    font-size: 1.4rem;
    line-height: 1.4;
  `}

  ${tabletMore`
    font-size: 2rem;
  `}
`;
