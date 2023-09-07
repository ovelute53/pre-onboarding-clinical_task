import { SearchContext, SearchContextProps } from '@/contexts/SearchContext';
import { useContext } from 'react';

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
