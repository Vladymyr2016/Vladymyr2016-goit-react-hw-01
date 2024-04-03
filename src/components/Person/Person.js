import React from 'react';
import s from './Person.module.css';

const Person = ({ img, email, firstName, lastName }) => {
  return (
    <div className={s.card}>
      <img src={img} />
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Person;
