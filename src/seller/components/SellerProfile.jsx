import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./sellerProfile.css";
import API from "../../http/API";

const SellerProfile = () => {
  const { state } = useLocation();

  const showPassword = state?.showPassword ?? false;
  const onlyPassword = state?.onlyPassword ?? false;

  const userId = localStorage.getItem("userId");

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    dateOfBirth: "",
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
          name: data?.name || "",
          phone: data?.phone || "",
          dateOfBirth: data?.dateOfBirth || "",
          address: data?.address || "",
        });
      } catch (error) {
        console.error("Failed to load profile", error);
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
      alert("Profile update failed");
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
        userId,
        currentPassword: passwords.current,
        newPassword: passwords.new,
      });

      alert("Password updated successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch {
      alert("Password update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      {!onlyPassword && (
        <div className="profile-section">
          <h3 className="profile-heading">User Information</h3>

          <form className="profile-form" onSubmit={handleProfileSubmit}>
            <label className="profile-label">
              Name
              <input
                className="profile-input"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>

            <label className="profile-label">
              Phone
              <input
                className="profile-input"
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
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleProfileChange}
              />
            </label>

            <label className="profile-label">
              Address
              <input
                className="profile-input"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
              />
            </label>

            <button className="profile-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      )}
      {showPassword && (
        <div className="profile-section">
          <h3 className="profile-heading">Change Password</h3>

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

            <button className="profile-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SellerProfile;
