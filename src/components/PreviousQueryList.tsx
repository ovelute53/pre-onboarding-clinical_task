import React from 'react';
import { styled } from 'styled-components';

type Props = {
  queries: string[];
  onRemove: (query: string) => void;
};

const PreviousQueryList: React.FC<Props> = ({ queries, onRemove }) => {
  return (
    <QueryListContainer>
      {queries.map((query, index) => (
        <React.Fragment key={index}>
          <QueryItem>
            {query}
            <span onClick={() => onRemove(query)}>x</span>
          </QueryItem>
          {index !== queries.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
    </QueryListContainer>
  );
};

export default PreviousQueryList;

const QueryListContainer = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  border: 1px solid #007be9;
  border-radius: 15px;
  background-color: white;
  padding: 8px 20px;
  z-index: 9999;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const QueryItem = styled.span`
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }

  & > span {
    color: red;
    margin-left: 5px;
    cursor: pointer;
  }
`;
