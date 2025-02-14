import styled from 'styled-components';

export const CateGoryBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 270px);
  gap: 20px;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
export const CateGoryItem = styled.li`
  img {
    width: 270px;
    height: 386px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }
`;

export const ItemCard = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #1a1a1a;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);

    .poster-wrap::after {
      opacity: 1;
    }

    .item-info {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .poster-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 145%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.9) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1;
    box-sizing: border-box;
    max-width: 100%;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-height: 1.3;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    .item-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;

      @media (max-width: 768px) {
        font-size: 13px;
        gap: 8px;
      }

      .rating {
        display: flex;
        align-items: center;
        gap: 4px;

        svg {
          color: #ffd700;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;
