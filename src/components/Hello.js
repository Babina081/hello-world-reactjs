import React from 'react';

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello Babina</h1>
  //   </div>
  // );

  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'hello babina')
  );
};

export default Hello;
