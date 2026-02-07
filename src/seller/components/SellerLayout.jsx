// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./SellerLayout.css";

// function SellerLayout() {
//   const today = new Date().toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="sellerdash-container">

//       {/* Sidebar */}
//       <aside className="sellerdash-sidebar">
//         <div className="sellerdash-brand-wrap">
//           <h1 className="sellerdash-brand">Neprift</h1>
//         </div>

//         <nav className="sellerdash-navmenu">
//           <ul className="sellerdash-menu-list">

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/sellerdash">Dashboard</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/product">Add Product</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/order">Orders</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/sellerProfile">Profile</Link>
//             </li>
//              <li className="sellerdash-menu-item">
//               <Link to="/seller/policies">Policy</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/auth/login">Logout</Link>
//             </li>

//           </ul>
//         </nav>
//       </aside>

//       {/* Navbar */}
//       <header className="sellerdash-navbar">
//         <div className="sellerdash-nav-left">{today}</div>

//         <div className="sellerdash-nav-right">
//           <div className="sellerdash-profile-circle">S</div>
//           <Link to ='seller/sellerProfile'><span className="sellerdash-profile-name">Seller</span></Link>
//         </div>
//       </header>

//       {/* Content */}
//       <main className="sellerdash-content-area">
//         <Outlet />
//       </main>

//     </div>
//   );
// }

// export default SellerLayout;





// import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./SellerLayout.css";

// function SellerLayout() {
//   const today = new Date().toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   const [sellerName, setSellerName] = useState("Seller");

//   useEffect(() => {
//     const email = localStorage.getItem("userEmail"); // or name if stored
//     if (email) {
//       setSellerName(email.split("@")[0]); // Use email before @ as display name
//     }
//   }, []);

//   return (
//     <div className="sellerdash-container">

//       {/* Sidebar */}
//       <aside className="sellerdash-sidebar">
//         <div className="sellerdash-brand-wrap">
//           <h1 className="sellerdash-brand">Neprift</h1>
//         </div>

//         <nav className="sellerdash-navmenu">
//           <ul className="sellerdash-menu-list">
//             <li className="sellerdash-menu-item">
//               <Link to="/seller/sellerdash">Dashboard</Link>
//             </li>
//             <li className="sellerdash-menu-item">
//               <Link to="/seller/product">Add Product</Link>
//             </li>
//             <li className="sellerdash-menu-item">
//               <Link to="/seller/order">Orders</Link>
//             </li>
//             <li className="sellerdash-menu-item">
//               <Link to="/seller/sellerProfile">Profile</Link>
//             </li>
//             <li className="sellerdash-menu-item">
//               <Link to="/seller/policies">Policy</Link>
//             </li>
//             <li className="sellerdash-menu-item">
//               <Link to="/auth/login">Logout</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Navbar */}
//       <header className="sellerdash-navbar">
//         <div className="sellerdash-nav-left">{today}</div>

//         {/* Entire profile section clickable */}
//         <Link
//           to="/seller/sellerProfile"
//           className="sellerdash-nav-right"
//           style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
//         >
//           <div className="sellerdash-profile-circle">
//             {sellerName.charAt(0).toUpperCase()}
//           </div>
//           <span className="sellerdash-profile-name">{sellerName}</span>
//         </Link>
//       </header>

//       {/* Content */}
//       <main className="sellerdash-content-area">
//         <Outlet />
//       </main>

//     </div>
//   );
// }

// export default SellerLayout;




// new 





// import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./SellerLayout.css";

// function SellerLayout() {
//   const today = new Date().toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   const [sellerName, setSellerName] = useState("Seller");

//   useEffect(() => {
//     const email = localStorage.getItem("userEmail");
//     if (email) {
//       setSellerName(email.split("@")[0]);
//     }
//   }, []);

//   return (
//     <div className="sellerdash-container">

