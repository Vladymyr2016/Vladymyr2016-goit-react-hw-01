import React from 'react';
import Profile from '../components/Profile/Profile.jsx';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import friendInfo from './FriendList/Friends.json';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import payments from './TransactionHistory/Transaction.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />

      <Statistics data={data} />

      <FriendList Friends={friendInfo} />

      <TransactionHistory manyInfo={payments} />
    </div>
  );
};
