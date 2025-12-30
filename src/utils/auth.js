// Decode JWT safely
const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  } catch (error) {
    console.error("Invalid token");
    return null;
  }
};

// Check if the user is logged in
export const isLoggedIn = () => {
  return Boolean(localStorage.getItem("token1"));
};

// Save token + user info
export const saveAuthData = (token) => {
  const decoded = decodeToken(token);

  if (!decoded) return;

  localStorage.setItem("token1", token);
  localStorage.setItem("userId", decoded.userId);   // email or userId
  localStorage.setItem("role", decoded.role); 
  localStorage.setItem("userEmail", decoded.sub); 
  
};

// // Logout user
// export const logout = () => {
//   localStorage.removeItem("token1");
//   localStorage.removeItem("userId");
//   localStorage.removeItem("role");
//   localStorage.removeItem("userEmail");
// };





// // Decode JWT safely (handles base64url)
// const decodeToken = (token) => {
//   try {
//     const payload = token.split(".")[1];
//     const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
//     const decodedPayload = JSON.parse(
//       decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//           .join("")
//       )
//     );

//     return decodedPayload;
//   } catch (error) {
//     console.error("Invalid token", error);
//     return null;
//   }
// };

// // Check if the user is logged in
// export const isLoggedIn = () => {
//   return Boolean(localStorage.getItem("token1"));
// };

// // Save token + user info
// export const saveAuthData = (token) => {
//   const decoded = decodeToken(token);

//   if (!decoded) return;

//   localStorage.setItem("token1", token);

//   // NEW MAPPING
//   localStorage.setItem("email", decoded.sub);      // user email
//   localStorage.setItem("userId", decoded.userId);  // user ID
//   localStorage.setItem("role", decoded.role);      // SELLER / ADMIN / USER
// };

// // Logout user
// export const logout = () => {
//   localStorage.removeItem("token1");
//   localStorage.removeItem("email");
//   localStorage.removeItem("userId");
//   localStorage.removeItem("role");
// };

// // Helpers
// export const getToken = () => localStorage.getItem("token1");
// export const getEmail = () => localStorage.getItem("email");
// export const getUserId = () => localStorage.getItem("userId");
// export const getRole = () => localStorage.getItem("role");













