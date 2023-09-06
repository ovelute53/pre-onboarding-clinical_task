import styled from 'styled-components';
import React, { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import SuggestionList from '@/components/SuggestionList';
import PreviousQueryList from '@/components/PreviousQueryList';
import useSearch from '@/custom/useSearch';

export const SearchBox: React.FC = () => {
  const [previousQueries, setPreviousQueries] = useState<string[]>([]);
  const { query, suggestions, handleInputChange } = useSearch();

  return (
    <Wrapper>
      <RelativeWrapper>
        <SearchInput value={query} onChange={handleInputChange} />
        {query &&
          (suggestions.length ? (
            <SuggestionList suggestions={suggestions} />
          ) : (
            <PreviousQueryList queries={previousQueries} />
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
