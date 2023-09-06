import React from 'react';
import styled from 'styled-components';
import { ApiResponseType } from '@/utils/api';

const SuggestionList: React.FC<{ suggestions: ApiResponseType[] }> = ({ suggestions }) => {
  return (
    <SuggestionsContainer>
      <SuggestionsHeader>추천검색어</SuggestionsHeader>
      {suggestions.length > 0 ? (
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem key={index}>{suggestion.sickNm}</SuggestionItem>
          ))}
        </SuggestionsList>
      ) : (
        <NoSuggestions>검색어 없음</NoSuggestions>
      )}
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

const NoSuggestions = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  color: grey;
`;
