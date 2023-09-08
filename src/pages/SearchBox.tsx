import styled from 'styled-components';
import React from 'react';
import SearchInput from '@/components/SearchInput';
import SuggestionList from '@/components/SuggestionList';
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
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  return (
    <Wrapper>
      <RelativeWrapper>
        <SearchInput
          value={query}
          onChange={handleInputChange}
          onAddQuery={addQuery}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused &&
          (query.trim() === '' || suggestions.length > 0 || previousQueries.length > 0) && (
            <SuggestionList
              query={query}
              suggestions={suggestions}
              previousQueries={previousQueries}
              onRemoveQuery={removeQuery}
              onSuggestionClick={handleSuggestionClick}
            />
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
