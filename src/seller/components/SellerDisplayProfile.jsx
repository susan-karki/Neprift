import React, { useEffect, useState } from "react";
import "./sellerDisplayProfile.css";
import API from "../../http/API";

const SellerDisplayProfile = () => {
  const userId = localStorage.getItem("userId");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    gender: "",
    role: "",
  });
  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const res = await API.get(`/user/${userId}`);
        const data = res.data.responseBody;

        setProfile({
          name: data?.name || "",
          email: data?.email || "",
          phone: data?.phone || "",
          dateOfBirth: data?.dateOfBirth || "",
          address: data?.address || "",
          gender: data?.gender || "",
          role: data?.role || "",
        });
      } catch (error) {
        console.error("Failed to fetch profile", error);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <div className="profiledisplay-wrapper">
      <div className="profiledisplay-card">
        <h2 className="profiledisplay-title">Your Profile</h2>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Name</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.name}
            readOnly
          />
        </div>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Email</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.email}
            readOnly
          />
        </div>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Phone</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.phone}
            readOnly
          />
        </div>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Date of Birth</label>
          <input
            className="profiledisplay-input readonly"
            type="date"
            value={profile.dateOfBirth}
            readOnly
          />
        </div>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Gender</label>
          <select
            className="profiledisplay-input readonly"
            value={profile.gender}
            disabled
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Address</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.address}
            readOnly
          />
        </div>
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Role</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.role}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default SellerDisplayProfile;
