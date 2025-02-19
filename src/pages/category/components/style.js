import styled from 'styled-components';
import { tabletMore } from '../../../styled/Mixin';

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

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  touch-action: none;
`;

export const DrawerContent = styled.div`
  position: fixed;
  left: 0;
  top: 94px;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background: var(--background-primary);
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1001;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  ${tabletMore`
    top:72px`}
  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid var(--gray-70);

    h2 {
      font-size: var(--font-content-l);
      font-weight: var(--font-weight-semibold);
      color: var(--text-primary);
    }

    button {
      color: var(--text-primary);
      padding: 0.5rem;
      border-radius: 50%;
      transition: all 0.2s ease;

      &:hover {
        background: var(--gray-70);
      }

      svg {
        width: 24px;
        height: 24px;
        path {
          stroke: var(--text-primary);
        }
      }
    }
  }

  .drawer-body {
    padding: 1.5rem;

    .filter-section {
      margin-bottom: 2rem;

      h3 {
        font-size: var(--font-content-m);
        font-weight: var(--font-weight-semibold);
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .filter-options {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
      }

      .filter-chip {
        padding: 0.8rem 1rem;
        border-radius: 8px;
        background: var(--gray-80);
        color: var(--text-primary);
        font-size: var(--font-content-s);
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: var(--gray-70);
        }

        &.active {
          background: var(--primary-50);
        }
      }
    }
  }

  .drawer-footer {
    position: sticky;
    bottom: 0;
    padding: 1.5rem;
    background: var(--background-primary);
    border-top: 1px solid var(--gray-70);
    display: flex;
    gap: 1rem;

    button {
      flex: 1;
      padding: 1rem;
      border-radius: 8px;
      font-size: var(--font-content-m);
      font-weight: var(--font-weight-medium);
      transition: all 0.2s ease;

      &.reset {
        background: var(--gray-80);
        color: var(--text-primary);

        &:hover {
          background: var(--gray-70);
        }
      }

      &.apply {
        background: var(--primary-50);
        color: var(--gray-0);

        &:hover {
          background: var(--primary-60);
        }
      }
    }
  }
`;

export const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: var(--background-secondary);
  color: var(--text-primary);
  font-size: var(--font-content-s);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: var(--gray-70);
  }

  .filter-count {
    background: var(--primary-50);
    color: var(--gray-0);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: var(--font-label-s);
  }
`;
