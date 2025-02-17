import { useSelector } from 'react-redux';
import MyPageContentWatched from './MyPageContentWatched';
import MyPageContentLiked from './MyPageContentLiked';
import MyPageContentDownLoaded from './MyPageContentDownLoaded';
import { MyPageContentWrap } from './style';

const MyPageContent = ({ changeContent }) => {
  const { user } = useSelector((state) => state.authR);
  const { watched, liked, downed } = user;
  return (
    <MyPageContentWrap>
      <section className="played">
        <div className="title" onClick={() => changeContent(<MyPageContentWatched />)}>
          <h2>시청중인 콘텐츠</h2>
          <div className="iconNext">
            {' '}
            <img src="/icons/arrow/right.svg" />
          </div>
        </div>
        <ul>
          {watched.map((item) => (
            <li key={item.id}>
              <img src={item.img}></img>
            </li>
          ))}
        </ul>
      </section>
      <section className="liked">
        <div className="title" onClick={() => changeContent(<MyPageContentLiked />)}>
          <h2>저장한 콘텐츠</h2>
          <div className="iconNext">
            <img src="/icons/arrow/right.svg" />
          </div>
        </div>
        <ul>
          {liked.map((item) => (
            <li key={item.id}>
              <img src={item.img}></img>
            </li>
          ))}
        </ul>
      </section>
      <section className="downed">
        <div className="title" onClick={() => changeContent(<MyPageContentDownLoaded />)}>
          <h2>다운로드한 콘텐츠</h2>
          <div className="iconNext">
            {' '}
            <img src="/icons/arrow/right.svg" />
          </div>
        </div>
        <ul>
          {downed.map((item) => (
            <li key={item.id}>
              <img src={item.img}></img>
            </li>
          ))}
        </ul>
        <div className="caution">
          다운 받은 콘텐츠는 다운받은 날로부터 180일 보유 가능하며 최대 다운 가능 개수는 5개로 제한되어 있습니다.
        </div>
      </section>
    </MyPageContentWrap>
  );
};

export default MyPageContent;
