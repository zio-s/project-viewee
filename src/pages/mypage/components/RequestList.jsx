import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../ui/button/defaultButton';
import Pagination from '../../../ui/pagination';
import { RequestListWrap } from './style';
import { pageActions } from '../../../store/modules/pageSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const RequestList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.authR.user.requested);
  useEffect(() => {
    dispatch(pageActions.addData(item));
    dispatch(pageActions.totalData());
  }, [dispatch]);

  const { postsperPage, currentPage } = useSelector((state) => state.pageR);
  const lastPost = currentPage * postsperPage;
  const firstPost = lastPost - postsperPage;
  const currentPost = item.slice(firstPost, lastPost);

  return (
    <RequestListWrap>
      <Button className="goqna" variant="ghost" onClick={() => navigate('/qna')}>
        문의하기
      </Button>

      {item.length === 0 ? (
        <div className="nodata">
          <img src="/images/nodata.png" alt="nodata" />
          <p>문의하신 내역이 없습니다.</p>
        </div>
      ) : (
        <div className="list">
          <table>
            <tbody>
              <tr className="tableTitle">
                <th>상태</th>
                <th>구분</th>
                <th className="titleList">제목</th>
                <th>등록일</th>
              </tr>
              {currentPost.map((item) => (
                <tr key={item.id}>
                  <td className="state">{item.state}</td>
                  <td>{item.category}</td>
                  <td className="titleList">{item.title}</td>
                  <td className="date">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination data={item} />
        </div>
      )}

      <div className="banner">
        <img src="/images/banner4.png" />
      </div>
    </RequestListWrap>
  );
};
