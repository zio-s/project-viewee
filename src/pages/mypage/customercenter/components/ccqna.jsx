import Button from '../../../../ui/button/defaultButton';
import { CCQnAvWrap } from './style';

const CCQnA = () => {
  return (
    <CCQnAvWrap>
      <div className="contact">
        <img src="/icons/util/call.svg" />
        <a href="tel:+01233210">0123-3210</a>
        <p>평일 09:00-18:00 / 점심시간 13:00 -14:00 / 주말 및 공휴일 휴무</p>
      </div>
      <div className="desc">
        Viewee 서비스 이용 시 불편사항이나 문의사항을 1:1 문의로 보내주시면 신속하고 친절하게 안내 해드리겠습니다!
      </div>
      <a href="/qna">
        <Button variant="primary">1:1 문의하기</Button>
      </a>
    </CCQnAvWrap>
  );
};

export default CCQnA;
