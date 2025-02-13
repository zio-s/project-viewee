import LoginActions from './components/LoginActions';
import LoginForm from './components/LoginForm';
import SignUpPrompt from './components/SignUpPrompt';
import SocialLogin from './components/SocialLogin';
import { Container, Form, LogoSection, VideoBackground } from './style';

const Login = () => {
  return (
    <Container>
      <VideoBackground autoPlay loop muted>
        <source src="/video/Frame 280.mp4" type="video/mp4" />
        브라우저가 지원하지 않는 경우 대체 텍스트
      </VideoBackground>

      <Form>
        <LogoSection>아이디와 비밀번호를 입력하세요</LogoSection>
        <LoginForm />
        <LoginActions />
        <SocialLogin />
        <SignUpPrompt />
      </Form>
    </Container>
  );
};

export default Login;
