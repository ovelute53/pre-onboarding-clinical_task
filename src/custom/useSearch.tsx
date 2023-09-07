import { useState, useRef } from 'react';
import { getFromCache, setCache } from '@/utils/cache';
import { api, ApiResponseType } from '@/utils/api';

const useSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ApiResponseType[]>([]);
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInputChange = async (newValue: string) => {
    setQuery(newValue);
    const cachedData = await getFromCache(newValue);

    if (cachedData) {
      setSuggestions(cachedData);
      return;
    }

    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }

    timerIdRef.current = setTimeout(async () => {
      const data = await api(newValue);
      const filteredData = data.filter((item: ApiResponseType) =>
        item.sickNm.toLowerCase().includes(newValue.toLowerCase()),
      );
      await setCache(newValue, filteredData);
      setSuggestions(filteredData);
    }, 500);
  };

  return { query, setQuery, suggestions, handleInputChange };
};

export default useSearch;
