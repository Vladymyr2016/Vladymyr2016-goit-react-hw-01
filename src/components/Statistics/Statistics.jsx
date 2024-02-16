import React from 'react';
import s from '../Statistics/Statistic.module.css';

const Statistics = ({ stats, title }) => {
  console.log(stats);
  return (
    <>
      {title ? <h2>{title}</h2> : ''}
      <ul className={s.statlist}>
        {stats.map(elem => {
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
