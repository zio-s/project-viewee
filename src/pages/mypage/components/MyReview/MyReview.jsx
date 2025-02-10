import { useDispatch, useSelector } from 'react-redux';
import { MyReviewWrap } from './style';
import Button from '../../../../ui/button/defaultButton';
import { authActions } from '../../../../store/modules/authSlice';
import { useEffect, useState } from 'react';
import { pageActions } from '../../../../store/modules/pageSlice';

export const MyReview = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authR);
  const { currentPage, postsperPage, totalPage } = useSelector((state) => state.pageR);
  const { reviewed } = user;
  const [nowReviewed, setNowRevied] = useState(reviewed);
  useEffect(() => {
    setNowRevied(reviewed);
  }, [user]);
  const deletedToggle = (id) => {
    if (confirm('삭제하시겠습니까?') === true) {
      dispatch(authActions.deleteReviewed(id));
    }
  };
  dispatch(pageActions.changePostsPerPage(8));
  const lastPost = currentPage * postsperPage;
  const currentPost = nowReviewed.slice(0, lastPost);
  const morePost = () => {
    dispatch(pageActions.nextPage());
  };
  return (
    <MyReviewWrap>
      <ul>
        {currentPost.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
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
              <Button variant="primary">수정</Button>
            </div>
          </li>
        ))}
      </ul>
      {currentPage >= totalPage ? (
        ''
      ) : (
        <Button variant="gray" size="large" onClick={() => morePost()}>
          더보기
        </Button>
      )}
    </MyReviewWrap>
  );
};
