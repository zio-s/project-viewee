import React from 'react';
import { SimpleLogin, SnsButtonContainer } from '../style';
import SnsButton from './SnsButton';

const SocialLogin = () => {
  return (
    <>
      <SimpleLogin>간편 로그인</SimpleLogin>
      <SnsButtonContainer>
        <SnsButton type="google" href="#" />
        <SnsButton type="twitter" href="#" />
        <SnsButton type="facebook" href="#" />
      </SnsButtonContainer>
    </>
  );
};

export default SocialLogin;
