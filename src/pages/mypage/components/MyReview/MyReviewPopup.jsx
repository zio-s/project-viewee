import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../ui/button/defaultButton';
import { MyReviewPopupWrap } from './style';
import { authActions } from '../../../../store/modules/authSlice';
import { useEffect, useState } from 'react';

export const MyReviewPopUp = ({ itemID, editToggle }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.authR.user.reviewed.find((item) => item.id === itemID));
  const prevData = useSelector((state) => state.authR.prevUser);
  console.log(item);
  const { title, rate, date, img, content, id } = item;
  const [nowContent, setNowContent] = useState(content);
  const cancleToggle = () => {
    editToggle();
    dispatch(authActions.prevUser(prevData));
  };

  const changeInput = (e) => {
    const { value } = e.target;
    setNowContent(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.editReview({ id, content: nowContent }));
    editToggle();
  };

  return (
    <MyReviewPopupWrap>
      <div className="popContent">
        <div className="img">
          <img src={img} alt={title}></img>
          <div className="bgImg" />
        </div>
        <h2>{title}</h2>
        <p className="rate">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={rate > index ? 'fill' : ''}
              onClick={() => {
                dispatch(authActions.changeReviewRate({ id, index }));
              }}
            >
              ★
            </span>
          ))}
        </p>
        <p className="rateComment">
          {rate === 5
            ? '인생작 등극!'
            : rate === 4
            ? '재밌게 보셨군요!'
            : rate === 3
            ? '무난한 작품이었어요'
            : rate === 2
            ? '아쉬운 부분이 있었군요.'
            : rate === 1
            ? '큰 흥미를 느끼지 못했어요'
            : 'error'}
        </p>
        <form className="reviewContent" onSubmit={onSubmit}>
          <div className="content">
            <textarea type="text" value={nowContent} name="content" onChange={changeInput} />
          </div>
          <div className="button">
            <Button variant="gray" type="button" onClick={cancleToggle}>
              취소
            </Button>
            <Button variant="primary" type="submit">
              수정
            </Button>
          </div>
        </form>
      </div>
    </MyReviewPopupWrap>
  );
};
