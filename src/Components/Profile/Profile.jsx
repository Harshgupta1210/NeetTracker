// Components/Profile/Profile.jsx
import React from 'react';
import Scorecard from '../Scorecard/Scorecard';
import './Profile.css';

const ProfilePage = () => (
  <div className="profile-page-container">
    <h1>User Profile</h1>
    <Scorecard />
  </div>
);

export default ProfilePage;
