import styled, { css } from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

const sizes = {
  small: css`
    width: 30px;
    height: 30px;
  `,
  medium: css`
    width: 50px;
    height: 50px;
  `,
  large: css`
    width: 50px;
    height: 50px;
    ${mobileMore`
      width: 65px;
      height: 65px;
    `}
    ${tabletMore`
      width: 75px;
      height: 75px;
    `}
  `,
};

export const StyledTopButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: transparent;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Size Styles */
  ${({ $size }) => sizes[$size]}

  /* Full Width Option */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
