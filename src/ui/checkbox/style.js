import styled, { css } from 'styled-components';

const checked = {
  primary: css`
    color: var(--primary-50);
    border: 1px solid var(--primary-50);
  `,
  filled: css`
    background: var(--primary-50);
    color: var(--text-primary);
  `,
};

const unchecked = {
  primary: css`
    background: transparent;
    color: var(--gray-60);
    border: 1px solid var(--gray-50);
    border-radius: 5px;
  `,
  filled: css`
    background: var(--gray-20);
    color: var(--text-primary);
    border-radius: 5px;
  `,
};

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
    width: 30px;
    height: 30px;
    padding: 10px;
    font-size: var(--font-label-l);
  `,
};

export const StyledCheckBox = styled.div`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    margin: -1px;
    clip-path: inset(50%);
  }
  .labelBox {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    cursor: pointer;
    .iconBox {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Disabled State */
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Variant Styles */
      ${({ $variant }) => unchecked[$variant]}

      /* Size Styles */
      ${({ $size }) => sizes[$size]}
    }
  }
  [type='checkbox']:checked + .labelBox .iconBox {
    /* Variant Styles */
    ${({ $variant }) => checked[$variant]}
  }
`;
