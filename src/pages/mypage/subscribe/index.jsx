import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { SubscribeWrap } from './style';

const Subscribe = () => {
  const subscribeList = [
    {
      id: 1,
      title: 'Basic',
      content: '최근에 출시된 타이틀을 포함한 다양한 콘텐츠를 제공하는 기본 요금제 입니다.',
      price: 5900,
      priceYear: 62900,
      display: 'HD',
      compability: 'Yes',
      sameTime: 1,
      download: '30개',
      profile: 4,
    },
    {
      id: 2,
      title: 'Standard',
      content: '대부분의 신작 및 독점 콘텐츠를 포함한 다양한 영화와 프로그램에 대한 액세스',
      price: 12900,
      priceYear: 139000,
      display: 'FHD',
      compability: 'Yes',
      sameTime: 2,
      download: '무제한',
      profile: 4,
    },
    {
      id: 3,
      title: 'Premium',
      content: '모든 신작 및 오프라인 시청을 포함한 다양한 영화와 프로그램에 대한 액세스',
      price: 15900,
      priceYear: 159000,
      display: '최고',
      compability: 'Yes',
      sameTime: 4,
      download: '무제한',
      profile: 4,
    },
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [verseToggle, setVerseToggle] = useState(subscribeList[0]);
  const toggleVerse = (index) => {
    setVerseToggle(subscribeList[index]);
  };

  const [priceToggle, setPriceToggle] = useState('month');
  const toggle = () => {
    setPriceToggle(priceToggle === 'month' ? 'year' : 'month');
  };
  console.log(verseToggle);

  return (
    <SubscribeWrap>
      <div className="contentWrapper">
        <div className="subheader">
          <div className="title">
            <h2>당신에게 맞는 요금제를 선택하세요</h2>
            <p>
              Viewee에 가입하고 시청자의 취향에 맞춘 유연한 구독 옵션 중에서 선택하세요. 끊임없는 엔터테인먼트를
              준비하세요!
            </p>
          </div>
          <div className="toggleButton" onClick={toggle}>
            {priceToggle === 'month' ? (
              <>
                <div className="month on">매월</div>
                <div className="years">연간</div>
              </>
            ) : (
              <>
                <div className="month">매월</div>
                <div className="years on">연간</div>
              </>
            )}
          </div>
        </div>
        <div className="subscribeList">
          <ul>
            {subscribeList.map((item) => (
              <ItemList
                key={item.id}
                title={item.title}
                content={item.content}
                price={priceToggle === 'month' ? item.price : item.priceYear}
                toggle={priceToggle === 'month' ? '월' : '년'}
              ></ItemList>
            ))}
          </ul>
        </div>
        <div className="verse">
          <div className="title">
            <h2>이용권을 비교하여, 맞는 요금제를 찾아보세요!</h2>
            <p>
              Viewee는 기본, 표준, 프리미엄의 세 가지 요금제를 제공합니다. 각 요금제의 기능을 비교하여 자신에게 맞는
              요금제를 선택하세요.
            </p>
          </div>
          {isMobile ? (
            <div className="mobile">
              <div className="verseTitle">
                {subscribeList.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${verseToggle.id === item.id ? 'on' : ''} verseTitleItem`}
                    onClick={() => toggleVerse(index)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
              <div className="verseContent">
                <div className="price">
                  <div className="versetitle">가격</div>
                  {priceToggle === 'month'
                    ? verseToggle.price.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })
                    : verseToggle.priceYear.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}
                  /{priceToggle === 'month' ? '월' : '년'}
                </div>
                <div className="display">
                  <div className="versetitle">화질</div>
                  {verseToggle.display}화질
                </div>
                <div className="compability">
                  <div className="versetitle">모바일+태블릿+PC</div>
                  {verseToggle.compability}
                </div>
                <div className="sameTime">
                  <div className="versetitle">동시시청</div>
                  {verseToggle.sameTime}명
                </div>
                <div className="download">
                  <div className="versetitle">다운로드 무제한</div>
                  {verseToggle.download}
                </div>
                <div className="profile">
                  <div className="versetitle">프로필</div>
                  {verseToggle.profile}명
                </div>
              </div>
            </div>
          ) : (
            <table>
              <tbody>
                <tr className="tableTitle">
                  <th>이용권 구독</th>
                  <th>basic</th>
                  <th>
                    <div className="commentth">
                      Standard<div className="comment">추천</div>
                    </div>
                  </th>
                  <th>Premium</th>
                </tr>
                <tr>
                  <th>가격</th>
                  {subscribeList.map((item) => (
                    <td key={item.id}>
                      {priceToggle === 'month'
                        ? item.price.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })
                        : item.priceYear.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}
                      /{priceToggle === 'month' ? '월' : '년'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th>화질</th>
                  <td>HD화질</td>
                  <td>FHD화질</td>
                  <td>최고화질</td>
                </tr>
                <tr>
                  <th>모바일+태블릿+PC</th>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>동시시청</th>
                  <td>1명</td>
                  <td>2명</td>
                  <td>4명</td>
                </tr>
                <tr>
                  <th>다운로드 무제한</th>
                  <td>30개</td>
                  <td>무제한</td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <th>프로필</th>
                  <td>4명</td>
                  <td>4명</td>
                  <td>4명</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div className="banner">
          <a href="/">{isMobile ? <img src="/images/banner2.png" /> : <img src="/images/banner1.png" />}</a>
        </div>
      </div>
    </SubscribeWrap>
  );
};

export default Subscribe;
