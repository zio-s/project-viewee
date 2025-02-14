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
              {text && (
                <ClearButton type="button" onClick={() => setText('')}>
                  ✕
                </ClearButton>
              )}
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
