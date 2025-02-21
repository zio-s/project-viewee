import { useEffect, useState } from 'react';
import Button from '../../../../ui/button/defaultButton';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../../store/modules/authSlice';
import { pageActions } from '../../../../store/modules/pageSlice';
import { MyPageContentLikedWrap } from './style';

const MyPageContentDownLoaded = () => {
  const dispatch = useDispatch();
  const [iseditOpen, setIsEditOpen] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [isDelete, setIsDelete] = useState([]);
  const openToggle = () => {
    if (downed.length !== 0) {
      setIsEditOpen(!iseditOpen);
      setOnDelete(!onDelete);
    } else {
      alert('다운로드한 콘텐츠가 없습니다.');
    }
  };
  const { user } = useSelector((state) => state.authR);
  const { downed } = user;
  const isDeleteToggle = (id) => {
    if (onDelete) {
      setIsDelete((item) => [...item, id]);
    } else {
      return;
    }
  };
  const deletedToggle = (index) => {
    if (onDelete && index.length !== 0) {
      if (confirm('삭제하시겠습니까?') === true) {
        dispatch(authActions.deleteDowned(index));
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
  const allLikedId = downed.map((item) => item.id);
  useEffect(() => {
    dispatch(pageActions.addData(downed));
    dispatch(pageActions.totalData());
  }, [downed]);
  const { currentPage, postsperPage, totalPage } = useSelector((state) => state.pageR);
  console.log(totalPage);
  const lastPost = currentPage * postsperPage;
  const currentPost = downed.slice(0, lastPost);
  const morePost = () => {
    dispatch(pageActions.nextPage());
  };

  return (
    <MyPageContentLikedWrap>
      <div className="header">
        <h2>다운 받은 콘텐츠</h2>
        {downed.length === 0 ? (
          ''
        ) : (
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
        )}
      </div>
      <div className="content">
        {downed.length === 0 ? (
          <div className="nodata">
            <img src="/images/nodata.png" alt="nodata" />
            <p> 리뷰 내역이 없습니다.</p>
          </div>
        ) : (
          <ul>
            {currentPost.map((url, i) => (
              <li key={i} onClick={() => isDeleteToggle(url.id)}>
                <img src={url.img} className={isDelete.find((item) => item === url.id) ? 'on' : ''} />
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
      </div>
    </MyPageContentLikedWrap>
  );
};

export default MyPageContentDownLoaded;
