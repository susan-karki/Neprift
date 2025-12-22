import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import search_icon_dark from "../../assets/search-b.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize state after mount to avoid flicker
  useEffect(() => {
    const token = localStorage.getItem("token1");
    const r = localStorage.getItem("role")?.toLowerCase() || null;
    setIsLoggedIn(!!token);
    setRole(r);
  }, []);

  // Listen for auth changes
  useEffect(() => {
    const handleAuthChange = () => {
      const token = localStorage.getItem("token1");
      const r = localStorage.getItem("role")?.toLowerCase() || null;
      setIsLoggedIn(!!token);
      setRole(r);
    };
    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token1");
    localStorage.removeItem("role");
    window.dispatchEvent(new Event("authChange"));
    navigate("/auth/login");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <h1 className="namelogo">Neprift</h1>
      </Link>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img src={search_icon_dark} alt="search" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {/* Guest */}
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/auth/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/auth/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </>
        )}

        {/* Seller */}
        {isLoggedIn && role === "seller" && (
          <>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={() => setMenuOpen(false)}>
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
            </li>
            <li onClick={handleLogout}>Logout</li>
          </>
        )}

        {/* Customer */}
        {isLoggedIn && role === "customer" && (
          <>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/CartPage" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
            </li>
            <li onClick={handleLogout}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
