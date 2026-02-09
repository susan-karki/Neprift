import React, { useState, useEffect } from "react";
import "./CustomerProfile.css";
import API from "../../../http/API";
import Layout from "../../../components/layout/Layout";

const ProfileSettings = () => {
  const userId = localStorage.getItem("userId");

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
    if (!userId) return;

    setLoading(true);
    try {
      await API.put(`/user/${userId}`, profile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed", error);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwords.new !== passwords.confirm) {
      alert("New password and confirm password do not match");
      return;
    }

    setLoading(true);
    try {
      await API.put("/user/update-password", {
        userId: userId,
        currentPassword: passwords.current,
        newPassword: passwords.new,
      });

      alert("Password updated successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (error) {
      console.error("Password update failed", error);
      alert("Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="customerprofile-container landscape">
        <div className="customerprofile-section">
          <h3 className="customerprofile-heading">Profile Information</h3>
          <form className="customerprofile-form" onSubmit={handleProfileSubmit}>
            <label className="customerprofile-label">
              Name
              <input
                className="customerprofile-input"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>

            <label className="customerprofile-label">
              Phone
              <input
                className="customerprofile-input"
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
              />
            </label>

            <label className="customerprofile-label">
              Date of Birth
              <input
                className="customerprofile-input"
                type="date"
                name="dob"
                value={profile.dob}
                onChange={handleProfileChange}
              />
            </label>

            <label className="customerprofile-label">
              Address
              <input
                className="customerprofile-input"
                type="text"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
              />
            </label>

            <button type="submit" className="customerprofile-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
        <div className="customerprofile-section customerprofile-password-section">
          <h3 className="customerprofile-heading">Update Password</h3>
          <form className="customerprofile-form" onSubmit={handlePasswordSubmit}>
            <label className="customerprofile-label">
              Current Password
              <input
                className="customerprofile-input"
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
              />
            </label>

            <label className="customerprofile-label">
              New Password
              <input
                className="customerprofile-input"
                type="password"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
              />
            </label>

            <label className="customerprofile-label">
              Confirm Password
              <input
                className="customerprofile-input"
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
              />
            </label>

            <button type="submit" className="customerprofile-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileSettings;
