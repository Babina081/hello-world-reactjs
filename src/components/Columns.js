import React from 'react';

function Columns() {
  const items = [];
  return (
    //React.Fragment helps to remove extra div tag
    //there is privellege of adding key value in it
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Babina</td>
    </React.Fragment>
  );
}

export default Columns;
