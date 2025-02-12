import { useCallback, useEffect, useRef, useState } from 'react';
import { SearchContainer } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent } from '../../store/modules/getThunk';
import { searchActions } from '../../store/modules/searchSlice';
import { useNavigate } from 'react-router';

const SearchBar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();
  const { searchData, isLoading, error } = useSelector((state) => state.searchR);
  const [text, setText] = useState('');
  const onChangInput = useCallback(
    (e) => {
      const query = e.target.value;
      setText(query);
      const timer = setTimeout(() => {
        if (query.trim()) {
          dispatch(searchActions.setSearchQuery(query));
          dispatch(searchContent({ query }));
        } else {
          dispatch(searchActions.clearSearch());
        }
      }, 300);
      return () => clearTimeout(timer);
    },
    [dispatch]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      navigate('/category');
      dispatch(searchActions.setSearchQuery(text));
      dispatch(searchContent({ query: text }));
      setIsOpen(false);
    }
  };
  return (
    <>
      <SearchContainer isOpen={isOpen}>
        <div className="search-inner" rel={modalRef}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={text}
              placeholder="제목, 인물을 검색해주세요"
              className="search-input"
              onChange={onChangInput}
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

          {searchData.length > 0 && (
            <div className="search-results">
              {searchData.map((item) => (
                <div key={item.id} className="search-result-item">
                  {item.media_type === 'movie' && <h3>{item.title}</h3>}
                  {item.media_type === 'tv' && <h3>{item.name}</h3>}
                  {item.media_type === 'person' && (
                    <>
                      <h3>{item.name}</h3>
                      {item.known_for && (
                        <p>Known for: {item.known_for.map((work) => work.title || work.name).join(', ')}</p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </SearchContainer>
    </>
  );
};
export default SearchBar;
