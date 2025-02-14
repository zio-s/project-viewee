import { useEffect, useState } from 'react';
import { CCContentWrap } from './style';
import SubNav from './subNav';
import Pagination from './pagination';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../../../store/modules/pageSlice';

const Content = ({ data, children }) => {
  const [isActive, setIsActive] = useState('all');
  const [changeData, setChangeData] = useState(data);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    setIsActive(item);
    const tagData = item === 'all' ? data : data.filter((data) => data.tag === item);
    setChangeData(tagData);
    dispatch(pageActions.currentPage(1));
  };
  const { postsperPage, currentPage } = useSelector((state) => state.pageR);
  const lastPost = currentPage * postsperPage;
  const firstPost = lastPost - postsperPage;
  const currentPost = changeData.slice(firstPost, lastPost);
  useEffect(() => {
    setChangeData(data);
    dispatch(pageActions.currentPage(1));
  }, [data]);
  dispatch(pageActions.addData(changeData));
  dispatch(pageActions.totalData());
  return (
    <CCContentWrap>
      <div className="contentHeader">
        <SubNav data={data} isActive={isActive} handleClick={handleClick} />
        {children}
      </div>
      <div className="dataList">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {isActive === 'all'
              ? currentPost.map((item, index) => (
                  <tr key={index}>
                    <td className="tag">{item.tag}</td>
                    <td className="title">{item.title}</td>
                    <td className="data">{item.date}</td>
                  </tr>
                ))
              : currentPost
                  .filter((item) => item.tag === isActive)
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="tag">{item.tag}</td>
                      <td className="title">{item.title}</td>
                      <td className="data">{item.date}</td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <Pagination data={data} />
      </div>
    </CCContentWrap>
  );
};

export default Content;
