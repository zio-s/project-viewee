import { FooterWrap } from './style';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrap>
      <div className="content">
        <div className="fNav">
          <ul>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">기프트카드</a>
            </li>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#">회사정보</a>
            </li>
            <li className="active">
              <a href="#">개인정보처리방침</a>
            </li>
          </ul>
        </div>
        <div className="addr">
          <div className="addr-intro">
            <p>
              뷰이서비스 통신판매업신고 번호: 제2025-신논현-1404호
              <br />
              전화번호: 00-223-123-7890 (수신자 부담)
            </p>
            <p>대표: 뷰즈</p>
            <p>이메일: viewee@good.com</p>
            <p>주소: 서울특별시 서초구 서초대로77길 41 대동2빌딩 10층</p>
            <p>사업자등록번호: 098-73-45612</p>
          </div>
          <div className="copy">&copy; {year}</div>
        </div>

        <div className="sns">
          <a href="#">
            <img src="" alt="facebook" />
          </a>
          <a href="#">
            <img src="" alt="instagram" />
          </a>
          <a href="#">
            <img src="" alt="twitter" />
          </a>
          <a href="#">
            <img src="" alt="youtube" />
          </a>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
