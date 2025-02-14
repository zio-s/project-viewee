import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './style';
import { pageActions } from '../../../../store/modules/pageSlice';
import { useState } from 'react';

const Pagination = ({ data }) => {
  const dispatch = useDispatch();
  // dispatch(pageActions.addData(data));
  const { totalPage, currentPage } = useSelector((state) => state.pageR);
  const arr = [...Array(totalPage)];
  const onPrev = () => dispatch(pageActions.prevPage());
  const onNext = () => dispatch(pageActions.nextPage());
  const onGo = (index) => dispatch(pageActions.currentPage(index));
  return (
    <PaginationWrap>
      <button className="prevButton" onClick={onPrev}>
        <img className={totalPage === 1 ? '' : currentPage >= totalPage ? 'active' : ''} src="/icons/arrow/left.svg" />
      </button>
      <ul>
        {arr.map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? 'on' : ''} onClick={() => onGo(index + 1)}>
            {index + 1}
          </li>
        ))}
      </ul>
      <button className="nextButton" onClick={onNext}>
        <img className={currentPage < totalPage ? 'active' : ''} src="/icons/arrow/right.svg" />
      </button>
    </PaginationWrap>
  );
};

export default Pagination;
