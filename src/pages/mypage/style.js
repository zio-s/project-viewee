import styled, { css } from 'styled-components';
import { tabletMore } from '../../styled/Mixin';

export const MyPageWrap = styled.div`
  background: transparent;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  ${tabletMore`
        display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.7rem 5rem;
  `}
  .content {
    max-width: 1440px;
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
