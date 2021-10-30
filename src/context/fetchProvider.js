import React, { useState, useEffect } from 'react';
import fetchApiPlanets from '../services/servicesAPI';
import MyContext from './MyContext';

function FetchProvider({ children }) {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    const result = await fetchApiPlanets();
    setData(result);
  }, []);

  return (
    <MyContext.Provider value={ { data } }>
      { children }
    </MyContext.Provider>
  );
}

export default FetchProvider;
