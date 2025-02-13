import React from 'react';
import { InfoBox } from '../style';
import Input from '../../../../ui/input';

const LoginForm = () => (
  <>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="아이디" />
    </InfoBox>
    <InfoBox>
      <Input variant="gray" size="medium" fullWidth={true} placeholder="비밀번호" />
    </InfoBox>
  </>
);

export default LoginForm;
