// src/utils/ProtectedRoute.js
import { isLoggedIn } from "./auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const loggedIn = isLoggedIn();
  const role = localStorage.getItem("role")?.toLowerCase() || "";

  // Debug log
  console.log("ProtectedRoute → loggedIn:", loggedIn, "role:", role, "allowedRoles:", allowedRoles);

  if (!loggedIn) {
    // Not logged in → go to login
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    // Role not allowed → go to home
    return <Navigate to="/" replace />;
  }

  // Render children if logged in and role allowed
  return children;
};

export default ProtectedRoute;
