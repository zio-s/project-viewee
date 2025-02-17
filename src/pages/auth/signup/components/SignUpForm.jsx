import React from 'react';
import { InfoBox } from '../style';
import Input from '../../../../ui/input';

const SignUpForm = ({ changeInput, joinData }) => {
  const { username, userId, password, passwordConfirm, phone, gender, birth } = joinData;
  return (
    <div>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="이름"
            name="username"
            value={username}
            onChange={changeInput}
            pattern="[가-힣]+"
            required
            title="올바른 이름을 입력하십시오."
          />
        </div>
      </InfoBox>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="010-0000-0000"
            name="phone"
            value={phone}
            onChange={changeInput}
            pattern="^010-\d{4}-\d{4}$"
            required
            title="하이픈을 포함하여 전화번호를 입력해주세요."
          />
        </div>
      </InfoBox>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="생년월일"
            name="birth"
            value={birth}
            onChange={changeInput}
            type="date"
            required
          />
        </div>
      </InfoBox>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="성별"
            name="gender"
            value={gender}
            onChange={changeInput}
            required
          />
        </div>
      </InfoBox>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="이메일"
            name="userId"
            value={userId}
            onChange={changeInput}
            type="email"
            required
          />
        </div>
      </InfoBox>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="Password"
            name="password"
            value={password}
            onChange={changeInput}
            type="password"
            required
          />
        </div>
      </InfoBox>
      <InfoBox>
        <div className="inputBox">
          <Input
            variant="gray"
            size="medium"
            fullWidth={true}
            placeholder="Check Password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={changeInput}
            type="password"
            required
          />
        </div>
      </InfoBox>
    </div>
  );
};

export default SignUpForm;
