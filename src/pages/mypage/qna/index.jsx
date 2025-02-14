import { useSelector } from 'react-redux';
import { QnAWrap } from './style';
import Input from '../../../ui/input';
import CheckBox from '../../../ui/checkbox';
import Button from '../../../ui/button/defaultButton';
import { useState } from 'react';

const QnA = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: '뷰이(Viewee)란 무엇인가요?',
      answer: '뷰이(Viewee)는 주문형 영화와 프로그램을 시청할 수 있는 스트리밍 서비스입니다.',
      toggle: false,
    },
    {
      id: 2,
      question: '뷰이(Viewee)의 가격은 얼마인가요?',
      answer: '구독 서비스의 가격은 다음 페이지에서 확인하실 수 있습니다.',
      link: '/subscribe',
      toggle: false,
    },
    {
      id: 3,
      question: '뷰이(Viewee)에서는 어떤 콘텐츠를 이용할 수 있나요?',
      answer: '뷰이(Viewee)를 구독하시면 영화, 드라마, 예능, 애니, 키즈 등의 다양한 콘텐츠를 이용하실 수 있습니다.',
      toggle: false,
    },
    {
      id: 4,
      question: '뷰이(Viewee)에서는 어떻게 시청하나요?',
      answer: '원하시는 콘텐츠를 클릭하시거나, 검색창에서 검색하시면 시청 가능합니다.',
      toggle: false,
    },
    {
      id: 5,
      question: '뷰이(Viewee)에 가입하려면 어떻게 해야 하나요?',
      answer: '뷰이 회원가입 페이지는 다음과 같습니다.',
      link: '/signup',
      toggle: false,
    },
    {
      id: 6,
      question: '뷰이(Viewee) 무료 체험이란 무엇인가요?',
      answer: '뷰이 구독 서비스를 무료로 체험해보실 수 있습니다. 자세한 내용은 다음 페이지를 참고하세요. ',
      link: '/',
      toggle: false,
    },
    {
      id: 7,
      question: '뷰이(Viewee) 고객 지원팀에 어떻게 연락하나요?',
      answer: ' 00-223-123-7890 또는 viewee@good.com로 연락 가능합니다.',
      toggle: false,
    },
    {
      id: 8,
      question: '뷰이(Viewee) 결제 방법은 무엇인가요?',
      answer: '현재 뷰이에서는 신용카드 결제를 지원하고 있습니다.',
      toggle: false,
    },
  ]);
  const { user } = useSelector((state) => state.authR);
  const handletoggle = (id) => {
    setFaq((prevFaq) => prevFaq.map((item) => (item.id === id ? { ...item, toggle: !item.toggle } : item)));
    console.log(faq[id - 1]);
  };

  return (
    <QnAWrap>
      <div className="contentWrap">
        <div className="info">
          <div className="title">
            <h2>문의 페이지에 오신 걸 환영합니다!</h2>
            <p>저희 제품에 문제가 있을 수 있는 경우 도와드리겠습니다.</p>
          </div>
          <img src="/images/banner3.png" />
        </div>
        <div className="inputBox">
          {user ? (
            <form className="submitQuestion">
              {' '}
              <div className="name item">
                <p>이름</p>
                <Input type="text" variant="gray" value={user.username} />
              </div>
              <div className="itemSet">
                <div className="email item">
                  <p>Email</p>
                  <Input type="text" variant="gray" value={user.email} />
                </div>
                <div className="phone item">
                  <p>휴대폰 번호</p>
                  <Input variant="gray" type="text" value={user.phone} />
                </div>
              </div>
              <div className="question item">
                <p>문의 내용</p>
                <textarea type="text" placeholder="문의하실 내용을 적어주세요" />
              </div>
              <div className="agree">
                <CheckBox>이용 약관 및 개인정보 보호정책에 동의합니다</CheckBox>
                <Button type="submit">문의 하기</Button>{' '}
              </div>
            </form>
          ) : (
            ''
          )}
        </div>
        <div className="faq">
          <div className="title">
            <h3>자주 묻는 질문</h3>
            <p>
              질문 있으신가요? 답변이 있습니다! Viewee에 관한 가장 일반적인 질문에 대한 답변은 FAQ 섹션에서 확인하세요.
            </p>
          </div>
          <div className="faqList">
            {faq.map((faq) => (
              <div key={faq.id} className="faqItem">
                <div className="faqItemWrapper">
                  <div className="no">{faq.id <= 9 ? '0' + faq.id : faq.id}</div>
                  <div className="itemContent">
                    <div className="accordian">
                      <h4>{faq.question}</h4>
                      <p className={faq.toggle ? 'on' : ''}>
                        {faq.answer} {faq.link && <a href={faq.link}>바로가기</a>}
                      </p>
                    </div>
                    <div className="arrow" onClick={() => handletoggle(faq.id)}>
                      {faq.toggle ? <img src="/icons/arrow/bottom.svg" /> : <img src="/icons/arrow/top.svg" />}
                    </div>
                  </div>
                </div>
                <div className="border" />
              </div>
            ))}
          </div>
        </div>
        <div className="banner">
          <img src="/images/banner4.png" />
        </div>
      </div>
    </QnAWrap>
  );
};

export default QnA;
