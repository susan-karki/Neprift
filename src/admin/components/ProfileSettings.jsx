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





// import React, { useState, useEffect } from "react";
// import "./ProfileSettings.css";

// const ProfileSettings = () => {
//   // Dynamic profile data
//   const [profile, setProfile] = useState({
//     name: "",
//     phone: "",
//     dob: "",
//     address: "",
//   });

//   const [passwords, setPasswords] = useState({
//     current: "",
//     new: "",
//     confirm: "",
//   });

//   // Load user info from localStorage (or fetch from backend)
//   useEffect(() => {
//     const email = localStorage.getItem("userEmail") || "";
//     setProfile((prev) => ({
//       ...prev,
//       name: email.split("@")[0], // default name from email
//     }));
//   }, []);

//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswords((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleProfileSubmit = (e) => {
//     e.preventDefault();
//     alert("Profile updated successfully!");
//     // TODO: call backend API
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (passwords.new !== passwords.confirm) {
//       alert("New password and confirm password do not match");
//       return;
//     }
//     alert("Password updated successfully!");
//     // TODO: call backend API
//   };

//   return (
//     <div className="profile-container">
//       <h2 className="profile-title">Profile Settings</h2>

//       {/* Profile Information */}
//       <div className="profile-section">
//         <h3 className="profile-heading">Profile Information</h3>
//         <form className="profile-form" onSubmit={handleProfileSubmit}>
//           <label className="profile-label">
//             Name
//             <input
//               className="profile-input"
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleProfileChange}
//             />
//           </label>
//           <label className="profile-label">
//             Phone
//             <input
//               className="profile-input"
//               type="tel"
//               name="phone"
//               value={profile.phone}
//               onChange={handleProfileChange}
//             />
//           </label>
//           <label className="profile-label">
//             Date of Birth
//             <input
//               className="profile-input"
//               type="date"
//               name="dob"
//               value={profile.dob}
//               onChange={handleProfileChange}
//             />
//           </label>
//           <label className="profile-label">
//             Address
//             <input
//               className="profile-input"
//               type="text"
//               name="address"
//               value={profile.address}
//               onChange={handleProfileChange}
//             />
//           </label>
//           <button type="submit" className="profile-btn">
//             Update Profile
//           </button>
//         </form>
//       </div>

//       {/* Update Password */}
//       <div className="profile-section">
//         <h3 className="profile-heading">Update Password</h3>
//         <form className="profile-form" onSubmit={handlePasswordSubmit}>
//           <label className="profile-label">
//             Current Password
//             <input
//               className="profile-input"
//               type="password"
//               name="current"
//               value={passwords.current}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <label className="profile-label">
//             New Password
//             <input
//               className="profile-input"
//               type="password"
//               name="new"
//               value={passwords.new}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <label className="profile-label">
//             Confirm Password
//             <input
//               className="profile-input"
//               type="password"
//               name="confirm"
//               value={passwords.confirm}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <button type="submit" className="profile-btn">
//             Update Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;





//neew 



// import React, { useState, useEffect } from "react";
// import "./ProfileSettings.css";
// import API from "../../http/API";

// const ProfileSettings = () => {
//   const userId = localStorage.getItem("userId");

//   const [profile, setProfile] = useState({
//     name: "",
//     phone: "",
//     dob: "",
//     address: "",
//   });

//   const [passwords, setPasswords] = useState({
//     current: "",
//     new: "",
//     confirm: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Load user data
//   useEffect(() => {
//     if (!userId) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await API.get(`/user/${userId}`);
//         const data = res.data.responseBody;

//         setProfile({
//           name: data.name || "",
//           phone: data.phone || "",
//           dob: data.dob || "",
//           address: data.address || "",
//         });
//       } catch (error) {
//         console.error("Failed to load profile", error);
//       }
//     };

//     fetchProfile();
//   }, [userId]);

//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswords((prev) => ({ ...prev, [name]: value }));
//   };

//   // UPDATE PROFILE
//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     if (!userId) return;

//     setLoading(true);
//     try {
//       await API.put(`/user/${userId}`, profile);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Profile update failed", error);
//       alert("Failed to update profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // UPDATE PASSWORD
//   const handlePasswordSubmit = async (e) => {
//     e.preventDefault();

//     if (passwords.new !== passwords.confirm) {
//       alert("New password and confirm password do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       await API.put("/user/update-password", {
//         userId: userId,
//         currentPassword: passwords.current,
//         newPassword: passwords.new,
//       });

