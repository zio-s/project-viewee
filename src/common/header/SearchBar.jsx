import { SearchContainer } from './style';

const SearchBar = ({ isOpen }) => {
  return (
    <>
      <SearchContainer isOpen={isOpen}>
        <div className="search-inner">
          <input type="text" placeholder="제목, 인물을 검색해주세요" className="search-input" />
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
        </div>
      </SearchContainer>
    </>
  );
};
export default SearchBar;
