import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, InfoBox, Label, LogoSection } from './style';
import Input from '../../../ui/input';
import Button from '../../../ui/button/defaultButton';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <LogoSection>
        <a href="../index.html">
          <span className="blind">아이디와 비밀번호를 입력하세요</span>
        </a>
      </LogoSection>
      <Form>
        <InfoBox>
          {/* <Label>아이디</Label> */}
          <Input variant="gray" size="medium" fullWidth={true} />
        </InfoBox>
        <InfoBox>
          {/* <Label>비밀번호</Label> */}
          <Input variant="gray" size="medium" fullWidth={true} />
        </InfoBox>
        <InfoBox>
          <Button size="medium" fullWidth={true}>
            로그인
          </Button>
        </InfoBox>
      </Form>
    </Container>
  );
};

export default Login;
