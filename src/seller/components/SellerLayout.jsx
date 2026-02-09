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
      <header className="sellerdash-navbar">
        <div className="sellerdash-nav-left">{today}</div>
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
      <main className="sellerdash-content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default SellerLayout;
