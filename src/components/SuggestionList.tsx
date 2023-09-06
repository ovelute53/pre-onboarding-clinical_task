import React from 'react';
import styled from 'styled-components';
import { ApiResponseType } from '@/utils/api';

interface SuggestionListProps {
  suggestions: ApiResponseType[];
  previousQueries: string[];
  onRemoveQuery: (query: string) => void;
  onSuggestionClick: (query: string) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  suggestions,
  previousQueries,
  onRemoveQuery,
  onSuggestionClick,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent, suggestion: ApiResponseType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSuggestionClick(suggestion.sickNm);
      event.preventDefault();
    }
  };

  return (
    <SuggestionsContainer>
      <SuggestionsHeader>추천검색어</SuggestionsHeader>
      <SuggestionsList>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem
            key={index}
            tabIndex={0}
            role="button"
            aria-label={suggestion.sickNm}
            onClick={() => onSuggestionClick(suggestion.sickNm)}
            onKeyDown={event => handleKeyDown(event, suggestion)}
          >
            {suggestion.sickNm}
          </SuggestionItem>
        ))}

        {previousQueries.length > 0 && <Separator />}

        {previousQueries.map((query, index) => (
          <PreviousQueryItem key={index}>
            {query}
            <span onClick={() => onRemoveQuery(query)}>x</span>
          </PreviousQueryItem>
        ))}
      </SuggestionsList>
    </SuggestionsContainer>
  );
};

export default SuggestionList;

const SuggestionsContainer = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  border: 1px solid #007be9;
  border-radius: 15px;
  background-color: white;
  max-height: 200px;
  overflow: hidden;
  z-index: 9999;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`;

const SuggestionsHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 16px 16px;
  color: grey;
  color: #007be9;
`;

const SuggestionsList = styled.ul`
  list-style-type: none;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  width: 490px;
  max-height: 200px;
  overflow: auto;
`;

const SuggestionItem = styled.li`
  padding: 8px 20px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #eaeaea;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

const PreviousQueryItem = styled.div`
  padding: 8px 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }

  span {
    color: red;
    margin-left: 10px;
  }
`;
