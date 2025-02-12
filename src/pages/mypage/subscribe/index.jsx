import { useState } from 'react';
import ItemList from './ItemList';
import { SubscribeWrap } from './style';

const Subscribe = () => {
  const subscribeList = [
    {
      id: 1,
      title: 'Basic Plan',
      content: '최근에 출시된 타이틀을 포함한 다양한 콘텐츠를 제공하는 기본 요금제 입니다.',
      price: 5900,
      priceYear: 62900,
    },
    {
      id: 2,
      title: 'Standard Plan',
      content: '대부분의 신작 및 독점 콘텐츠를 포함한 다양한 영화와 프로그램에 대한 액세스',
      price: 12900,
      priceYear: 139000,
    },
    {
      id: 3,
      title: 'Premium Plan',
      content: '모든 신작 및 오프라인 시청을 포함한 다양한 영화와 프로그램에 대한 액세스',
      price: 15900,
      priceYear: 159000,
    },
  ];
  const [priceToggle, setPriceToggle] = useState('month');
  const toggle = () => {
    setPriceToggle(priceToggle === 'month' ? 'year' : 'month');
  };
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
        </div>
        <div className="banner">
          <a href="/">
            <img src="/images/banner1.png" />
          </a>
        </div>
      </div>
    </SubscribeWrap>
  );
};

export default Subscribe;
