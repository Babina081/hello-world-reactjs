import React from 'react';
import './myStyles.css';

function StyledSheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>style sheets</h1>
    </div>
  );
}

export default StyledSheet;
