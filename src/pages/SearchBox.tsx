import styled from 'styled-components';
import React from 'react';
import SearchInput from '@/components/SearchInput';
import SuggestionList from '@/components/SuggestionList';
import PreviousQueryList from '@/components/PreviousQueryList';
import useSearch from '@/custom/useSearch';
import usePreviousQueries from '@/custom/usePreviousQueries';

export const SearchBox: React.FC = () => {
  const { previousQueries, addQuery, removeQuery } = usePreviousQueries();
  const { query, suggestions, handleInputChange } = useSearch();

  const handleInputChangeWithPrevious = async (newValue: string) => {
    handleInputChange(newValue);
    if (newValue && !previousQueries.includes(newValue)) {
      addQuery(newValue);
    }
  };

  return (
    <Wrapper>
      <RelativeWrapper>
        <SearchInput value={query} onChange={handleInputChange} onAddQuery={addQuery} />
        {query &&
          (suggestions.length ? (
            <SuggestionList suggestions={suggestions} />
          ) : (
            <PreviousQueryList queries={previousQueries} onRemove={removeQuery} />
          ))}
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
