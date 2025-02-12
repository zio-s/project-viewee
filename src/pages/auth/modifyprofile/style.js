import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../styled/Mixin';

export const ModyWrap = styled.div`
  .inner {
    width: 100%;
    margin: 0 auto;
    ${mobileMore`
    font-size: 15px;
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
    align-items: center;
    gap: 50px; /* span과 Input 사이의 간격 유지 */
    margin-bottom: 15px;
    justify-content: space-between;
  }

  .label {
    white-space: nowrap; /* 줄바꿈 방지 */
    width: 120px; /* 라벨의 너비를 일정하게 */
    text-align: left; /* 텍스트 정렬 */
  }

  .input_box {
    flex: 1;
    width: 400px; /* 고정된 너비 설정 */
    max-width: 400px; /* 최대 너비 제한 */
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
