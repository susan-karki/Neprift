import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="admin_container">

      {/* Sidebar */}
      <aside className="admin_sidebar">
        <div className="admin_brand_wrap">
          <h2 className="admin_brand">Neprift</h2>
        </div>

        <nav className="admin_navmenu">
          <ul className="admin_menu_list">

            {/* Correct Link */}
            <li className="admin_menu_item">
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>

            <li className="admin_menu_item">
              <Link to="/admin/profile">Profile</Link>
            </li>

            <li className="admin_menu_item">
              <Link to="/admin/donate">Donations</Link>
            </li>
            
            <li className="admin_menu_item">
              <Link to="/admin/suggestions">Suggestions</Link>
            </li>
            
            <li className="admin_menu_item">
              <Link to="/admin/seller">user mgmt</Link>
            </li>

            <li className="admin_menu_item">
              <Link to="/auth/register">Logout</Link>
            </li>

          </ul>
        </nav>
      </aside>

      {/* Navbar */}
      <header className="admin_navbar">
        <div className="admin_nav_left">{today}</div>
        <div className="admin_nav_right">
          <div className="admin_profile_circle">S</div>
          <Link to = '/admin/profile'><span className="admin_profile_name">Susan Karki</span></Link>
        </div>
      </header>

      {/* Page content loads here */}
      <main className="admin_content_area">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;
