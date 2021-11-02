import React from 'react';
import InputNumericValues from './InputNumericValues';
import InputName from './InputName';
import InputByOrder from './InputByOrder';

function Inputs() {
  return (
    <div>
      <InputName />
      <InputByOrder />
      <InputNumericValues />
    </div>
  );
}

export default Inputs;
