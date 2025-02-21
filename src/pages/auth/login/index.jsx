import LoginForm from './components/LoginForm';
import { Container, VideoBackground } from './style';

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
