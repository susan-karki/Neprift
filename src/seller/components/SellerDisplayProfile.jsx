// import React, { useEffect, useState } from "react";
// import "./sellerDisplayProfile.css";
// import API from "../../http/API";

// const SellerDisplayProfile = () => {
//   const userId = localStorage.getItem("userId");

//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dateOfBirth: "",
//     address: "",
//     gender: "",
//     role: "",
//   });

//   // ================= FETCH PROFILE =================
//   useEffect(() => {
//     if (!userId) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await API.get(`/user/${userId}`);
//         const data = res.data.responseBody;

//         setProfile({
//           name: data?.name || "",
//           email: data?.email || "",
//           phone: data?.phone || "",
//           dateOfBirth: data?.dateOfBirth || "",
//           address: data?.address || "",
//           gender: data?.gender || "",
//           role: data?.role || "",
//         });
//       } catch (error) {
//         console.error("Failed to fetch profile", error);
//       }
//     };

//     fetchProfile();
//   }, [userId]);

//   // ================= HANDLE CHANGE =================
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="profiledisplay-wrapper">
//       <div className="profiledisplay-card">
//         <h2 className="profiledisplay-title">Seller Profile</h2>

//         {/* NAME */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Name</label>
//           <input
//             className="profiledisplay-input"
//             name="name"
//             value={profile.name}
//             onChange={handleChange}
//           />
//         </div>

//         {/* EMAIL */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Email</label>
//           <input
//             className="profiledisplay-input readonly"
//             value={profile.email}
//             readOnly
//           />
//         </div>

//         {/* PHONE */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Phone</label>
//           <input
//             className="profiledisplay-input"
//             name="phone"
//             value={profile.phone}
//             onChange={handleChange}
//           />
//         </div>

//         {/* DATE OF BIRTH */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Date of Birth</label>
//           <input
//             className="profiledisplay-input"
//             type="date"
//             name="dateOfBirth"
//             value={profile.dateOfBirth}
//             onChange={handleChange}
//           />
//         </div>

//         {/* GENDER */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Gender</label>
//           <select
//             className="profiledisplay-input"
//             name="gender"
//             value={profile.gender}
//             onChange={handleChange}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         {/* ADDRESS */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Address</label>
//           <input
//             className="profiledisplay-input"
//             name="address"
//             value={profile.address}
//             onChange={handleChange}
//           />
//         </div>

//         {/* ROLE */}
//         <div className="profiledisplay-row">
//           <label className="profiledisplay-label">Role</label>
//           <input
//             className="profiledisplay-input readonly"
//             value={profile.role}
//             readOnly
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDisplayProfile;











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
    <div className="profiledisplay-wrapper">
      <div className="profiledisplay-card">
        <h2 className="profiledisplay-title">Your Profile</h2>

        {/* NAME */}
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Name</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.name}
            readOnly
          />
        </div>

        {/* EMAIL */}
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Email</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.email}
            readOnly
          />
        </div>

        {/* PHONE */}
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Phone</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.phone}
            readOnly
          />
        </div>

        {/* DATE OF BIRTH */}
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Date of Birth</label>
          <input
            className="profiledisplay-input readonly"
            type="date"
            value={profile.dateOfBirth}
            readOnly
          />
        </div>

        {/* GENDER */}
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

        {/* ADDRESS */}
        <div className="profiledisplay-row">
          <label className="profiledisplay-label">Address</label>
          <input
            className="profiledisplay-input readonly"
            value={profile.address}
            readOnly
          />
        </div>

        {/* ROLE */}
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
