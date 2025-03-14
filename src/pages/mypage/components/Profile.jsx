import { ProfileWrap } from './style';
import Button from '../../../ui/button/defaultButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { user } = useSelector((state) => state.authR);
  const { username, profileImg, isMembershiped, coupon } = user;
  const navigate = useNavigate();
  const onSubscribe = () => {
    navigate('/subscribe');
  };
  const couponNumber = coupon.filter((item) => item.used === false).length;
  return (
    <ProfileWrap>
      <div className="profile">
        <img className="profileImg" src={profileImg} />
        <div className="profileInfo">
          <div className="user">
            <h2>
              환영합니다{' '}
              <div className="userName">
                <a href="/modifyprofile">{username}</a>
              </div>{' '}
              님!
            </h2>
            <div className="edit">
              <a href="/modifyprofile">
                <img src="/icons/util/pencil.svg" />
              </a>
            </div>
            <a href="/changeprofile">
              <Button variant="gray" size="small">
                프로필 전환
              </Button>
            </a>
          </div>
          <Button variant="gray" size="small" className="membership" onClick={onSubscribe}>
            {isMembershiped ? '뷰이 프리미엄 구독 중' : '구독권 없음'}
          </Button>
        </div>
      </div>
      <div className="profileRight">
        <a href="/coupon">
          <div className="nowCoupon">
            <div className="icon">
              <img src="/icons/util/ticket.svg" />
            </div>
            <div className="coupon">보유중인 쿠폰 {couponNumber}</div>
          </div>
        </a>
        <a href="/modifyprofile">
          <div className="userEdit">회원정보 수정</div>
        </a>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
