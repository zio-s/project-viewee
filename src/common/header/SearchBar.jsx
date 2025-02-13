import { useCallback, useEffect, useRef, useState } from 'react';
import { SearchContainer } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent } from '../../store/modules/getThunk';
import { searchActions } from '../../store/modules/searchSlice';
import { useNavigate } from 'react-router';

const SearchBar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const { searchData, isLoading, error } = useSelector((state) => state.searchR);
  const [text, setText] = useState('');
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      navigate(`/category?search=${encodeURIComponent(text)}`);
      dispatch(searchActions.setSearchQuery(text));
      dispatch(searchContent({ query: text }));
      setIsOpen(false);
    }
  };
  return (
    <>
      <SearchContainer isOpen={isOpen}>
        <div className="search-inner">
          <form onSubmit={onSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={text}
              placeholder="제목, 인물을 검색해주세요"
              className="search-input"
              onChange={onChangeInput}
            />
          </form>
          <div className="popular-keywords">
            <span className="keyword">#액션천재 재미제로</span>
            <span className="keyword">#리뷰하면 저장</span>
            <span className="keyword">#ㄱㄱㄱㄱ</span>
            <span className="keyword">#액션천재 재미제로</span>
            <span className="keyword">#리뷰하면 저장</span>
            <span className="keyword">#ㄱㄱㄱㄱ</span>
            <span className="keyword">#김태리는 저장</span>
            <span className="keyword">#ㄱㄱㄱㄱ</span>
            <span className="keyword">#액션천재 재미제로</span>
            <span className="keyword">#액션천재 재미제로</span>
            <span className="keyword">#액션천재 재미제로</span>
          </div>

          {isLoading && <div className="loading">검색 중...</div>}
          {error && <div className="error">검색 중 오류가 발생했습니다</div>}
        </div>
      </SearchContainer>
    </>
  );
};
export default SearchBar;
