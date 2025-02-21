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
            <DeleteButton onClick={() => onRemoveHistory(query)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 0C3.576 0 0 3.576 0 8C0 12.424 3.576 16 8 16C12.424 16 16 12.424 16 8C16 3.576 12.424 0 8 0ZM10.072 4.8L8 6.872L5.928 4.8L4.8 5.928L6.872 8L4.8 10.072L5.928 11.2L8 9.128L10.072 11.2L11.2 10.072L9.128 8L11.2 5.928L10.072 4.8Z"
                  fill="#C9C9C9"
                />
              </svg>
            </DeleteButton>
          </KeywordItem>
        ))}
      </KeywordsWrapper>
    </HistoryContainer>
  );
};

export default SearchHistory;
