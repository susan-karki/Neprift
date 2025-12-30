import React, { useState } from 'react';
import './customerProfile.css';

const CustomerProfile = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Settings</h2>

      {/* Profile Information */}
      <div className="profile-section">
        <h3 className="profile-heading">Profile Information</h3>
        <form className="profile-form">
          <label className="profile-label">
            Name
            <input className="profile-input" type="text" placeholder="Susan Karki" />
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
            Address
            <input className="profile-input" type="text" placeholder="Naya Thimi" />
          </label>
          <button type="submit" className="profile-btn">Update Profile</button>
        </form>
      </div>

      {/* Update Password */}
      <div className="profile-section">
        <h3 className="profile-heading">Update Password</h3>
        <form className="profile-form">
          <label className="profile-label">
            Current Password
            <input
              className="profile-input"
              type={showCurrent ? 'text' : 'password'}
            />
          </label>
          <label className="profile-label">
            New Password
            <input
              className="profile-input"
              type={showNew ? 'text' : 'password'}
            />
          </label>
          <label className="profile-label">
            Confirm Password
            <input
              className="profile-input"
              type={showConfirm ? 'text' : 'password'}
            />
          </label>
          <button type="submit" className="profile-btn">Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerProfile;
