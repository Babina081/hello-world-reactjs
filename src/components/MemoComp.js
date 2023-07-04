import React from 'react';

function MemoComp({ name }) {
  console.log('rendering memo comp');
  return <div>{name}</div>;
}

//to stop re-rendering
export default React.memo(MemoComp);
