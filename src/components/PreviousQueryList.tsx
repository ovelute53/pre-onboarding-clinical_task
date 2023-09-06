import React from 'react';

type Props = {
  queries: string[];
  onRemove: (query: string) => void;
};

const PreviousQueryList: React.FC<Props> = ({ queries, onRemove }) => {
  return (
    <div>
      {queries.map((query, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
          {query}
          <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={() => onRemove(query)}>
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export default PreviousQueryList;
