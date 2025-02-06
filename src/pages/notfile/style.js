import styled from 'styled-components';

export const NotFileWrap = styled.div`
  background-color: #1c1c1e;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  .inner {
    text-align: center;
    padding: 2rem;
  }

  .error-code {
    font-size: 8rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.8;
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .error-code {
      font-size: 6rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
