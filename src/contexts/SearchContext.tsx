import { ApiResponseType } from '@/utils/api';
import { createContext } from 'react';

export interface SearchContextProps {
  previousQueries: string[];
  addQuery: (query: string) => void;
  removeQuery: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  suggestions: ApiResponseType[];
  handleInputChange: (newValue: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);
