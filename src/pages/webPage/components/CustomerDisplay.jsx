import React, { useEffect, useState } from "react";
import "./CustomerDisplay.css";
import API from "../../../http/API";
import Layout from "../../../components/layout/Layout";

const CustomerDisplay = () => {
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
    <Layout>
      <div className="customerProfileDisplay-wrapper">
        <div className="customerProfileDisplay-card">
          <h2 className="customerProfileDisplay-title">Your Profile</h2>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Name</label>
            <input
              className="customerProfileDisplay-input readonly"
              value={profile.name}
              readOnly
            />
          </div>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Email</label>
            <input
              className="customerProfileDisplay-input readonly"
              value={profile.email}
              readOnly
            />
          </div>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Phone</label>
            <input
              className="customerProfileDisplay-input readonly"
              value={profile.phone}
              readOnly
            />
          </div>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Date of Birth</label>
            <input
              className="customerProfileDisplay-input readonly"
              type="date"
              value={profile.dateOfBirth}
              readOnly
            />
          </div>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Gender</label>
            <select
              className="customerProfileDisplay-input readonly"
              value={profile.gender}
              disabled
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Address</label>
            <input
              className="customerProfileDisplay-input readonly"
              value={profile.address}
              readOnly
            />
          </div>
          <div className="customerProfileDisplay-row">
            <label className="customerProfileDisplay-label">Role</label>
            <input
              className="customerProfileDisplay-input readonly"
              value={profile.role}
              readOnly
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDisplay;
