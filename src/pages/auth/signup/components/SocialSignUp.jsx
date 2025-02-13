import React from 'react';
import { SnsButtonContainer } from '../style';
import SnsButton from '../../login/components/SnsButton';

const SocialSignUp = () => (
  <SnsButtonContainer>
    <SnsButton type="google" href="#" />
    <SnsButton type="twitter" href="#" />
    <SnsButton type="facebook" href="#" />
  </SnsButtonContainer>
);

export default SocialSignUp;
