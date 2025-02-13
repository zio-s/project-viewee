import React from 'react';
import { NotMember } from '../style';
import { Link } from 'react-router-dom';

const LoginPrompt = () => (
  <NotMember>
    이미 가입한 계정이 있으신가요? <Link to="#">로그인</Link>
  </NotMember>
);

export default LoginPrompt;
