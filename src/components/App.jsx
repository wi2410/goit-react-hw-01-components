import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendLIst";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
      
      <Statistics stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions}/> */}
    </div>
  );
};
