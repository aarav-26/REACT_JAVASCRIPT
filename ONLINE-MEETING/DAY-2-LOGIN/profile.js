// ProfilePage.js
import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <header>
        <h2>PROFILE</h2>
      </header>
      <section className="profile-section">
        <div className="profile-picture">
          <img
            src="https://placekitten.com/200/200" // Replace with the actual profile picture URL
            alt="Profile"
          />
        </div>
        <div className="profile-details">
          <h3>AARAV</h3>
          <p>Email: aarav2610@gmail.com</p>
          {/* Add more profile information as needed */}
        </div>
      </section>
      <section className="profile-actions">
        <h3>Actions</h3>
        <button>Edit Profile</button>
        <button>Change Password</button>
        {/* Add more actions as needed */}
      </section>
    </div>
  );
};

export default ProfilePage;
