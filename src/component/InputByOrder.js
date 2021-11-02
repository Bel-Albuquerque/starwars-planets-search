import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputByOrder() {
  const { objKeys } = useContext(MyContext);

  // const handleChangeNumericValues = ({ target }, callback) => {
  //   const { value } = target;
  //   callback(value);
  // };

  return (
    <form>
      <label htmlFor="column">
        <select
          data-testid="column-sort"
          name="column"
          id="column"
          // onChange={ (e) => handleChangeNumericValues(e, callback) }
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
      <input
        type="radio"
        data-testid="column-sort-input-asc"
        value="ASC"
      />
      <input
        type="radio"
        data-testid="column-sort-input-desc"
        value="DESC"
      />
      <button type="button" data-testid="column-sort-button">Submeter</button>
    </form>
  );
}

export default InputByOrder;
