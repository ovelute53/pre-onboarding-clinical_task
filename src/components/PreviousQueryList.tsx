import React from 'react';

const PreviousQueryList: React.FC<{ queries: string[] }> = ({ queries }) => {
  return (
    <div>
      {queries.slice(0, 5).map((query, index) => (
        <div key={index} style={{ padding: '5px' }}>
          {query}
        </div>
      ))}
    </div>
  );
};

export default PreviousQueryList;
