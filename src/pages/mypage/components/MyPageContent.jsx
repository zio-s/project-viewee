import { useState } from 'react';
import Button from '../../../ui/button/defaultButton';
import { MyPageContentWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/modules/authSlice';

const MyPageContent = () => {
  const dispatch = useDispatch();
  const [iseditOpen, setIsEditOpen] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [isDelete, setIsDelete] = useState([]);
  const openToggle = () => {
    setIsEditOpen(!iseditOpen);
    setOnDelete(!onDelete);
  };
  const { user } = useSelector((state) => state.authR);
  const { liked } = user;
  const deleteClicked = (index) => {
    if (onDelete) {
      setIsDelete([index]);
      dispatch(authActions.deleteLiked(isDelete));
    }
  };
  return (
    <MyPageContentWrap>
      <div className="header">
        <h2>나의 관심 콘텐츠</h2>
        <div className="contentEdit">
          {iseditOpen ? (
            <>
              <Button variant="gray" size="small" onClick={() => onDelete(liked.length - 1)}>
                전체선택
              </Button>
              <Button variant="gray" size="small" onClick={openToggle}>
                취소
              </Button>
              <Button variant="primary" size="small" onClick={() => onDelete(0)}>
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
          {liked.map((url, i) => (
            <li key={i}>
              <img src={url} />
            </li>
          ))}
        </ul>
        <Button variant="gray" size="large">
          더보기
        </Button>
      </div>
    </MyPageContentWrap>
  );
};

export default MyPageContent;
