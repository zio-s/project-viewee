import { ModyWrap } from './style';
import InputField from './components/InputField';
import AgreementSection from './components/AgreementSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { authActions } from '../../../store/modules/authSlice';
import Button from '../../../ui/button/defaultButton';
import { useNavigate } from 'react-router';

const ModifyProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authR);
  const [changeUser, setChangeUser] = useState(user);
  useEffect(() => {
    setChangeUser(user);
  }, [user]);
  const changeInput = (e) => {
    const { name, value } = e.target;
    setChangeUser({ ...changeUser, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !changeUser.username.trim() ||
      !changeUser.phone.trim() ||
      !changeUser.password.trim() ||
      !changeUser.birth.trim() ||
      !changeUser.gender.trim()
    ) {
      alert('변경할 내용을 모두 입력하세요.');
      return;
    } else {
      dispatch(authActions.modifyUser(changeUser));
      alert('회원정보가 수정되었습니다.');
      setChangeUser(user);
    }
  };
  return (
    <ModyWrap>
      <div className="modyTitle">회원정보 수정</div>
      <div className="inner">
        <form id="content" className="contentm" onSubmit={onSubmit}>
          <InputField
            label="이름"
            placeholder={user.username}
            name="username"
            value={changeUser.username}
            onChange={changeInput}
          />
          <InputField
            label="전화번호"
            placeholder={user.phone}
            name="phone"
            value={changeUser.phone}
            onChange={changeInput}
          />
          <InputField label="이메일" name="email" placeholder={user.userEmail} defaultValue={user.userEmail} readOnly />
          <InputField
            label="비밀번호"
            placeholder="비밀번호"
            name="password"
            value={changeUser.password}
            type="password"
            onChange={changeInput}
          />
          <InputField
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            name="passwordConfirm"
            value={changeUser.password}
            type="password"
            onChange={changeInput}
          />
          <InputField
            label="생년월일"
            placeholder={user.birth}
            name="birth"
            value={changeUser.birth}
            onChange={changeInput}
          />
          <InputField label="성별" placeholder={user.gender} name="gender" readOnly />
          <AgreementSection />
          <div className="confirmBox">
            <Button size="large" fullWidth={true} variant="gray" type="button" onClick={() => navigate(-1)}>
              취소
            </Button>
            <Button size="large" fullWidth={true} type="submit">
              확인
            </Button>
          </div>
        </form>
      </div>
    </ModyWrap>
  );
};

export default ModifyProfile;
