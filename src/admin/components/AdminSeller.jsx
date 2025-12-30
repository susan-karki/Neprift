// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminSeller.css';

// const AdminSeller = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get('http://100.78.28.88:8080/api/admin/users'); // your backend API
//       setUsers(res.data);
//     } catch (err) {
//       console.error('Error fetching users:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <div className="seller-loading">Loading users...</div>;
//   }

//   return (
//     <div className="seller-admin-container">
//       <h2>Registered Users</h2>

//       {users.length === 0 ? (
//         <p className="seller-no-users">No registered users yet.</p>
//       ) : (
//         <table className="seller-admin-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Phone</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user.id}>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <span className={`seller-role ${user.role.toLowerCase()}`}>
//                     {user.role}
//                   </span>
//                 </td>
//                 <td>{user.phone}</td>
//                 <td className="seller-active">Registered</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminSeller;





import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminSeller.css";

const AdminSeller = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token1");

  const fetchUsers = async () => {
    try {
      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await axios.get(
        "http://100.78.28.88:8080/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data.responseBody || res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔴 DELETE USER (ADMIN API)
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://100.78.28.88:8080/api/admin/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ Update UI after delete
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );

    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="seller-loading">Loading users...</div>;
  }

  return (
    <div className="seller-admin-container">
      <h2>Registered Users</h2>

      {users.length === 0 ? (
        <p className="seller-no-users">No registered users yet.</p>
      ) : (
        <table className="seller-admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`seller-role ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>{user.phone || "-"}</td>
                <td>
                  <button
                    className="seller-delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminSeller;
