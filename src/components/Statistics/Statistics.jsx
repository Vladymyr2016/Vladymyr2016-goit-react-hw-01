import React from 'react';
import s from '../Statistics/Statistic.module.css';

const Statistics = ({ data }) => {
  return (
    <>
      <ul className={s.statlist}>
        {data.map(elem => {
          return (
            <li className={s.item} key={elem.id}>
              <span className={s.label}>{elem.label}</span>
              <span className={s.percentage}>{elem.percentage}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
