import { useEffect, useState } from 'react';
import Button from '../../../../ui/button/defaultButton';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../../store/modules/authSlice';
import { pageActions } from '../../../../store/modules/pageSlice';
import { MyPageContentLikedWrap } from './style';

const MyPageContentWatched = () => {
  const dispatch = useDispatch();
  const [iseditOpen, setIsEditOpen] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [isDelete, setIsDelete] = useState([]);
  const openToggle = () => {
    if (watched.length !== 0) {
      setIsEditOpen(!iseditOpen);
      setOnDelete(!onDelete);
    } else {
      alert('시청하신 콘텐츠가 없습니다.');
    }
  };
  const { user } = useSelector((state) => state.authR);
  const { watched } = user;
  const isDeleteToggle = (id) => {
    if (!onDelete) return;
    setIsDelete((prev) => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const deletedToggle = (index) => {
    if (onDelete && index.length !== 0) {
      if (confirm('삭제하시겠습니까?') === true) {
        dispatch(authActions.deleteLiked(index));
        setIsEditOpen(false);
      } else {
        setIsDelete([]);
      }
    } else if (index.length == 0) {
      alert('선택된 항목이 없습니다.');
    } else {
      alert('오류! 새로고침 후 다시 시도하세요.');
    }
  };
  const allLikedId = watched.map((item) => item.id);
  useEffect(() => {
    dispatch(pageActions.addData(watched));
    dispatch(pageActions.totalData());
  }, [watched]);
  const { currentPage, postsperPage, totalPage } = useSelector((state) => state.pageR);
  const lastPost = currentPage * postsperPage;
  const currentPost = watched.slice(0, lastPost);
  const morePost = () => {
    dispatch(pageActions.nextPage());
  };

  return (
    <MyPageContentLikedWrap>
      <div className="header">
        <h2>시청 콘텐츠</h2>
        <div className="contentEdit">
          {iseditOpen ? (
            <>
              <Button variant="gray" size="small" onClick={() => deletedToggle(allLikedId)}>
                전체선택
              </Button>
              <Button variant="gray" size="small" onClick={openToggle}>
                취소
              </Button>
              <Button variant="primary" size="small" onClick={() => deletedToggle(isDelete)}>
                선택삭제
              </Button>
            </>
          ) : (
            <Button variant="primary" size="small" onClick={openToggle}>
              수정하기
            </Button>
          )}
        </div>
      </div>

      <div className="content">
        <ul>
          {currentPost.map((url, i) => (
            <li key={i} onClick={() => isDeleteToggle(url.id)}>
              <img src={url.img} className={isDelete.find((item) => item === url.id) ? 'on' : ''} />
              <svg
                viewBox="0 0 100 100"
                className={`check-mark ${isDelete.find((item) => item === url.id) ? 'check-active' : ''}`}
              >
                <circle cx="50" cy="50" r="40" className="check-circle" />
                <path d="M20,50 L40,70 L80,30" fill="none" stroke="#F05A7E" strokeWidth="8" className="check-path" />
              </svg>
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
      </div>
    </MyPageContentLikedWrap>
  );
};

export default MyPageContentWatched;
