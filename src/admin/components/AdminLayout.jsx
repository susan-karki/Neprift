// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./AdminLayout.css";

// function AdminLayout() {
//   const today = new Date().toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="admin_container">

//       {/* Sidebar */}
//       <aside className="admin_sidebar">
//         <div className="admin_brand_wrap">
//           <h2 className="admin_brand">Neprift</h2>
//         </div>

//         <nav className="admin_navmenu">
//           <ul className="admin_menu_list">

//             {/* Correct Link */}
//             <li className="admin_menu_item">
//               <Link to="/admin/dashboard">Dashboard</Link>
//             </li>

//             <li className="admin_menu_item">
//               <Link to="/admin/profile">Profile Setting</Link>
//             </li>
            
//             <li className="admin_menu_item">
//               <Link to="/admin/seller">user mgmt</Link>
//             </li>

//             <li className="admin_menu_item">
//               <Link to="/auth/login">Logout</Link>
//             </li>

//           </ul>
//         </nav>
//       </aside>

//       {/* Navbar */}
//       <header className="admin_navbar">
//         <div className="admin_nav_left">{today}</div>
//         <div className="admin_nav_right">
//           <div className="admin_profile_circle">S</div>
//           <Link to = '/admin/profile'><span className="admin_profile_name">Susan Karki</span></Link>
//         </div>
//       </header>

//       {/* Page content loads here */}
//       <main className="admin_content_area">
//         <Outlet />
//       </main>

//     </div>
//   );
// }

// export default AdminLayout;





// new 






// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./AdminLayout.css";

// function AdminLayout() {
//   const today = new Date().toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="admin_container">
//       {/* Sidebar */}
//       <aside className="admin_sidebar">
//         <div className="admin_brand_wrap">
//           <h2 className="admin_brand">Neprift</h2>
//         </div>

//         <nav className="admin_navmenu">
//           <ul className="admin_menu_list">
//             <li className="admin_menu_item">
//               <Link to="/admin/dashboard">Dashboard</Link>
//             </li>

//             {/* FULL SETTINGS */}
//             <li className="admin_menu_item">
//               <Link to="/admin/profile">Profile Setting</Link>
//             </li>

//             <li className="admin_menu_item">
//               <Link to="/admin/seller">User Mgmt</Link>
//             </li>

//             <li className="admin_menu_item">
//               <Link to="/auth/login">Logout</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Navbar */}
//       <header className="admin_navbar">
//         <div className="admin_nav_left">{today}</div>
//         <div className="admin_nav_right">
//           <div className="admin_profile_circle">S</div>

//           {/* VIEW ONLY PROFILE */}
//           <Link to="/admin/profile?view=only">
//             <span className="admin_profile_name">Susan Karki</span>
//           </Link>
//         </div>
//       </header>

//       <main className="admin_content_area">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default AdminLayout;















//latest 







// import React, { useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import "./AdminLayout.css";

// function AdminLayout() {
//   const today = new Date().toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   // State for profile dropdown
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const activeSection = query.get("section") || "userinfo"; // default to userinfo

//   return (
//     <div className="admin_container">
//       {/* Sidebar */}
//       <aside className="admin_sidebar">
//         <div className="admin_brand_wrap">
//           <h2 className="admin_brand">Neprift</h2>
//         </div>

//         <nav className="admin_navmenu">
//           <ul className="admin_menu_list">
//             <li className="admin_menu_item">
//               <Link to="/admin/dashboard">Dashboard</Link>
//             </li>

//             {/* Profile Dropdown */}
//             <li
//               className="admin_menu_item profile-dropdown"
//               onMouseEnter={() => setShowProfileDropdown(true)}
//               onMouseLeave={() => setShowProfileDropdown(false)}
//             >
//               <span className="profile-dropdown-title">Profile Setting</span>
//               {showProfileDropdown && (
//                 <ul className="profile-dropdown-menu">
//                   <li>
//                     <Link to="/admin/profile?section=userinfo">User Info</Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/profile?section=updatepassword">
//                       Update Password
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="admin_menu_item">
//               <Link to="/admin/seller">User Mgmt</Link>
//             </li>

//             <li className="admin_menu_item">
//               <Link to="/auth/login">Logout</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Navbar */}
//       <header className="admin_navbar">
//         <div className="admin_nav_left">{today}</div>
//         <div className="admin_nav_right">
//           <div className="admin_profile_circle">S</div>
//           <Link to="staticprofile">
//             <span className="admin_profile_name">Susan Karki</span>
//           </Link>
//         </div>
//       </header>

//       <main className="admin_content_area">
//         {/* Pass activeSection as prop to ProfileSettings */}
//         <Outlet context={{ activeSection }} />
//       </main>
//     </div>
//   );
// }

// export default AdminLayout;












//todays







import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userName, setUserName] = useState("User"); // default name
  const [userRole, setUserRole] = useState("user"); // optional: can use for admin logic

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const activeSection = query.get("section") || "userinfo"; // default to userinfo

  // Fetch logged-in user info dynamically
  useEffect(() => {
    // Example: assuming you store in localStorage
    const storedName = localStorage.getItem("userName") || "User";
    const storedRole = localStorage.getItem("role") || "user"; // "admin" or "user"
    setUserName(storedName);
    setUserRole(storedRole);
  }, []);

  // First letter for profile circle
  const profileInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="admin_container">
      {/* Sidebar */}
      <aside className="admin_sidebar">
        <div className="admin_brand_wrap">
          <h2 className="admin_brand">Neprift</h2>
        </div>

        <nav className="admin_navmenu">
          <ul className="admin_menu_list">
            <li className="admin_menu_item">
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>

            {/* Profile Dropdown */}
            <li
              className="admin_menu_item profile-dropdown"
              onMouseEnter={() => setShowProfileDropdown(true)}
              onMouseLeave={() => setShowProfileDropdown(false)}
            >
              <span className="profile-dropdown-title">Profile Setting</span>
              {showProfileDropdown && (
                <ul className="profile-dropdown-menu">
                  <li>
                    <Link to="/admin/profile?section=userinfo">User Info</Link>
                  </li>
                  <li>
                    <Link to="/admin/profile?section=updatepassword">
                      Update Password
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="admin_menu_item">
              <Link to="/admin/seller">User Mgmt</Link>
            </li>

            <li className="admin_menu_item">
              <Link to="/auth/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Navbar */}
      <header className="admin_navbar">
        <div className="admin_nav_left">{today}</div>
        <div className="admin_nav_right">
          <div className="admin_profile_circle">{profileInitial}</div>
          <Link to="staticprofile">
            <span className="admin_profile_name">{userName}</span>
          </Link>
        </div>
      </header>

      <main className="admin_content_area">
        {/* Pass activeSection as prop to ProfileSettings */}
        <Outlet context={{ activeSection }} />
      </main>
    </div>
  );
}

export default AdminLayout;
