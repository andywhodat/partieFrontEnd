import React, { useEffect, useState } from 'react';
import { utilisateurApi } from './api';

function MyComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch all users
    utilisateurApi.getAllUtilisateurs()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
