import styled from 'styled-components';
import Search from '@/assets/search.svg';

export const SearchBox: React.FC = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <InputSearch type="search" placeholder="질환명을 입력해 주세요." />
        <SearchIconWrapper>
          <SearchIcon src={Search} />
        </SearchIconWrapper>
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SearchWrapper = styled.div`
  background-color: #fff;
  width: 490px;
  height: 74px;
  border: 1px solid #000;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const InputSearch = styled.input`
  font-size: 25px;
  line-height: 18.4px;
  border: none;
  outline: none;
  flex: 1;
  padding-left: 40px;
  background-size: 21px;

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
`;

const SearchIcon = styled.img`
  width: 21px;
  height: auto;
`;