//       {/* Sidebar */}
//       <aside className="sellerdash-sidebar">
//         <div className="sellerdash-brand-wrap">
//           <h1 className="sellerdash-brand">Neprift</h1>
//         </div>

//         <nav className="sellerdash-navmenu">
//           <ul className="sellerdash-menu-list">
//             <li className="sellerdash-menu-item">
//               <Link to="/seller/sellerdash">Dashboard</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/product">Add Product</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/order">Orders</Link>
//             </li>

//             {/* ✅ SIDEBAR → FULL PROFILE */}
//             <li className="sellerdash-menu-item">
//               <Link
//                 to="/seller/sellerProfile"
//                 state={{ showPassword: true }}
//               >
//                 Profile Setting
//               </Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/seller/policies">Policy</Link>
//             </li>

//             <li className="sellerdash-menu-item">
//               <Link to="/auth/login">Logout</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Navbar */}
//       <header className="sellerdash-navbar">
//         <div className="sellerdash-nav-left">{today}</div>

//         {/* ✅ NAVBAR → VIEW ONLY PROFILE */}
//         <Link
//           to="/seller/sellerProfile"
//           state={{ showPassword: false }}
//           className="sellerdash-nav-right"
//           style={{
//             textDecoration: "none",
//             display: "flex",
//             alignItems: "center",
//             gap: "0.5rem",
//           }}
//         >
//           <div className="sellerdash-profile-circle">
//             {sellerName.charAt(0).toUpperCase()}
//           </div>
//           <span className="sellerdash-profile-name">{sellerName}</span>
//         </Link>
//       </header>

//       {/* Content */}
//       <main className="sellerdash-content-area">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default SellerLayout;

//latest



import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./SellerLayout.css";

function SellerLayout() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [sellerName, setSellerName] = useState("Seller");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setSellerName(email.split("@")[0]);
    }
  }, []);

  return (
    <div className="sellerdash-container">
      {/* SIDEBAR */}
      <aside className="sellerdash-sidebar">
        <div className="sellerdash-brand-wrap">
          <h1 className="sellerdash-brand">Neprift</h1>
        </div>

        <nav className="sellerdash-navmenu">
          <ul className="sellerdash-menu-list">
            <li className="sellerdash-menu-item">
              <Link to="/seller/sellerdash">Dashboard</Link>
            </li>

            <li className="sellerdash-menu-item">
              <Link to="/seller/product">Add Product</Link>
            </li>

            <li className="sellerdash-menu-item">
              <Link to="/seller/order">Orders</Link>
            </li>

            {/* PROFILE SETTING (SAME LOOK AS OTHERS) */}
            <li className="sellerdash-menu-item profile-dropdown">
              <a href="#" className="profile-dropdown-title">
                Profile Setting ▾
              </a>

              <ul className="profile-dropdown-menu">
                <li className="sellerdash-menu-item">
                  <Link
                    to="/seller/sellerProfile"
                    state={{ showPassword: false, onlyPassword: false }}
                  >
                    User Info
                  </Link>
                </li>

                <li className="sellerdash-menu-item">
                  <Link
                    to="/seller/sellerProfile"
                    state={{ showPassword: true, onlyPassword: true }}
                  >
                    Update Password
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sellerdash-menu-item">
              <Link to="/seller/policies">Policy</Link>
            </li>

            <li className="sellerdash-menu-item">
              <Link to="/auth/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* NAVBAR */}
      <header className="sellerdash-navbar">
        <div className="sellerdash-nav-left">{today}</div>

        {/* NAVBAR PROFILE → DISPLAY ONLY */}
        <Link
          to="/seller/display"
          className="sellerdash-nav-right"
          style={{ textDecoration: "none" }}
        >
          <div className="sellerdash-profile-circle">
            {sellerName.charAt(0).toUpperCase()}
          </div>
          <span className="sellerdash-profile-name">{sellerName}</span>
        </Link>
      </header>

      {/* CONTENT */}
      <main className="sellerdash-content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default SellerLayout;
