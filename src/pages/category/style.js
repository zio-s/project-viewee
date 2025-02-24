import styled from 'styled-components';

export const CateGoryWrap = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 40px 0;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin: 24px 0;
    }

    h1 {
      font-size: 2.8rem;
      font-weight: 700;
      background: linear-gradient(90deg, #ff3b6f 0%, #ffb86c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;
export const SectionTitle = styled.h2`
  font-size: var(--font-content-l);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin: 3rem 0 2rem;
  padding-left: 1rem;
  border-left: 3px solid var(--primary-50);
`;
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }
`;
