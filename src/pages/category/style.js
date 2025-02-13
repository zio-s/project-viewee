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
    gap: 2rem;
    align-items: center;
    margin: 40px 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin: 24px 0;
    }

    h1 {
      font-size: 32px;
      font-weight: 700;
      color: #fff;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;

export const FilterContainer = styled.div`
  position: relative;

  .dropdown-button {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    svg {
      transition: transform 0.2s ease;
    }

    &.active svg {
      transform: rotate(180deg);
    }
  }

  .dropdown-content {
    position: absolute;
    top: calc(100% + 8px);
    left: 0%;
    min-width: 200px;
    background: rgba(20, 20, 20, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 8px 0;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease;

    &.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    button {
      width: 100%;
      padding: 12px 20px;
      text-align: left;
      color: #fff;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      &.active {
        color: #f06292;
      }
    }
  }
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
