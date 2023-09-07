import usePreviousQueries from '@/custom/usePreviousQueries';
import useSearch from '@/custom/useSearch';
import { SearchContext } from './SearchContext';
import React, { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<ProviderProps> = ({ children }) => {
  const { previousQueries, addQuery, removeQuery } = usePreviousQueries();

  const { query, setQuery, suggestions, handleInputChange } = useSearch();

  return (
    <SearchContext.Provider
      value={{
        previousQueries,
        addQuery,
        removeQuery,
        query,
        setQuery,
        suggestions,
        handleInputChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
