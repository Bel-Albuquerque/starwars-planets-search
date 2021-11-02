import React from 'react';
import MyProvider from '../context/MyProvider';
import Table from '../component/Table';
import Inputs from '../component/Inputs';

function Home() {
  return (
    <div>
      <MyProvider>
        <Inputs />
        <Table />
      </MyProvider>

    </div>
  );
}

export default Home;
