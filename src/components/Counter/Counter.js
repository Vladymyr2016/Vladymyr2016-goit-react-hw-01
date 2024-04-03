import React from 'react';
import s from './Counter.module.css';

const Counter = ({ number }) => {
  console.log(number);
  return (
    <div>
      <h1 className={s.title}>Total count: {number}</h1>
    </div>
  );
};

export default Counter;
