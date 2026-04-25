import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// Profile component that consumes UserContext
const Profile = () => {
  const { username, isLoggedIn } = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>User Profile</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Logged In:</strong> {isLoggedIn ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default Profile;
