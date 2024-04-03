import React from 'react';
import Person from 'components/Person/Person';
import persons from 'Data/persons';
import s from './Persons.module.css';

const Persons = () => {
  return (
    <div className={s.cards}>
      {persons.map(person => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default Persons;
