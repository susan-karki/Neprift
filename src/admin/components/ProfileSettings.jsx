import React, { useState, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import "./ProfileSettings.css";
import API from "../../http/API";

const ProfileSettings = () => {
  const userId = localStorage.getItem("userId");
  const location = useLocation();
  const { activeSection } = useOutletContext(); 
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
      await API.put(`/user/update-password/${userId}`, {
        // userId,
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
      {activeSection === "userinfo" && (
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
      )}
      {activeSection === "updatepassword" && !isViewOnly && (
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
