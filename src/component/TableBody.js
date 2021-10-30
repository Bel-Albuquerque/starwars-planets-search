import React from 'react';

function TableBody({ obj }) {
  const array = Object.values(obj);
  array.splice(9, 1);
  return (
    <tr>
      {
        array.map((item, index) => <td key={ index }>{item}</td>)
      }
    </tr>
  );
}

export default TableBody;
