import { Container, Form, LogoSection } from './style';
import SignUpForm from './components/SignUpForm';
import AgreementSection from './components/AgreementSection';
import SignUpActions from './components/SignUpActions';
import SocialSignUp from './components/SocialSignUp';
import LoginPrompt from './components/LoginPrompt';
import BoxVowel from './components/BoxVowel';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/modules/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();
  const [joinData, setJoinData] = useState({
    username: '',
    userId: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    gender: '',
    birth: '',
  });
  const dispatch = useDispatch();
  const changeInput = (e) => {
    const { name, value } = e.target;
    setJoinData({ ...joinData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (joinData.password === joinData.passwordConfirm) {
      if (allChecked) {
        dispatch(authActions.signup(joinData));
        navigate('/');
      } else {
        alert('필수 약관에 동의하여야 가입 가능합니다.');
      }
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };
  const [allChecked, setAllChecked] = useState(false);
  const [itemChecked, setItemChecked] = useState([
    {
      id: 1,
      checked: false,
      title: '[필수] 만 14세 이상입니다.',
      required: true,
    },
    {
      id: 2,
      checked: false,
      title: '[필수] 만 14세 이상입니다.',
      required: true,
    },
    {
      id: 3,
      checked: false,
      title: '[필수] 만 14세 이상입니다.',
      required: true,
    },
    {
      id: 4,
      checked: false,
      title: '[선택] 개인정보 수집 동의',
      required: false,
    },
    {
      id: 5,
      checked: false,
      title: '[선택] 개인정보 수집 동의',
      required: false,
    },
  ]);
  const handleCheckedAll = () => {
    setAllChecked((prevAllChecked) => {
      const newCheckedState = !prevAllChecked;
      setItemChecked((prevItems) => prevItems.map((item) => ({ ...item, checked: newCheckedState })));
      return newCheckedState;
    });
  };

  const handleCheckedItem = (id) => {
    setItemChecked((prevItems) => {
      const updatedItems = prevItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));

      const isAllRequiredChecked = updatedItems.filter((item) => item.required).every((item) => item.checked);

      setAllChecked(isAllRequiredChecked);
      return updatedItems;
    });
  };
  return (
    <Container>
      <LogoSection>회원정보를 입력하세요</LogoSection>
      <Form onSubmit={onSubmit}>
        <SignUpForm changeInput={changeInput} joinData={joinData} />
        <AgreementSection handleCheckedAll={handleCheckedAll} allChecked={allChecked} itemChecked={itemChecked} />
        <BoxVowel itemChecked={itemChecked} handleCheckedItem={handleCheckedItem} />
        <SignUpActions />
        <SocialSignUp />
        <LoginPrompt />
      </Form>
    </Container>
  );
};

export default SignUp;
