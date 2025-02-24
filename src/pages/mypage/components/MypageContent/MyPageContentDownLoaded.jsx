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

  const { user } = useSelector((state) => state.authR);
  const downed = user?.downloaded || [];

  const isDeleteToggle = (id) => {
    if (onDelete) {
      setIsDelete((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    }
  };

  const deletedToggle = (index) => {
    if (onDelete && index.length !== 0) {
      if (confirm('삭제하시겠습니까?')) {
        dispatch(authActions.deleteDowned(index));
        setIsEditOpen(false);
        setIsDelete([]);
      }
    } else {
      alert(index.length === 0 ? '선택된 항목이 없습니다.' : '오류! 새로고침 후 다시 시도하세요.');
    }
  };

  useEffect(() => {
    dispatch(pageActions.addData(downed));
    dispatch(pageActions.totalData());
  }, [downed]);

  const { currentPage, postsperPage, totalPage } = useSelector((state) => state.pageR);
  const lastPost = currentPage * postsperPage;
  const currentPost = downed.slice(0, lastPost);

  return (
    <MyPageContentLikedWrap>
      <div className="header">
        <h2>다운 받은 콘텐츠</h2>
        {downed.length > 0 && (
          <div className="contentEdit">
            {iseditOpen ? (
              <>
                <Button variant="gray" size="small" onClick={() => deletedToggle(downed.map((item) => item.id))}>
                  전체선택
                </Button>
                <Button variant="gray" size="small" onClick={() => setIsEditOpen(false)}>
                  취소
                </Button>
                <Button variant="primary" size="small" onClick={() => deletedToggle(isDelete)}>
                  선택삭제
                </Button>
              </>
            ) : (
              <Button variant="primary" size="small" onClick={() => setIsEditOpen(true)}>
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
            <p>다운로드한 콘텐츠가 없습니다.</p>
          </div>
        ) : (
          <ul>
            {currentPost.map((content, i) => {
              const imageUrl =
                content.img ||
                (content.poster_path ? `https://image.tmdb.org/t/p/w500${content.poster_path}` : '') ||
                (content.backdrop_path ? `https://image.tmdb.org/t/p/w500${content.backdrop_path}` : '');

              return (
                <li key={content.id || i} onClick={() => isDeleteToggle(content.id)}>
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={content.title || content.name || '다운로드 콘텐츠'}
                      className={isDelete.includes(content.id) ? 'on' : ''}
                    />
                  ) : (
                    <div className="no-image">이미지 없음</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        {currentPage < totalPage && (
          <Button variant="gray" size="large" onClick={() => dispatch(pageActions.nextPage())}>
            더보기
          </Button>
        )}
      </div>
    </MyPageContentLikedWrap>
  );
};

export default MyPageContentDownLoaded;
