import styled, { css } from 'styled-components';

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const StyledTag = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 50px;
  border-radius: 25px;
  background: transparent;
  border: 1px solid var(--gray-40);
  color: var(--gray-40);
  transform-origin: center;

  &:hover {
    width: 140px;
    border: none;
    background: var(--gray-80);
    color: var(--text-primary);

    transform: translateY(-10%);
  }
  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Full Width Option */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;
