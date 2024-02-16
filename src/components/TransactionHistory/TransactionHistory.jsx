import React from 'react';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ manyInfo }) => {
  console.log(manyInfo);
  return (
    <>
      <table className={s.transaction}>
        <thead className={s.item}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.item}>
          {manyInfo.map(elem => {
            return (
              <tr key={elem.id}>
                <td>{elem.type}</td>
                <td>{elem.amount}</td>
                <td>{elem.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
