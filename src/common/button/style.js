import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: var(--primary-50);
    color: var(--text-primary);
    &:hover {
      background: var(--primary-60);
    }
  `,
  gray: css`
    background: var(--gray-70);
    color: var(--gray-0);
    &:hover {
      background: var(--primary-50);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--gray-60);
    &:hover {
      background: var(--gray-70);
    }
  `,
};

const sizes = {
  small: css`
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
  `,
  medium: css`
    height: 44px;
    padding: 0 24px;
    font-size: 16px;
  `,
  large: css`
    height: 52px;
    padding: 0 32px;
    font-size: 18px;
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variant Styles */
  ${({ $variant }) => variants[$variant]}

  /* Size Styles */
  ${({ $size }) => sizes[$size]}

  /* Full Width Option */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;
