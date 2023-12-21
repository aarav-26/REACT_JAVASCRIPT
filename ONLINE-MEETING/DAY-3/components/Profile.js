import React from 'react';
import './Profile.css';

const Profile = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    return (
      <div className='ppp'>
        <h2>No user logged in.</h2>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); 
    window.location.href = '/login'; 
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-details">
        <p>Email: {loggedInUser.email}</p>
        <p>Phone: {loggedInUser.phone}</p>
        <p>Address: {loggedInUser.address}</p>
      </div>
      <div className="profile-logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
