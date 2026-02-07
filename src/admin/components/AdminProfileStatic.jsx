import React, { useEffect, useState } from "react";
import "./AdminProfileStatic.css";
import API from "../../http/API";

const AdminProfileStatic = () => {
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

  // ================= FETCH PROFILE =================
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
    <div className="profileStaticAdmin-wrapper">
      <div className="profileStaticAdmin-card">
        <h2 className="profileStaticAdmin-title">Your Profile</h2>

        {/* NAME */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Name</label>
          <input
            className="profileStaticAdmin-input readonly"
            value={profile.name}
            readOnly
          />
        </div>

        {/* EMAIL */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Email</label>
          <input
            className="profileStaticAdmin-input readonly"
            value={profile.email}
            readOnly
          />
        </div>

        {/* PHONE */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Phone</label>
          <input
            className="profileStaticAdmin-input readonly"
            value={profile.phone}
            readOnly
          />
        </div>

        {/* DATE OF BIRTH */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Date of Birth</label>
          <input
            className="profileStaticAdmin-input readonly"
            type="date"
            value={profile.dateOfBirth}
            readOnly
          />
        </div>

        {/* GENDER */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Gender</label>
          <select
            className="profileStaticAdmin-input readonly"
            value={profile.gender}
            disabled
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* ADDRESS */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Address</label>
          <input
            className="profileStaticAdmin-input readonly"
            value={profile.address}
            readOnly
          />
        </div>

        {/* ROLE */}
        <div className="profileStaticAdmin-row">
          <label className="profileStaticAdmin-label">Role</label>
          <input
            className="profileStaticAdmin-input readonly"
            value={profile.role}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProfileStatic;
