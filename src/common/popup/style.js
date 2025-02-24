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
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;
