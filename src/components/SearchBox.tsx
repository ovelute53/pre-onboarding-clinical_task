import styled from 'styled-components';
import Search from '@/assets/search.svg';
import React, { useRef, useState } from 'react';
import { getFromCache, setCache } from '@/utils/cache';
import { api } from '@/utils/api';

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const cachedData = getFromCache(e.target.value);

    if (cachedData) {
      setSuggestions(cachedData);
      return;
    }

    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }

    timerIdRef.current = setTimeout(async () => {
      const data = await api(e.target.value);
      const filteredData = data.filter((item: any) =>
        item.sickNm.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setCache(e.target.value, filteredData);
      setSuggestions(filteredData);
    }, 500);
  };

  return (
    <Wrapper>
      <RelativeWrapper>
        <SearchWrapper>
          <InputSearch
            type="search"
            value={query}
            onChange={handleInputChange}
            placeholder="질환명을 입력해 주세요."
          />
          <SearchIconWrapper>
            <SearchIcon src={Search} />
          </SearchIconWrapper>
          {query && (
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
          )}
        </SearchWrapper>
      </RelativeWrapper>
    </Wrapper>
  );
};

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

const SearchWrapper = styled.div`
  background-color: #fff;
  width: 490px;
  height: 74px;
  border: 2px solid #007be9;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const InputSearch = styled.input`
  font-size: 25px;
  line-height: 18.4px;
  border: none;
  outline: none;
  flex: 1;
  padding-left: 40px;
  background-size: 21px;
  transition: background-color 0.3s;

  &::placeholder {
    color: grey;
  }

  &:focus::placeholder {
    color: transparent;
    background-color: white;
  }
`;

const SearchIconWrapper = styled.button`
  position: relative;
  background-color: #007be9;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SuggestionsHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 16px 16px;
  color: grey;
  color: #007be9;
`;

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

const SearchIcon = styled.img`
  width: 21px;
  height: auto;
`;
