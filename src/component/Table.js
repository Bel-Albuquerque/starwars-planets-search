import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import TableBody from './TableBody';
import TableHeader from './TabeHeader';

function Table() {
  const {
    data,
    name,
    showFilter,
    copyData,
    setCopyData,
    filters,
  } = useContext(MyContext);

  const [fetchTrue, setFetchTrue] = useState(false);
  const [dataInOrder, setDataInOrder] = useState([]);

  const orderData = () => {
    const MENOS_UM = -1;
    const order = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return MENOS_UM;
      }
      return 0;
    });
    setDataInOrder(order);
  };

  useEffect(() => {
    if (data.length > 0) {
      setFetchTrue(true);
      setCopyData([...data]);
      orderData();
    }
  }, [data]);

  function filterDataSearch(comparison, column, value) {
    if (comparison === 'maior que') {
      const newArray = copyData.filter((obj) => Number(obj[column]) > Number(value));
      setCopyData(newArray);
    }
    if (comparison === 'menor que') {
      const newArray = copyData.filter((obj) => Number(obj[column]) < Number(value));
      setCopyData(newArray);
    }
    if (comparison === 'igual a') {
      const newArray = copyData.filter((obj) => Number(obj[column]) === Number(value));
      setCopyData(newArray);
    }
  }

  useEffect(() => {
    const { filters: { filterByNumericValues } } = filters;
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      filterDataSearch(comparison, column, value);
    });
  }, [filters]);

  return (
    <main>
      <table border="1">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { !name && !showFilter && fetchTrue && dataInOrder.map((obj, index) => (
            <TableBody key={ index } obj={ obj } />)) }
          { name && !showFilter
            && data.filter((obj) => obj.name.includes(name)).map((obj, index) => (
              <TableBody key={ index } obj={ obj } />)) }
          { showFilter && copyData.map((obj, index) => (
            <TableBody key={ index } obj={ obj } />)) }
        </tbody>
      </table>
    </main>
  );
}

export default Table;
