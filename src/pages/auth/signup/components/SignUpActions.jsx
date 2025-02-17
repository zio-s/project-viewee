import React from 'react';
import { LoginBox } from '../style';
import Button from '../../../../ui/button/defaultButton';

const SignUpActions = () => (
  <LoginBox>
    <Button size="large" fullWidth={true} type="submit">
      회원가입
    </Button>
  </LoginBox>
);

export default SignUpActions;
