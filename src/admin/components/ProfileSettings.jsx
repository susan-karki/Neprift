// import React, { useState } from 'react';
// import './ProfileSettings.css';

// const ProfileSettings = () => {
//   const [showCurrent, setShowCurrent] = useState(false);
//   const [showNew, setShowNew] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   return (
//     <div className="profile-container">
//       <h2 className="profile-title">Profile Settings</h2>

//       {/* Profile Information */}
//       <div className="profile-section">
//         <h3 className="profile-heading">Profile Information</h3>
//         <form className="profile-form">
//           <label className="profile-label">
//             Name
//             <input className="profile-input" type="text" placeholder="Susan Karki" />
//           </label>
//           <label className="profile-label">
//             Phone
//             <input className="profile-input" type="tel" placeholder="9765548204" />
//           </label>
//           <label className="profile-label">
//             Date of Birth
//             <input className="profile-input" type="date" />
//           </label>
//           <label className="profile-label">
//             Address
//             <input className="profile-input" type="text" placeholder="Naya Thimi" />
//           </label>
//           <button type="submit" className="profile-btn">Update Profile</button>
//         </form>
//       </div>

//       {/* Update Password */}
//       <div className="profile-section">
//         <h3 className="profile-heading">Update Password</h3>
//         <form className="profile-form">
//           <label className="profile-label">
//             Current Password
//             <input
//               className="profile-input"
//               type={showCurrent ? 'text' : 'password'}
//             />
//           </label>
//           <label className="profile-label">
//             New Password
//             <input
//               className="profile-input"
//               type={showNew ? 'text' : 'password'}
//             />
//           </label>
//           <label className="profile-label">
//             Confirm Password
//             <input
//               className="profile-input"
//               type={showConfirm ? 'text' : 'password'}
//             />
//           </label>
//           <button type="submit" className="profile-btn">Update Password</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;





import React, { useState, useEffect } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  // Dynamic profile data
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    dob: "",
    address: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // Load user info from localStorage (or fetch from backend)
  useEffect(() => {
    const email = localStorage.getItem("userEmail") || "";
    setProfile((prev) => ({
      ...prev,
      name: email.split("@")[0], // default name from email
    }));
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // TODO: call backend API
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New password and confirm password do not match");
      return;
    }
    alert("Password updated successfully!");
    // TODO: call backend API
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Settings</h2>

      {/* Profile Information */}
      <div className="profile-section">
        <h3 className="profile-heading">Profile Information</h3>
        <form className="profile-form" onSubmit={handleProfileSubmit}>
          <label className="profile-label">
            Name
            <input
              className="profile-input"
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </label>
          <label className="profile-label">
            Phone
            <input
              className="profile-input"
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
            />
          </label>
          <label className="profile-label">
            Date of Birth
            <input
              className="profile-input"
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleProfileChange}
            />
          </label>
          <label className="profile-label">
            Address
            <input
              className="profile-input"
              type="text"
              name="address"
              value={profile.address}
              onChange={handleProfileChange}
            />
          </label>
          <button type="submit" className="profile-btn">
            Update Profile
          </button>
        </form>
      </div>

      {/* Update Password */}
      <div className="profile-section">
        <h3 className="profile-heading">Update Password</h3>
        <form className="profile-form" onSubmit={handlePasswordSubmit}>
          <label className="profile-label">
            Current Password
            <input
              className="profile-input"
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
            />
          </label>
          <label className="profile-label">
            New Password
            <input
              className="profile-input"
              type="password"
              name="new"
              value={passwords.new}
              onChange={handlePasswordChange}
            />
          </label>
          <label className="profile-label">
            Confirm Password
            <input
              className="profile-input"
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit" className="profile-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;

