import styled, { css } from 'styled-components';
import { tabletMore } from '../../styled/Mixin';

export const MyPageWrap = styled.div`
  background: transparent;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  ${tabletMore`
        padding: 3.7rem 24rem;
          max-width: 1440px;
      `}

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
