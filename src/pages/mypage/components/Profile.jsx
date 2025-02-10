import { ProfileWrap } from './style';
import Button from '../../../ui/button/defaultButton';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.authR);
  const { username, profileImg, isMembershiped, couponNumber } = user;
  return (
    <ProfileWrap>
      <div className="profile">
        <img className="profileImg" src={profileImg} />
        <div className="profileInfo">
          <div className="user">
            <h2>
              환영합니다{' '}
              <div className="userName">
                <a href="/useredit">{username}</a>
              </div>{' '}
              님!
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
        <a href="/coupon">
          <div className="coupon">보유중인 쿠폰 {couponNumber}</div>
        </a>
        <a href="/useredit">
          <div className="userEdit">회원정보 수정</div>
        </a>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
