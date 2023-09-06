import React from 'react';
import styled from 'styled-components';
import Search from '@/assets/search.svg';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, value, onFocus, onBlur }) => {
  return (
    <SearchWrapper>
      <InputSearch
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="질환명을 입력해 주세요."
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <SearchIconWrapper>
        <SearchIcon src={Search} />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default SearchInput;

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

const SearchIcon = styled.img`
  width: 21px;
  height: auto;
`;
