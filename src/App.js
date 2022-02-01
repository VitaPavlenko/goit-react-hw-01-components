import './App.css';
import Profile from './components/profile/profile';
import user from './data/user.json';
import Statistics from './components/statistics/statistics';
import data from './data/data.json';
import friends from './data/friends.json';
import FriendList from './components/friendList/friendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/transaction/transactionHistory';
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
