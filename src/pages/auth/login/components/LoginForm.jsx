import { useEffect, useState } from 'react';
import { CheckBoxArea, ForgotPass, LoginBox, LoginFormWrap, LogoSection, RequestBox } from '../style';
import Input from '../../../../ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../../store/modules/authSlice';
import { Link, useNavigate } from 'react-router';
import Button from '../../../../ui/button/defaultButton';
import CheckBox from '../../../../ui/checkbox';
import SocialLogin from './SocialLogin';
import SignUpPrompt from './SignUpPrompt';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authed } = useSelector((state) => state.authR);
  const [user, setUser] = useState({ userId: localStorage.getItem('rememberId') || '', password: '' });
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.userId.trim() || !user.password.trim()) return;
    dispatch(authActions.login(user));
  };

  useEffect(() => {
    if (authed) {
      navigate('/');
    }
  }, [authed, navigate]);

  const [isRemember, setIsRemember] = useState(localStorage.getItem('rememberId') ? true : false);
  const handleRemember = () => {
    setIsRemember(!isRemember);
    if (isRemember) {
      localStorage.setItem('rememberId', user.userId);
    } else {
      localStorage.removeItem('rememberId');
    }
  };

  return (
    <LoginFormWrap onSubmit={onSubmit}>
      <LogoSection>
        <h3>아이디와 비밀번호를 입력하세요</h3>
        <p>돌아오신 걸 환영합니다!</p>
      </LogoSection>
      <Input
        variant="gray"
        size="medium"
        fullWidth={true}
        placeholder="아이디"
        name="userId"
        value={user.userId}
        onChange={changeInput}
      />
      <Input
        variant="gray"
        size="medium"
        fullWidth={true}
        name="password"
        type="password"
        placeholder="비밀번호"
        value={user.password}
        onChange={changeInput}
      />
      <LoginBox>
        <Button size="large" fullWidth={true} type="submit">
          로그인
        </Button>
      </LoginBox>
      <RequestBox>
        <CheckBoxArea>
          <CheckBox size="small" id="rememberMe" checked={isRemember} onChange={handleRemember} />
          <label htmlFor="rememberMe">로그인 정보 저장</label>
        </CheckBoxArea>
        <ForgotPass>
          비밀번호를 잊으셨나요?{' '}
          <Link to="#" className="findPassword">
            비밀번호 찾기
          </Link>
        </ForgotPass>
      </RequestBox>
      <SocialLogin />
      <SignUpPrompt />
    </LoginFormWrap>
  );
};

export default LoginForm;
