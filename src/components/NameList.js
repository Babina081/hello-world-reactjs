import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  // const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: 'Babina',
      age: 24,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 30,
      skill: 'Veu',
    },
  ];

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return (
    <div>
      {nameList}

      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
    </div>
  );
}

export default NameList;
