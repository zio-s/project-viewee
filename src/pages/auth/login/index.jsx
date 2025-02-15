import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';
import SignUpPrompt from './components/SignUpPrompt';
import SocialLogin from './components/SocialLogin';
import { Container, Form, LogoSection, VideoBackground } from './style';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { authActions } from '../../../store/modules/authSlice';

const Login = () => {
  return (
    <Container>
      <VideoBackground autoPlay loop muted>
        <source src="/video/Frame 280.mp4" type="video/mp4" />
        브라우저가 지원하지 않는 경우 대체 텍스트
      </VideoBackground>
      <LoginForm />
    </Container>
  );
};

export default Login;
