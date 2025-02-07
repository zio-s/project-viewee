import { useDispatch, useSelector } from 'react-redux';
import { ChangeProfileWrap } from './style';
import { authActions } from '../../../store/modules/authSlice';
const ChangeProfile = () => {
  const { user, connected, joinData } = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  const nowConnectedID = connected.find((item) => item.includes(user.id));
  const nowUser = joinData.filter((item) => nowConnectedID.includes(item.id));
  const changeUser = (id) => {
    dispatch(authActions.changeUser(id));
  };
  return (
    <ChangeProfileWrap>
      <h2>프로필 전환</h2>
      <div className="userProfile">
        {nowUser.map((item, i) => (
          <div
            className={`${item.id !== user.id ? 'connected' : ''} users`}
            key={i}
            onClick={() => changeUser(item.id)}
          >
            <img className="connectedUsers" src={item.profileImg} />
            <div className="editName">
              <div className="userName">{item.username}</div>
              <div className="edit">수정</div>
            </div>
          </div>
        ))}
      </div>
    </ChangeProfileWrap>
  );
};

export default ChangeProfile;
