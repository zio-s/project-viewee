import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 15px;
    height: 15px;
    padding: 5px;
    font-size: var(--font-label-s);
  `,
  medium: css`
    width: 20px;
    height: 20px;
    padding: 8px;
    font-size: var(--font-label-m);
  `,
  large: css`
    width: 45px;
    padding: 10px;
    font-size: var(--font-label-s);
  `,
};

export const StyledDropDown = styled.div`
  display: inline-flex;
  white-space: nowrap;
  position: relative;
  border: 0.5px solid var(--gray-0);
  border-radius: 2.5px;
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  .dropdown {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /* Size Styles */
    ${({ $size }) => sizes[$size]};
  }
  .dropdown-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 120%;
    padding-top: 10px;
    background-color: var(--gray-90);
    .list-item {
      height: 100%;
      padding: 5px;
      &:hover {
        background-color: var(--gray-80);
      }
    }
  }

  select {
    color: var(--text-primary);
  }
`;
