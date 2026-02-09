import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import search_icon_dark from "../../assets/search-b.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef();

  useEffect(() => syncAuth(), []);
  useEffect(() => {
    const handleAuthChange = () => syncAuth();
    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const syncAuth = () => {
    const token = localStorage.getItem("token1");
    const storedRole = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setRole(storedRole ? storedRole.toLowerCase() : null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token1");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");
    window.dispatchEvent(new Event("authChange"));
    setMenuOpen(false);
    setProfileOpen(false);
    navigate("/auth/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <h1 className="namelogo">Neprift</h1>
      </Link>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img src={search_icon_dark} alt="search" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {!isLoggedIn && (
          <>
            <li><Link to="/auth/register" onClick={closeMenu}>Register</Link></li>
            <li><Link to="/auth/login" onClick={closeMenu}>Login</Link></li>
          </>
        )}

        {isLoggedIn && role === "customer" && (
          <>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="CartPage" onClick={closeMenu}>Cart</Link></li>
            <li><Link to="/ord" onClick={closeMenu}>Orders</Link></li>

            <li
              className="profile-nav-item"
              ref={profileRef}
              onClick={() => setProfileOpen(prev => !prev)}
            >
              <span className="profile-nav-title">Profile ▾</span>

              {profileOpen && (
                <ul className="profile-nav-dropdown">
                  <li>
                    <Link
                      to="/customerDisplay"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeMenu();
                      }}
                    >
                      Show Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/customerProfile"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeMenu();
                      }}
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}

        {isLoggedIn && role === "seller" && (
          <>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="seller/sellerdash" onClick={closeMenu}>Dashboard</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
