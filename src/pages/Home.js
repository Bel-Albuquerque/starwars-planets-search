import React from 'react';
import FetchProvider from '../context/FetchProvider';
import Table from '../component/Table';
import Inputs from '../component/Inputs';

function Home() {
  return (
    <div>
      <FetchProvider>
        <Inputs />
        <Table />
      </FetchProvider>
    </div>
  );
}

export default Home;
