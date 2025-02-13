import React from 'react';
import { CheckBoxArea, ForgotPass, LoginBox, RequestBox } from '../style';
import Button from '../../../../ui/button/defaultButton';
import CheckBox from '../../../../ui/checkbox';
import { Link } from 'react-router-dom';

const LoginActions = () => (
  <>
    <LoginBox>
      <Button size="large" fullWidth={true}>
        로그인
      </Button>
    </LoginBox>
    <RequestBox>
      <CheckBoxArea>
        <CheckBox size="small" />

        <label htmlFor="rememberMe">로그인 정보 저장</label>
      </CheckBoxArea>
      <ForgotPass>
        비밀번호를 잊으셨나요?{' '}
        <Link to="#" className="findPassword">
          비밀번호 찾기
        </Link>
      </ForgotPass>
    </RequestBox>
  </>
);

export default LoginActions;
