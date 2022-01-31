import './App.css';
import Profile from './components/profile';
import user from './data/user.json';
import Statistics from './components/statistics';
import data from './data/data.json';
import friends from './data/friends.json';
import FriendList from './components/friendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/transactionHistory';
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
