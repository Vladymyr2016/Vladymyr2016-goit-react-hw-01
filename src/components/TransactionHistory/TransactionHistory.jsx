import React from 'react';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ manyInfo }) => {
  console.log(manyInfo);
  return (
    <>
      <table className={s.transaction}>
        <thead className={s.item}>
          <tr className={s.itemHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.item}>
          {manyInfo.map(elem => {
            return (
              <tr className={s.itemTr} key={elem.id}>
                <td className={s.td}>{elem.type}</td>
                <td className={s.td}>{elem.amount}</td>
                <td className={s.td}>{elem.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
