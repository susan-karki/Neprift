import React, { useState } from 'react';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Settings</h2>

      <div className="profile-section">
        <h3 className="profile-heading">Profile Information</h3>
        <form className="profile-form">
          <label className="profile-label">
            Name
            <input className="profile-input" type="text" placeholder="Susan karki" />
          </label>
          <label className="profile-label">
            Phone
            <input className="profile-input" type="tel" placeholder="9765548204" />
          </label>
          <label className="profile-label">
            Date of Birth
            <input className="profile-input" type="date" />
          </label>
          <label className="profile-label">
            Email
            <input className="profile-input" type="email" placeholder="susankarkee125@gmail.com" />
          </label>
          <button type="submit" className="profile-btn">Update Profile</button>
        </form>
      </div>

      <div className="profile-section">
        <h3 className="profile-heading">Update Password</h3>
        <form className="profile-form">
          <label className="profile-label">
            Current Password
            <div className="profile-password-field">
              <input className="profile-input" type={showCurrent ? 'text' : 'password'} />
              <span className="profile-eye" onClick={() => setShowCurrent(!showCurrent)}>👁️</span>
            </div>
          </label>
          <label className="profile-label">
            New Password
            <div className="profile-password-field">
              <input className="profile-input" type={showNew ? 'text' : 'password'} />
              <span className="profile-eye" onClick={() => setShowNew(!showNew)}>👁️</span>
            </div>
          </label>
          <label className="profile-label">
            Confirm Password
            <div className="profile-password-field">
              <input className="profile-input" type={showConfirm ? 'text' : 'password'} />
              <span className="profile-eye" onClick={() => setShowConfirm(!showConfirm)}>👁️</span>
            </div>
          </label>
          <button type="submit" className="profile-btn">Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
