import React from 'react';
import styled from 'styled-components';

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
            <DeleteButton onClick={() => onRemove(query)}>X</DeleteButton>
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
  top: 100%;
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

const QueryItem = styled.li`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const DeleteButton = styled.span`
  color: red;
  padding: 4px 8px;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #f5f5f5;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eaeaea;
  }
`;
