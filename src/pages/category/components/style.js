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
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
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
  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1001;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(51, 51, 51, 0.8) rgba(0, 0, 0, 0.2);

  /* Chrome, Edge, Safari */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(51, 51, 51, 0.8);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: padding-box;

    &:hover {
      background: rgba(51, 51, 51, 1);
      border: 2px solid transparent;
      background-clip: padding-box;
    }
  }
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
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  .filter-count {
    background: var(--primary-color, #e50914);
    color: #ffffff;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* 필터 아이콘 추가 */
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
  }

  /* 활성화된 상태 */
  &[data-active='true'] {
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--primary-color, #e50914);
  }

  /* 다크 모드 대응 */
  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.05);

    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }
  }

  /* 반응형 */
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;

    .filter-count {
      font-size: 11px;
      padding: 1px 6px;
    }
  }
`;
