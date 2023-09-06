import { useState } from 'react';

const usePreviousQueries = () => {
  const [previousQueries, setPreviousQueries] = useState<string[]>([]);

  const addQuery = (query: string) => {
    if (!previousQueries.includes(query)) {
      setPreviousQueries(prev => [query, ...prev]);
    }
  };

  const removeQuery = (query: string) => {
    setPreviousQueries(prev => prev.filter(q => q !== query));
  };

  return { previousQueries, addQuery, removeQuery };
};

export default usePreviousQueries;
