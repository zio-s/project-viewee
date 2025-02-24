import styled from 'styled-components';

export const ReviewContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 200vh;
`;

export const ReviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 150px;
    background-color: var(--background);
  }

  .bg-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 비디오가 컨테이너를 꽉 채우도록 설정 */
      position: absolute;
      top: 0;
      left: 0;
    }

    .text-box {
      position: relative;
      z-index: 2;
      color: white; /* 텍스트가 비디오 위에 잘 보이도록 색상 설정 */
      text-align: center;
      padding: 2rem;

      h1 {
        font-size: 3rem;
        margin: 0;
      }
    }
  }
`;
