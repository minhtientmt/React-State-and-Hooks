import React, { useState } from 'react';

function MyComponent() {
  const [users, setUsers] = useState([
    {
      username: 'Jeff',
      online: true
    },
    {
      username: 'Alan',
      online: false
    },
    {
      username: 'Mary',
      online: true
    },
    {
      username: 'Jim',
      online: false
    },
    {
      username: 'Sara',
      online: true
    },
    {
      username: 'Laura',
      online: true
    }
  ]);

  const usersOnline = users.filter(user => user.online === true);
  const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>);

  return (
    <div>
      <h1>Current Online Users:</h1>
      <ul>
        {renderOnline}
      </ul>
    </div>
  );
}