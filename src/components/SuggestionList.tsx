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
  const handleKeyDown = (event: React.KeyboardEvent, query: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSuggestionClick(query);
      event.preventDefault();
    }
  };

  return (
    <SuggestionsContainer>
      <SuggestionsHeader>추천검색어</SuggestionsHeader>
      <SuggestionsList>
        {previousQueries.length > 0 && (
          <PreviousQueriesContainer>
            {previousQueries.map((query, index) => (
              <React.Fragment key={index}>
                <PreviousQuerySpan
                  onClick={() => onSuggestionClick(query)}
                  tabIndex={0}
                  role="button"
                  aria-label={query}
                  onKeyDown={event => handleKeyDown(event, query)}
                >
                  {query}
                </PreviousQuerySpan>
                <DeleteIcon
                  onClick={e => {
                    e.stopPropagation();
                    onRemoveQuery(query);
                  }}
                >
                  ✖
                </DeleteIcon>
                {index !== previousQueries.length - 1 && ', '}
              </React.Fragment>
            ))}
          </PreviousQueriesContainer>
        )}

        {previousQueries.length > 0 && suggestions.length > 0 && <Separator />}

        {suggestions.map((suggestion, index) => (
          <SuggestionItem
            key={index}
            tabIndex={0}
            role="button"
            aria-label={suggestion.sickNm}
            onClick={() => onSuggestionClick(suggestion.sickNm)}
            onKeyDown={event => handleKeyDown(event, suggestion.sickNm)}
          >
            {suggestion.sickNm}
          </SuggestionItem>
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

const PreviousQueriesContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const PreviousQuerySpan = styled.span`
  font-size: 20px;
  cursor: pointer;
  margin-right: 5px;
  transition: opacity 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

const DeleteIcon = styled.span`
  cursor: pointer;
  color: red;
  transition: opacity 0.3s;
  margin-right: 5px;
  &:hover {
    opacity: 0.7;
  }
`;
