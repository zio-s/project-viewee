import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

export const MarqueeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 100px;
  margin-bottom: 50vh;

  ul {
    display: flex;
    gap: 5px;
    li {
      display: flex;
      height: 120px;
    }
  }

  ${mobileMore`
    gap: 8px;
    padding-top: 150px;
    margin-bottom: 70vh;
    
    ul {
      gap: 8px;
      li {
        height: 160px;
      }
    }
  `}

  ${tabletMore`
    gap: 10px;
    padding-top: 200px;
    margin-bottom: 100vh;
    
    ul {
      gap: 10px;
      li {
        height: 200px;
      }
    }
  `}
`;

export const MarqueeTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-title-m-mobile);
    color: var(--text-primary);
  }

  span {
    font-weight: var(--font-weight-regular);
    font-size: var(--font-content-l-mobile);
    color: var(--text-primary);
  }

  ${mobileMore`
    margin-bottom: 30px;
    gap: 15px;
    
    h2 {
      font-size: var(--font-title-m-tablet);
    }
    
    span {
      font-size: var(--font-content-xxl-tablet);
    }
  `}

  ${tabletMore`
    margin-bottom: 40px;
    gap: 20px;
    
    h2 {
      font-size: 50px;
    }
    
    span {
      font-size: 30px;
    }
  `}
`;
