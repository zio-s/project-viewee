import React from 'react';
import { InfoBox } from '../style';
import Input from '../../../../ui/input';

const SignUpForm = () => (
  <div>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="이름" />
      </div>
    </InfoBox>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="전화번호" />
      </div>
    </InfoBox>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="생년월일" />
      </div>
    </InfoBox>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="성별" />
      </div>
    </InfoBox>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="이메일" />
      </div>
    </InfoBox>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="Password" />
      </div>
    </InfoBox>
    <InfoBox>
      <div className="inputBox">
        <Input variant="gray" size="medium" fullWidth={true} placeholder="Check Password" />
      </div>
    </InfoBox>
  </div>
);

export default SignUpForm;
