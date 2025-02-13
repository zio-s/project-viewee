import React from 'react';
import CheckBox from '../../../../ui/checkbox';

const AgreementSection = () => (
  <div>
    <div className="divider" />
    <span>개인정보 수집 및 마케팅 수신 동의</span>
    <div className="AgreeArea">
      {[
        '[선택] 개인정보 수집 및 이용 동의',
        '[선택] 이메일 수신 동의',
        '[선택] SMS 수신 동의',
        '[선택] 마케팅 및 이벤트 개인정보 수집 동의',
      ].map((text, index) => (
        <div className="CheckBoxArea" key={index}>
          <CheckBox size="small" id={`agree-${index}`} name="agree" />
          <label htmlFor={`agree-${index}`}>{text}</label>
        </div>
      ))}
    </div>
  </div>
);

export default AgreementSection;
