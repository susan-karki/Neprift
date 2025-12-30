
// const handleLogout = () => {
//   localStorage.removeItem("token1");
//   localStorage.removeItem("userId");
//   localStorage.removeItem("role");
//   localStorage.removeItem("userEmail");
//   console.log("Logged out, token cleared!");

// };

// export default handleLogout;


// logout.js
export const handleLogout = () => {
  localStorage.removeItem("token1");
  localStorage.removeItem("userId");
  localStorage.removeItem("role");
  localStorage.removeItem("userEmail");

  // Trigger any listener for auth changes
  window.dispatchEvent(new Event("authChange"));

  console.log("Logged out, token cleared!");
};
