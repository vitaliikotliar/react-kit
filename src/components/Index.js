import React from 'react';
import PropTypes from 'prop-types';

export default function Index ({ users, getUsers, loading, error }) {
  return (
    <div>
      <h1>Users page</h1>
      <div className='loading' hidden={!loading}>Loading...</div>
      <div className='error' hidden={!error}>{error}</div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Fetch users</button>
    </div>
  );
}

Index.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string
};
