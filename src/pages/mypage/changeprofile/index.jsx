import { useDispatch, useSelector } from 'react-redux';
import { ChangeProfileWrap } from './style';
import { authActions } from '../../../store/modules/authSlice';
import { useEffect, useRef, useState } from 'react';
import Input from '../../../ui/input';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/button/defaultButton';
const ChangeProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, connected, joinData } = useSelector((state) => state.authR);

  const nowConnectedID = connected.find((item) => item.includes(user.id));
  const [nowUser, setNowUser] = useState(joinData.filter((item) => nowConnectedID.includes(item.id)));
  useEffect(() => {
    setNowUser(joinData.filter((item) => nowConnectedID.includes(item.id)));
  }, [joinData]);

  const changeUser = (id) => {
    dispatch(authActions.changeUser(id));
  };

  const fileInputRef = useRef(null);
  const changeImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(authActions.changeUserImg(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const [onChangeName, setOnChageName] = useState(false);
  const [name, setName] = useState(user.name);
  useEffect(() => {
    setName(user.name);
  }, [user]);
  const changeInput = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const changeUserName = () => {
    setOnChageName(!onChangeName);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('변경할 이름을 입력하세요.');
      return;
    }

    setOnChageName(!onChangeName);
    dispatch(authActions.changeUserName(name));
  };

  useEffect(() => {
    setName(user.name);
  }, [user.name]);

  const prveName = () => {
    setOnChageName(!onChangeName);
    setName(user.name);
  };

  const onGo = () => {
    navigate('/mypage');
    window.location.reload();
  };
  return (
    <ChangeProfileWrap>
      <h2>프로필 전환</h2>
      {onChangeName ? (
        <div className="userProfile onChange">
          <div className="main users">
            <div className="editImg">
              <input type="file" name="userImg" accept="imgae/*" ref={fileInputRef} onChange={changeImg}></input>
              <img className="connectedUsers" src={user.profileImg}></img>
              <div className="imgChange" onClick={() => fileInputRef.current.click()}>
                프로필 이미지 수정
              </div>
            </div>
            <div className="editName">
              <form className="nameChange" onSubmit={onSubmit}>
                <div className="input">
                  이름변경
                  <Input variant="gray" placeholder={user.username} name="name" value={name} onChange={changeInput} />
                </div>
                <div className="edit">
                  <Button variant="gray" size="large" type="button" onClick={() => prveName()}>
                    취소
                  </Button>
                  <Button variant="primary" size="large" type="submit">
                    확인
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="userProfile nochange">
          {nowUser.map((item, i) => (
            <div
              className={`${item.id !== user.id ? 'connected' : 'main'} users`}
              key={i}
              onClick={() => changeUser(item.id)}
            >
              <div className="editImg">
                <img className="connectedUsers" src={item.profileImg}></img>
                <div className="ongo" onClick={() => onGo()}>
                  Go
                </div>
              </div>
              <div className="editName">
                <div className="userName">{item.username}</div>
                <div className="edit" onClick={changeUserName}>
                  <img src="/icons/util/pencil.svg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </ChangeProfileWrap>
  );
};

export default ChangeProfile;
