import Profile from './Profile';
import user from '../data/user.json';

import Statistics from './Statistics';
import statsData from '../data/statsData.json';

import FriendList from './FriendList';
import friendsData from '../data/friendsData.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  )
}