import React from 'react';
import { NotMember } from '../style';
import { Link } from 'react-router-dom';

const SignUpPrompt = () => {
  return (
    <NotMember>
      아직 회원이 아니신가요?{' '}
      <Link to="#" className="signUpLink">
        회원가입
      </Link>
    </NotMember>
  );
};

export default SignUpPrompt;
