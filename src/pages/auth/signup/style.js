import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const Container = styled.div`
  ${mobileMore`
  display: flex;
  padding: 20px;
  `}
  flex-direction: column;
  align-items: center;
`;

export const LogoSection = styled.div`
  display: none;
  ${mobileMore` 
    display:block;
   margin-bottom: 45px;
   margin-top: 70px;
   font-size: var(--font-content-l);
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
  .inputBox input:focus {
  border-color: var(--primary-50)
}
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0px; 30px;
  ${mobileMore`
  margin-bottom: 15px;
  padding: 0px 70px;
  `}
`;

export const LoginBox = styled.div`
  margin-bottom: 40px;
  margin-top: 30px;
  ${mobileMore`
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 0px 70px;
  `}
`;

export const VowelWrap = styled.div`
  width: 100%;
  background: var(--gray-80);
  padding: 20px 15px;
  font-size: var(--font-label-s);
  box-sizing: border-box;
  ${mobileMore`
  max-width:460px;
  width:100%;
  margin:0 auto;
  `}
`;

export const CheckItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  ${mobileMore`
  `}
  .labelBox .iconBox {
    width: 10px;
    height: 10px;
  }
`;

export const RequestBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 5px;
  ${mobileMore`
  padding: 0px 70px;
  margin-top:20px;
  `}
  .labelBox .iconBox {
    width: 10px;
    height: 10px;
  }
`;

export const SimpleSignup = styled.div`
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
  margin-bottom: 30px;
`;

export const SnsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export const NotMember = styled.div`
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
