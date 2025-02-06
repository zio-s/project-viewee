import { css } from 'styled-components';

const breakpoints = {
  sm: '768px',
  md: '1024px',
};

export const mobileMore = (...args) => css`
  @media (min-width: ${breakpoints.sm}) {
    ${css(...args)}
  }
`;

export const tabletMore = (...args) => css`
  @media (min-width: ${breakpoints.md}) {
    ${css(...args)}
  }
`;
