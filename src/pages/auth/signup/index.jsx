import { Container, Form, LogoSection } from './style';
import SignUpForm from './components/SignUpForm';
import AgreementSection from './components/AgreementSection';
import SignUpActions from './components/SignUpActions';
import SocialSignUp from './components/SocialSignUp';
import LoginPrompt from './components/LoginPrompt';
import BoxVowel from './components/BoxVowel';

const SignUp = () => {
  return (
    <Container>
      <LogoSection>회원정보를 입력하세요</LogoSection>
      <Form>
        <SignUpForm />
        <AgreementSection />
        <BoxVowel />
        <SignUpActions />
        <SocialSignUp />
        <LoginPrompt />
      </Form>
    </Container>
  );
};

export default SignUp;
