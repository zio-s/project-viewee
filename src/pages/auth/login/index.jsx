import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CheckBoxArea,
  Container,
  ForgotPass,
  Form,
  InfoBox,
  LoginBox,
  LogoSection,
  NotMember,
  RequestBox,
  SimpleLogin,
  SnsButtonContainer,
} from './style';
import Input from '../../../ui/input';
import Button from '../../../ui/button/defaultButton';
import CheckBox from '../../../ui/checkbox';
import SnsButton from './components/SnsButton';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <LogoSection>아이디와 비밀번호를 입력하세요</LogoSection>
      <Form>
        <InfoBox>
          <Input variant="gray" size="medium" fullWidth={true} placeholder="아이디" />
        </InfoBox>
        <InfoBox>
          <Input variant="gray" size="medium" fullWidth={true} placeholder="비밀번호" />
        </InfoBox>
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
            비밀번호를 잊으셨나요? <Link to="#">비밀번호 찾기</Link>
          </ForgotPass>
        </RequestBox>
        <SimpleLogin>간편 로그인</SimpleLogin>
        <SnsButtonContainer>
          <SnsButton type="google" href="#" />
          <SnsButton type="twitter" href="#" />
          <SnsButton type="facebook" href="#" />
        </SnsButtonContainer>
        <NotMember>
          아직 회원이 아니신가요? <Link to="#">회원가입</Link>
        </NotMember>
      </Form>
    </Container>
  );
};

export default Login;
