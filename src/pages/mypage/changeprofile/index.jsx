import { useDispatch, useSelector } from 'react-redux';
import { ChangeProfileWrap } from './style';
import { authActions } from '../../../store/modules/authSlice';
import { useEffect, useRef, useState } from 'react';
import Input from '../../../ui/input';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/button/defaultButton';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const [name, setName] = useState(user.username);
  useEffect(() => {
    setName(user.username);
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
    if (!name.trim()) {
      alert('이름을 입력 해주세요!');
      return;
    }

    setOnChageName(!onChangeName);
    dispatch(authActions.changeUserName(name));
  };

  useEffect(() => {
    setName(user.username);
  }, [user.username]);

  const prveName = () => {
    setOnChageName(!onChangeName);
    setName(user.username);
  };

  const onGo = () => {
    navigate('/mypage');
    window.location.reload();
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChangeTransitionEnd', (swiper) => {
        changeUser(swiper.activeIndex + 1);
        console.log(swiper.activeIndex);
      });
    }
  }, []);
  return (
    <ChangeProfileWrap>
      <h2>프로필 전환</h2>
      {onChangeName ? (
        <div className="userProfile onChange">
          <div className="main users">
            <div className="editImg">
              <input type="file" name="userImg" accept="image/*" ref={fileInputRef} onChange={changeImg}></input>
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
          {isMobile && nowUser.length > 1 ? (
            <Swiper
              className="swiperUser"
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              initialSlide={0}
            >
              {' '}
              {nowUser.map((item, i) => (
                <SwiperSlide key={i} className={`${item.id !== user.id ? 'connected' : 'main'} users`}>
                  <img className="connectedUsers" src={item.profileImg} onClick={() => onGo()} />
                  <div className="editName">
                    <div className="userName">{item.username}</div>
                    <div className="edit" onClick={changeUserName}>
                      <img src="/icons/util/pencil.svg" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            nowUser.map((item, i) => (
              <div
                className={`${item.id !== user.id ? 'connected' : 'main'} users`}
                key={i}
                onClick={() => changeUser(item.id)}
              >
                <div className="editImg" onClick={() => onGo()}>
                  <img className="connectedUsers" src={item.profileImg}></img>
                  <div className="ongo">Go</div>
                </div>
                <div className="editName">
                  <div className="userName">{item.username}</div>
                  <div className="edit" onClick={changeUserName}>
                    <img src="/icons/util/pencil.svg" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </ChangeProfileWrap>
  );
};

export default ChangeProfile;
