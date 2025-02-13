import React from 'react';
import { ModyWrap } from './style';
import InputField from './components/InputField';
import AgreementSection from './components/AgreementSection';
import ConfirmButtons from './components/ConfirmButtons';

const ModifyProfile = () => {
  return (
    <ModyWrap>
      <div className="modyTitle">회원정보 수정</div>
      <div className="inner">
        <form id="content" classNae="contentm">
          {[
            { label: '이름' },
            { label: '전화번호' },
            { label: '이메일', placeholder: '고정된 값' },
            { label: '비밀번호' },
            { label: '비밀번호 확인' },
            { label: '생년월일' },
            { label: '성별' },
          ].map((field, index) => (
            <InputField key={index} label={field.label} placeholder={field.placeholder} />
          ))}

          <AgreementSection />
          <ConfirmButtons />
        </form>
      </div>
    </ModyWrap>
  );
};

export default ModifyProfile;
