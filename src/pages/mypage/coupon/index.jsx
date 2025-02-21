import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../ui/button/defaultButton';
import Input from '../../../ui/input';
import { CouponWrap } from './style';
import { useRef, useState } from 'react';
import { authActions } from '../../../store/modules/authSlice';
const Coupon = () => {
  const couponList = useSelector((state) => state.authR.user.coupon);
  const nowCoupon = useSelector((state) => state.couponR.couponList);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const changeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const textRef = useRef(null);
  const onsubmit = (e) => {
    e.preventDefault();
    const addCoupon = nowCoupon.find((coupon) => coupon.code === inputValue);
    if (!addCoupon) {
      alert('존재하지 않는 쿠폰입니다.');
      setInputValue('');
      textRef.current.focus();
      return;
    } else if (couponList.find((coupon) => coupon.code === inputValue)) {
      alert('이미 발급된 쿠폰입니다.');
      setInputValue('');
      textRef.current.focus();
      return;
    } else {
      alert(addCoupon.title + '쿠폰이 발급되었습니다.');
      dispatch(authActions.couponAdd(addCoupon));
      setInputValue('');
      textRef.current.focus();
    }
  };
  const onUse = (id) => {
    if (confirm('사용하시겠습니까?')) {
      dispatch(authActions.couponUse(id));
      alert('쿠폰 사용 완료!');
    }
  };
  return (
    <CouponWrap>
      <div className='wrap'>
      <h2>나의 할인 쿠폰</h2>
      <div className="content">
        <form className="inputCoupon" onSubmit={onsubmit}>
          <Input
            type="text"
            value={inputValue}
            placeholder="쿠폰코드를 입력해주세요"
            variant="gray"
            onChange={changeInput}
            ref={textRef}
          />
          <Button type="submit" variant="gray">
            쿠폰 등록
          </Button>
        </form>
        <div className="couponList">
          <ul>
            {couponList.map((coupon) =>
              coupon.used ? (
                ''
              ) : (
                <li key={coupon.id}>
                  <div className="couponInfo">
                    <div className="title">{coupon.title}</div>
                    <div className="dday">{coupon.dday}까지</div>
                  </div>
                  {coupon.use ? (
                    <Button variant="gray" onClick={() => onUse(coupon.id)}>
                      사용하기
                    </Button>
                  ) : (
                    ''
                  )}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="caution">
          <h3>쿠폰 등록 시 꼭 확인하세요!</h3>
          <ul>
            <li>
              쿠폰으로 지급되는 상품은 기존 보유 상품과 중복되어 적용되므로 가급적 이용중인 상품이 만료 된 뒤에 사용해
              주세요.
            </li>
            <li>유효기간이 지난 쿠폰은 등록하실 수 없습니다.</li>
            <li>등록하신 쿠폰은 환불이 불가능 합니다.</li>
            <li>쿠폰은 상업적 용도로 사용하거나 매매하실 수 없습니다.</li>
          </ul>
        </div>
      </div>
      </div>
    </CouponWrap>
  );
};

export default Coupon;
