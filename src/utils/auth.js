// export const isLoggedIn = () => {
//   return !!localStorage.getItem("token1");
// };

// export const logout = () => {
//   localStorage.removeItem("token1");
// };


// src/auth/utils/authHelpers.js

// Check if the user is logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem("token1");
  return Boolean(token); // returns true if token exists, false otherwise
};

// Logout the user
export const logout = () => {
  localStorage.removeItem("token1");
  // Optionally, you can also clear other auth-related info
  // localStorage.removeItem("userData");
};

// Save token (optional helper if you plan to login programmatically)
export const saveToken = (token) => {
  localStorage.setItem("token1", token);
};

// Get token (optional helper)
export const getToken = () => {
  return localStorage.getItem("token1");
};
