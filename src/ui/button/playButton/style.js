import styled, { css } from 'styled-components';

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
    width: 75px;
    height: 75px;
  `,
};

export const StyledPlayButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: var(--primary-50);
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  /* Disabled State */
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
