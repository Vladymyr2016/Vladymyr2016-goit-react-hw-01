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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList Friends={friendInfo} />

      <TransactionHistory manyInfo={payments} />
    </div>
  );
};
