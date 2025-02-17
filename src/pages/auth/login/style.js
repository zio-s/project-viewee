import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const LoginFormWrap = styled.form`
  ${mobileMore`
   max-width: 600px;
 `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 330px;
  width: 100%;
  padding: 7rem;
  background: var(--background-color);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  input {
    width: 460px;
    height: 70px;
    margin-bottom: 3rem;
    &:focus {
      border: 1px solid var(--primary-50);
    }
  }
`;
export const Container = styled.div`
  ${mobileMore`
  display: flex;
  margin:0 auto;
  max-width: 600px;
    padding: 70px 70px;
  `}
  flex-direction: column;
  align-items: center;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1; /* 다른 요소 위에 나타나지 않도록 배경으로 설정 */
  opacity: 0.7; /* 배경 비디오 투명도 조정 */
`;

export const LogoSection = styled.div`
  display: none;
  ${mobileMore` 
    display:flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-bottom: 4.5rem;
    h3 {
      font-size: var(--font-content-l);
      font-weight: 500;
    }
    p{
      font-size: var(--font-label-s);
      color: var(--gray-50);
    }
  `}
`;

export const Form = styled.form`
  ${mobileMore`
   max-width: 600px;
 `}
  margin: 0 auto;
  max-width: 330px;
  width: 100%;
  padding: 20px;
  background: var(--background-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const InfoBox = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0px; 30px;
  ${mobileMore`
  margin-bottom: 15px;
  padding: 0px 70px;
  `}
`;

export const LoginBox = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 23px;
  button {
    height: 100%;
  }
`;

export const RequestBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 40px;
  ${mobileMore`
  width: 100%;`}
`;

export const CheckBoxArea = styled.div`
  .labelBox .iconBox {
    width: 5px !important;
    height: 5px !important;
    ${mobileMore`
    width: 8px !important;
    height: 8px !important;
  `}
  }
  display: flex;
  align-items: center; /* 체크박스와 텍스트 정렬 */
  gap: 5px;
  color: var(--gray-40);
  font-size: var(--font-label-m-tablet);
  ${mobileMore`
  gap: 12px; /* 간격 조정 */
  font-size: var(--font-label-xl-mobile);
  `}
  img {
    width: 10px;
    height: 10px;
  }
`;

export const ForgotPass = styled.div`
  .findPassword {
    color: var(--primary-50);
  }
  display: flex;
  align-items: center; /* 체크박스와 텍스트 정렬 */
  color: var(--gray-40);
  font-size: var(--font-label-m-tablet);
  gap: 5px;
  ${mobileMore`
  gap: 12px; /* 간격 조정 */
  font-size: 14px;
  `};
`;

export const SimpleLogin = styled.div`
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--gray-60);
    margin: 0 5px;
  }
  ${mobileMore`
  font-size: 17px;
  padding: 0 70px;
  `}
  display: flex;
  align-items: center;
  font-size: var(--font-label-xl-mobile);
  color: var(--gray-40);
  text-align: center;
`;

export const SnsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  img {
    cursor: pointer;
  }
`;

export const NotMember = styled.div`
  .signUpLink {
    color: var(--primary-50);
  }
  display: flex;
  align-items: center; /* 체크박스와 텍스트 정렬 */
  color: var(--gray-40);
  font-size: var(--font-label-m-tablet);
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
  ${mobileMore`
  gap: 12px; /* 간격 조정 */
  font-size: 14px;
  `};
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
`;
