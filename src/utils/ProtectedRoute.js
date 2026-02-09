import { isLoggedIn } from "./auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const loggedIn = isLoggedIn();
  const role = localStorage.getItem("role")?.toLowerCase() || "";

  console.log("ProtectedRoute → loggedIn:", loggedIn, "role:", role, "allowedRoles:", allowedRoles);

  if (!loggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
