import LoginActions from './components/LoginActions';
import LoginForm from './components/LoginForm';
import SignUpPrompt from './components/SignUpPrompt';
import SocialLogin from './components/SocialLogin';
import { Container, Form, LogoSection } from './style';

const Login = () => {
  return (
    <Container>
      <LogoSection>아이디와 비밀번호를 입력하세요</LogoSection>
      <Form>
        <LoginForm />
        <LoginActions />
        <SocialLogin />
        <SignUpPrompt />
      </Form>
    </Container>
  );
};

export default Login;