//       alert("Password updated successfully!");
//       setPasswords({ current: "", new: "", confirm: "" });
//     } catch (error) {
//       console.error("Password update failed", error);
//       alert("Failed to update password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2 className="profile-title">Profile Settings</h2>

//       {/* Profile Information */}
//       <div className="profile-section">
//         <h3 className="profile-heading">Profile Information</h3>
//         <form className="profile-form" onSubmit={handleProfileSubmit}>
//           <label className="profile-label">
//             Name
//             <input
//               className="profile-input"
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleProfileChange}
//             />
//           </label>

//           <label className="profile-label">
//             Phone
//             <input
//               className="profile-input"
//               type="tel"
//               name="phone"
//               value={profile.phone}
//               onChange={handleProfileChange}
//             />
//           </label>

//           <label className="profile-label">
//             Date of Birth
//             <input
//               className="profile-input"
//               type="date"
//               name="dob"
//               value={profile.dob}
//               onChange={handleProfileChange}
//             />
//           </label>

//           <label className="profile-label">
//             Address
//             <input
//               className="profile-input"
//               type="text"
//               name="address"
//               value={profile.address}
//               onChange={handleProfileChange}
//             />
//           </label>

//           <button type="submit" className="profile-btn" disabled={loading}>
//             {loading ? "Updating..." : "Update Profile"}
//           </button>
//         </form>
//       </div>

//       {/* Update Password */}
//       <div className="profile-section">
//         <h3 className="profile-heading">Update Password</h3>
//         <form className="profile-form" onSubmit={handlePasswordSubmit}>
//           <label className="profile-label">
//             Current Password
//             <input
//               className="profile-input"
//               type="password"
//               name="current"
//               value={passwords.current}
//               onChange={handlePasswordChange}
//             />
//           </label>

//           <label className="profile-label">
//             New Password
//             <input
//               className="profile-input"
//               type="password"
//               name="new"
//               value={passwords.new}
//               onChange={handlePasswordChange}
//             />
//           </label>

//           <label className="profile-label">
//             Confirm Password
//             <input
//               className="profile-input"
//               type="password"
//               name="confirm"
//               value={passwords.confirm}
//               onChange={handlePasswordChange}
//             />
//           </label>

//           <button type="submit" className="profile-btn" disabled={loading}>
//             {loading ? "Updating..." : "Update Password"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;




//latest 



import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProfileSettings.css";
import API from "../../http/API";

const ProfileSettings = () => {
  const userId = localStorage.getItem("userId");
  const location = useLocation();

  // 🔹 Detect view-only mode
  const isViewOnly =
    new URLSearchParams(location.search).get("view") === "only";

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

  const [loading, setLoading] = useState(false);

  // 🔹 Fetch user profile
  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const res = await API.get(`/user/${userId}`);
        const data = res.data.responseBody;

        setProfile({
          name: data.name || "",
          phone: data.phone || "",
          dob: data.dob || "",
          address: data.address || "",
        });
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.put(`/user/${userId}`, profile);
      alert("Profile updated successfully!");
    } catch {
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwords.new !== passwords.confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await API.put("/user/update-password", {
        userId,
        currentPassword: passwords.current,
        newPassword: passwords.new,
      });

      alert("Password updated!");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch {
      alert("Password update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">
        {isViewOnly ? "My Profile" : "Profile Settings"}
      </h2>

      {/* PROFILE INFO */}
      <div className="profile-section">
        <h3 className="profile-heading">User Information</h3>

        <form className="profile-form" onSubmit={handleProfileSubmit}>
          {["name", "phone", "dob", "address"].map((field) => (
            <label key={field} className="profile-label">
              {field.toUpperCase()}
              <input
                className="profile-input"
                type={field === "dob" ? "date" : "text"}
                name={field}
                value={profile[field]}
                onChange={handleProfileChange}
                disabled={isViewOnly}
              />
            </label>
          ))}

          {!isViewOnly && (
            <button className="profile-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Profile"}
            </button>
          )}
        </form>
      </div>

      {/* PASSWORD SECTION (ONLY FOR SETTINGS PAGE) */}
      {!isViewOnly && (
        <div className="profile-section">
          <h3 className="profile-heading">Update Password</h3>

          <form className="profile-form" onSubmit={handlePasswordSubmit}>
            {["current", "new", "confirm"].map((field) => (
              <label key={field} className="profile-label">
                {field.toUpperCase()}
                <input
                  className="profile-input"
                  type="password"
                  name={field}
                  value={passwords[field]}
                  onChange={handlePasswordChange}
                />
              </label>
            ))}

            <button className="profile-btn" disabled={loading}>
              Update Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
