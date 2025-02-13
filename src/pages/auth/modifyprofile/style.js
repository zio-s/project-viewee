import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const ModyWrap = styled.div`
  .inner {
    width: 100%;
    max-width:390px;
    margin: 0 auto;
    padding: 30px 20px;
    font-size:var(--font-content-l-mobile);
    ${mobileMore`
    max-width: 500px;
    padding: 70px 40px;
    font-size: var(--font-content-m-tablet);
    `}
    ${tabletMore`
    max-width: 800px;
    padding: 70px 100px;
    font-size: var(--font-label-m);
    `}
  }

  .modyTitle {
    font-size: var(--font-content-l);
    display: flex;
    justify-content: center;
    margin: 70px 50px auto;
  }

  .info_box {
    display: flex;
    flex-direction:column;
    gap:5px;
    margin-bottom:20px;
    ${mobileMore`
    flex-direction:row;
    align-items: center;
    gap: 50px; /* span과 Input 사이의 간격 유지 */
    margin-bottom: 15px;
    justify-content: space-between;
    `}

  }

  .label {
    white-space: nowrap; /* 줄바꿈 방지 */
    width: 120px; /* 라벨의 너비를 일정하게 */
    text-align: left; /* 텍스트 정렬 */
  }

  .input_box {
    box-sizing:border-box;
    width:100%;
    max-width:350px;
    ${mobileMore`
    max-width: 100%;
    flex: 1;
    width: 400px; /* 고정된 너비 설정 */

    `}
  }

  .input_box input:focus {
  border-color: var(--primary-50)
}

  .divider {
    width: 100%;
    height: 2px;
    background-color: #999;
    margin: 50px auto;
  }

  .confirm_box {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .CheckBoxArea {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .AgreeArea {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--font-label-s);
    margin-top: 25px;
  }

  .CheckBoxArea .iconBox {
    width: 10px; 
    height: 10px;
  }

  .confirmBox {
    display: flex;
    gap: 30px;
    margin: 65px 0 90px 0;
  }
\]
`;
