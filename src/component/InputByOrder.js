import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function InputByOrder() {
  const { objKeys,
    setOrderColumn,
    order,
    setOrderSort,
    dataInOrder,
    setDataInOrder,
    data,
  } = useContext(MyContext);

  const { column, sort } = order;
  // const handleChangeNumericValues = ({ target }, callback) => {
  //   const { value } = target;
  //   callback(value);
  // };
  const [ASC, setASC] = useState(true);
  const [DESC, setDESC] = useState(false);

  const handleRadioInput = ({ target }) => {
    const { value } = target;
    console.log(target);
    setDataInOrder([...dataInOrder.reverse()]);
    if (value === 'DESC') {
      setDESC(true);
      setASC(false);
    } else {
      setDESC(false);
      setASC(true);
    }
    setOrderSort(value);
  };

  const handleSelectColum = ({ target }) => {
    const { value } = target;
    setOrderColumn(value);
  };

  const orderData = (param, array) => {
    const teste = array.slice(0);
    const newOrder = teste.sort((a, b) => a[param] - b[param]);
    if (sort !== 'ASC') {
      setDataInOrder(newOrder.reverse());
    } else {
      setDataInOrder(newOrder);
    }
  };

  const handleButton = () => {
    orderData(column, data);
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          data-testid="column-sort"
          name="column"
          id="column"
          onChange={ handleSelectColum }
        >
          <option name="column" value="name">name</option>
          {
            objKeys.map((optionColumn, index) => (
              <option
                key={ index }
                name="column"
                value={ optionColumn }
              >
                {optionColumn}
              </option>))
          }
        </select>
      </label>
      <label htmlFor="asc">
        <input
          checked={ ASC }
          id="asc"
          name="sort"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ handleRadioInput }
        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          checked={ DESC }
          id="desc"
          name="sort"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleRadioInput }
        />
        DESC
      </label>
      <button
        onClick={ handleButton }
        type="button"
        data-testid="column-sort-button"
      >
        Submeter
      </button>
    </form>
  );
}

export default InputByOrder;
