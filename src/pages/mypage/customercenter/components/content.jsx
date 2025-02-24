import { useEffect, useState } from 'react';
import { CCContentWrap } from './style';
import SubNav from './subNav';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../../../store/modules/pageSlice';
import Pagination from '../../../../ui/pagination';

const Content = ({ data, children, isFnQ, search, setSearch, prevData, resetSearch }) => {
  const [isActive, setIsActive] = useState('전체');
  const [changeData, setChangeData] = useState(data);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    if (item === '전체') {
      setIsActive('전체');
      setSearch(''); // 🔹 검색어 초기화
      setChangeData(prevData);
    } else {
      setIsActive(item);
      setChangeData(data.filter((data) => data.tag === item));
    }
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
  useEffect(() => {
    dispatch(pageActions.addData(changeData));
    dispatch(pageActions.totalData());
  }, [changeData]);

  const nowDate = new Date();
  const getYear = nowDate.getFullYear();
  const getMonth = nowDate.getMonth() + 1;
  const getDay = nowDate.getDate();
  const contentData = currentPost.map((item) => item.date.split('-'));

  const isYear = contentData.map((item) => Number(getYear - item[0]) * 365);
  const isMonth = contentData.map((item) => (getMonth - item[1]) * 30);
  const isDay = contentData.map((item) => getDay - item[2]);
  const isNew = isYear.map((item, idx) => item + isMonth[idx] + isDay[idx]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CCContentWrap>
      <div className={isFnQ ? 'fnq contentHeader' : 'contentHeader'}>
        <SubNav data={data} isActive={isActive} handleClick={handleClick} search={search} resetSearch={resetSearch} />
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
            {isActive === '전체'
              ? currentPost.map((item, index) => (
                  <tr key={index}>
                    <td className="tag">{item.tag}</td>
                    <td className="title">
                      <div className="titleName">{item.title}</div>{' '}
                      {isNew[index] <= 30 ? (
                        <div className="new on">{isTablet ? 'N' : 'NEW'}</div>
                      ) : (
                        <div className="new"></div>
                      )}
                    </td>
                    <td className="data">{item.date}</td>
                  </tr>
                ))
              : currentPost
                  .filter((item) => item.tag === isActive)
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="tag">{item.tag}</td>
                      <td className="title">
                        {' '}
                        <div className="titleName">{item.title}</div>{' '}
                        {isNew[index] <= 30 ? (
                          <div className="new on">{isMobile ? 'N' : 'NEW'}</div>
                        ) : (
                          <div className="new"></div>
                        )}
                      </td>
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
