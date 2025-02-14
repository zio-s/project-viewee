import React from 'react';
import styled, { css } from 'styled-components';

const socialStyles = {
  google: css`
    background-image: url('/images/Google.png');
    background-size: 20px 20px;
  `,
  twitter: css`
    background-image: url('/images/twitter.png');
    background-size: 20px 20px;
  `,
  facebook: css`
    background-image: url('/images/facebook.png');
    background-size: 20px 20px;
  `,
  kakao: css`
    background-image: url('/icons/logo/kakao/color.svg');
    background-size: 20px 20px;
  `,
};

const StyledButton = styled.a`
  width: 30px;
  height: 30px;
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10%;
  border: 1px solid var(--gray-40);
  padding: 5px 20px;

  display: inline-block;
  cursor: pointer;
  ${({ type }) => socialStyles[type]}
  &:hover {
    border-color: #aaa;
  }
`;

const SnsButton = ({ type, href, ...props }) => {
  return <StyledButton type={type} {...props} />;
};

export default SnsButton;
