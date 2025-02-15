import React from 'react';
import { SimpleLogin, SnsButtonContainer } from '../style';
import SnsButton from './SnsButton';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
  const navigate = useNavigate();
  const Rest_api_key = '699bf7929ce1cc718d937078360ab162'; //REST API KEY
  const redirect_uri = 'http://localhost:5173'; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = (e) => {
    const popup = window.open(kakaoURL, '_blank', 'width=600,height=700');

    // 🔥 팝업에서 메시지 받기
    window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) return; // 다른 도메인 차단
      const { code } = event.data;
      if (code) {
        console.log('카카오 로그인 코드:', code);
        navigate('/'); // 로그인 후 메인 페이지로 이동
      }
    });
  };
  return (
    <>
      <SimpleLogin>간편 로그인</SimpleLogin>
      <SnsButtonContainer>
        <img src="images/kakao_login.png" onClick={handleLogin} />
      </SnsButtonContainer>
    </>
  );
};

export default SocialLogin;
