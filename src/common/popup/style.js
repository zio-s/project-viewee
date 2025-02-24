import styled from 'styled-components';

export const StyledPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledPopupContainer = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 360px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .swiper {
    width: 100%;

    @media (max-width: 768px) {
      height: auto;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #000;
    opacity: 0.2;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--primary-50);
  }
`;

export const StyledPopupImage = styled.img`
  width: auto;
  height: 500px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 500px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  font-size: 18px;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const StyledControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #eee;
`;

export const StyledCheckboxLabel = styled.label`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  input {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:checked {
      background-color: #3d7cf4;
      border-color: #3d7cf4;
    }

    &:checked:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 1px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(61, 124, 244, 0.3);
    }
  }
`;
