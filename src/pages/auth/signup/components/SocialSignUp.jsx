import React from 'react';
import { SimpleSignup, SnsButtonContainer } from '../style';
import SnsButton from '../../login/components/SnsButton';

const SocialSignUp = () => (
  <>
    <SimpleSignup>간편 가입</SimpleSignup>
    <SnsButtonContainer>
      <SnsButton type="google" href="#" />
      <SnsButton type="twitter" href="#" />
      <SnsButton type="facebook" href="#" />
    </SnsButtonContainer>
  </>
);

export default SocialSignUp;
