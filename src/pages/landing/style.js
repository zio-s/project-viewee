import styled from 'styled-components';

export const LandingWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 200px;
  background-color: #1e1e1e;
  overflow: hidden;
  & > div {
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }
  & > div:not(:last-child) {
    margin-bottom: 100vh;
  }

  &[data-lenis-prevent] {
    overflow: hidden;
  }

  &[data-lenis-prevent] {
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;
