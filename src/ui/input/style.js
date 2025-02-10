import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--primary-50);
    border-radius: 5px;
  `,
  gray: css`
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--gray-60);
    border-radius: 5px;
  `,
  filled: css`
    background: var(--gray-80);
    color: var(--text-primary);
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
    padding: 16px;
    font-size: var(--font-content-l);
    font-weight: var(--font-weight-semibold);
  `,
};

export const StyledInput = styled.input.attrs({ type: 'text' })`
  apperance: none;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  ::placeholder {
    color: var(--gray-40);
    font-size: var(--font-content-l);
    font-weight: var(--font-weight-semibold);
  }
  box-sizing: border-box;

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
