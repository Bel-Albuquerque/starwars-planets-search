import React from 'react';
import FetchProvider from '../context/fetchProvider';
import Table from '../component/Table';

function Home() {
  return (
    <div>

      <h1>teste</h1>
      <FetchProvider>
        <Table />
      </FetchProvider>
    </div>
  );
}

export default Home;
