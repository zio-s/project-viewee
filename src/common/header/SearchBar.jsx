import { useEffect, useRef, useState } from 'react';
import { ClearButton, ErrorText, LoadingText, SearchContainer, SearchForm, SearchInner, SearchInput } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent } from '../../store/modules/getThunk';
import { searchActions } from '../../store/modules/searchSlice';
import { useNavigate } from 'react-router';
import SearchHistory from './SearchHistory';

const SEARCH_HISTORY_KEY = 'searchHistory';
const MAX_HISTORY_ITEMS = 10;

const SearchBar = ({ isOpen, setIsOpen, searchIconRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const containerRef = useRef();
  const { searchData, isLoading, error } = useSelector((state) => state.searchR);
  const [text, setText] = useState('');
  const [searchHistory, setSearchHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error('저장된 검색기록이 없습니다.', error);
      return [];
    }
  });

  useEffect(() => {
    const savedHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
  }, [searchHistory]);
  const addToSearchHistory = (query) => {
    setSearchHistory((prev) => {
      const filteredHistory = prev.filter((item) => item !== query);
      return [query, ...filteredHistory].slice(0, MAX_HISTORY_ITEMS);
    });
  };
  const removeFromHistory = (query) => {
    setSearchHistory((prev) => prev.filter((item) => item !== query));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isSearchIconClick = event.target.closest('[data-search-toggle]');
      if (isSearchIconClick) {
        return;
      }
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';

      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

    return () => {
      document.body.style.overflowY = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

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
      addToSearchHistory(text.trim());
      navigate(`/category?search=${encodeURIComponent(text)}`);
      dispatch(searchActions.setSearchQuery(text));
      dispatch(searchContent({ query: text }));
      setIsOpen(false);
      setText('');
    }
  };
  const handleHistoryClick = (query) => {
    setText(query);
    navigate(`/category?search=${encodeURIComponent(query)}`);
    dispatch(searchActions.setSearchQuery(query));
    dispatch(searchContent({ query }));
    setIsOpen(false);
  };
  return (
    <>
      <SearchContainer $isOpen={isOpen}>
        <div className="searchBg">
          <SearchInner ref={containerRef}>
            <SearchForm onSubmit={onSubmit}>
              <SearchInput
                ref={inputRef}
                type="text"
                value={text}
                placeholder="제목, 인물을 검색해주세요"
                onChange={onChangeInput}
              />
              <ClearButton type="button" onClick={() => setText('')}>
                {text ? (
                  'x'
                ) : (
                  <svg width="28" height="28" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_622_4047)">
                      <path
                        d="M40.7966 37.2626C39.8209 36.328 38.8712 35.3665 37.9487 34.3793C37.1737 33.5918 36.707 33.0189 36.707 33.0189L30.8737 30.2335C33.2091 27.5848 34.498 24.1751 34.4987 20.6439C34.4987 12.6043 27.957 6.06055 19.9154 6.06055C11.8737 6.06055 5.33203 12.6043 5.33203 20.6439C5.33203 28.6835 11.8737 35.2272 19.9154 35.2272C23.5883 35.2272 26.9362 33.8522 29.5049 31.6043L32.2904 37.4376C32.2904 37.4376 32.8633 37.9043 33.6508 38.6793C34.457 39.4355 35.5174 40.4585 36.5341 41.5272L39.3633 44.4272L40.6216 45.7731L45.0404 41.3543L43.6945 40.096C42.9049 39.321 41.8508 38.2918 40.7966 37.2626ZM19.9154 31.0605C14.1716 31.0605 9.4987 26.3876 9.4987 20.6439C9.4987 14.9001 14.1716 10.2272 19.9154 10.2272C25.6591 10.2272 30.332 14.9001 30.332 20.6439C30.332 26.3876 25.6591 31.0605 19.9154 31.0605Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_622_4047">
                        <rect width="50" height="50" fill="white" transform="translate(0.332031 0.939453)" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </ClearButton>
            </SearchForm>

            <SearchHistory
              searchHistory={searchHistory}
              onHistoryClick={handleHistoryClick}
              onRemoveHistory={removeFromHistory}
            />

            {isLoading && <LoadingText>검색 중...</LoadingText>}
            {error && <ErrorText>검색 중 오류가 발생했습니다</ErrorText>}
          </SearchInner>
        </div>
      </SearchContainer>
    </>
  );
};
export default SearchBar;
