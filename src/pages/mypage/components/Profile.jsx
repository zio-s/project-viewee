import { useState } from 'react';
import { ProfileWrap } from './style';
import Button from '../../../ui/button/defaultButton';

const Profile = () => {
  const couponNumber = 0;
  const name = '김민지';
  const [isMembershiped, useIsMemebershiped] = useState(true);
  return (
    <ProfileWrap>
      <div className="profile">
        <img
          className="profileImg"
          src="https://i.namu.wiki/i/khXs0TuOmkXJgKpC4ybkuB_A1h57NBKsbNz_TkVE1K1Dv5-wceOmrmYjUMWZjEEzUKrgMJERPlcVuK0BU7wjwv1x9R0gC4M6kB7RMurrTomL8sU6FiU-O3uhxh5312NXdOMG8cskBQKneF4wsZmXXg.webp"
        />
        <div className="profileInfo">
          <div className="user">
            <h2>
              환영합니다 <div className="userName">{name}</div> 님!
            </h2>
            <div className="edit">수정</div>
            <a href="/changeProfile">
              <Button variant="gray" size="small">
                프로필 전환
              </Button>
            </a>
          </div>
          <Button variant="gray" size="small" className="membership">
            {isMembershiped ? '뷰이 프리미엄 구독 중' : '구독권 없음'}
          </Button>
        </div>
      </div>
      <div className="profileRight">
        <div className="coupon">보유중인 쿠폰 {couponNumber}</div>
        <div className="userEdit">회원정보 수정</div>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
