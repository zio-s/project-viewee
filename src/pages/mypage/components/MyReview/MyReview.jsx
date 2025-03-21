import { useDispatch, useSelector } from 'react-redux';
import { MyReviewWrap } from './style';
import Button from '../../../../ui/button/defaultButton';
import { authActions } from '../../../../store/modules/authSlice';
import { useEffect, useState } from 'react';
import { pageActions } from '../../../../store/modules/pageSlice';
import { MyReviewPopUp } from './MyReviewPopup';
export const MyReview = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authR);
  const { currentPage, postsperPage, totalPage } = useSelector((state) => state.pageR);
  const { reviewed } = user;
  const [nowReviewed, setNowReviewed] = useState(reviewed);
  useEffect(() => {
    setNowReviewed(reviewed);
  }, [user]);
  useEffect(() => {
    dispatch(pageActions.addData(reviewed));
    dispatch(pageActions.totalData());
  }, [reviewed]);
  const deletedToggle = (id) => {
    if (confirm('삭제하시겠습니까?') === true) {
      dispatch(authActions.deleteReviewed(id));
    }
  };
  useEffect(() => {
    dispatch(pageActions.changePostsPerPage(8));
  }, [dispatch]);
  const lastPost = currentPage * postsperPage;
  const currentPost = nowReviewed.slice(0, lastPost);
  const morePost = () => {
    dispatch(pageActions.nextPage());
  };

  const [editItem, setEditItem] = useState();
  const [onPopup, setOnPopup] = useState(false);
  const editToggle = (item) => {
    setOnPopup(!onPopup);
    setEditItem(item);
  };
  return (
    <MyReviewWrap>
      {reviewed.length === 0 ? (
        <div className="nodata">
          <img src="/images/nodata.png" alt="nodata" />
          <p> 리뷰 내역이 없습니다.</p>
        </div>
      ) : (
        <ul>
          {currentPost.map((item) => (
            <li key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} alt={item.title} />
              <div className="reviewItem">
                <h2>{item.title}</h2>
                <p className="rate">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={item.rate > index ? 'fill' : ''}>
                      ★
                    </span>
                  ))}
                </p>
                <p className="content">{item.content}</p>
              </div>
              <div className="button">
                <Button variant="gray" onClick={() => deletedToggle(item.id)}>
                  삭제
                </Button>
                <Button variant="primary" onClick={() => editToggle(item.id)}>
                  수정
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {currentPage >= totalPage ? (
        ''
      ) : (
        <Button variant="gray" size="large" onClick={() => morePost()}>
          더보기
        </Button>
      )}
      {onPopup ? <MyReviewPopUp itemID={editItem} editToggle={editToggle} /> : ''}
    </MyReviewWrap>
  );
};
