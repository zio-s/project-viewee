import styled from 'styled-components';

export const MarqueeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 200px;
  ul {
    display: flex;
    gap: 10px;
    li {
      display: flex;
      height: 200px;
    }
  }
`;
export const MarqueeTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-weight: bold;
    font-size: 50px;
    color: #fff;
  }
  span {
    font-weight: 400;
    font-size: 30px;
    color: #fff;
  }
`;
