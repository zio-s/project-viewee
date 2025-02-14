import { DeleteButton, HistoryContainer, HistoryTitle, KeywordItem, KeywordsWrapper, KeywordText } from './style';

const SearchHistory = ({ searchHistory, onHistoryClick, onRemoveHistory }) => {
  if (searchHistory.length === 0) return null;

  return (
    <HistoryContainer>
      <HistoryTitle>최근 검색어</HistoryTitle>
      <KeywordsWrapper>
        {searchHistory.map((query, index) => (
          <KeywordItem key={index}>
            <KeywordText onClick={() => onHistoryClick(query)}>{query}</KeywordText>
            <DeleteButton onClick={() => onRemoveHistory(query)}>삭제</DeleteButton>
          </KeywordItem>
        ))}
      </KeywordsWrapper>
    </HistoryContainer>
  );
};

export default SearchHistory;
