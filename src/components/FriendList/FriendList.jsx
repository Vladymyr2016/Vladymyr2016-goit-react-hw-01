import React from 'react';
import s from './FrendList.module.css';

const FriendList = ({ Friends }) => {
  console.log(Friends);

  return (
    <>
      <ul className={s.list}>
        {Friends.map(friend => (
          <li className={s.item} key={friend.id}>
            <span
              className={`${s.status} ${friend.isOnline ? s.green : s.red}`}
            >
              {friend.isOnline}
            </span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
