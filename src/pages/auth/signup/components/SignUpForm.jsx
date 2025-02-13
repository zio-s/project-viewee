import React from 'react';
import { InfoBox } from '../style';
import Input from '../../../../ui/input';

const SignUpForm = () => (
  <>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="이름" />
    </InfoBox>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="전화번호" />
    </InfoBox>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="이메일" />
    </InfoBox>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="Password" />
    </InfoBox>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="Check Password" />
    </InfoBox>
  </>
);

export default SignUpForm;
