import styled from 'styled-components';
import React from 'react';
import SearchInput from '@/components/SearchInput';
import SuggestionList from '@/components/SuggestionList';
import PreviousQueryList from '@/components/PreviousQueryList';
import { useSearchContext } from '@/custom/useSearchContext';

export const SearchBox: React.FC = () => {
  const {
    previousQueries,
    addQuery,
    removeQuery,
    query,
    setQuery,
    suggestions,
    handleInputChange,
  } = useSearchContext();

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  return (
    <Wrapper>
      <RelativeWrapper>
        <SearchInput value={query} onChange={handleInputChange} onAddQuery={addQuery} />
        {suggestions.length && query ? (
          <SuggestionList
            suggestions={suggestions}
            previousQueries={previousQueries}
            onRemoveQuery={removeQuery}
            onSuggestionClick={handleSuggestionClick}
          />
        ) : (
          previousQueries.length > 0 &&
          query.trim() !== '' && (
            <PreviousQueryList queries={previousQueries} onRemove={removeQuery} />
          )
        )}
      </RelativeWrapper>
    </Wrapper>
  );
};

const RelativeWrapper = styled.div`
  position: relative;
  width: 490px;
  overflow: visible;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: skyblue;
`;
