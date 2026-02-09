export const handleLogout = () => {
  localStorage.removeItem("token1");
  localStorage.removeItem("userId");
  localStorage.removeItem("role");
  localStorage.removeItem("userEmail");
  window.dispatchEvent(new Event("authChange"));
  console.log("Logged out, token cleared!");
};
