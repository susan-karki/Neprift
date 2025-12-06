// // import axios from "axios";

// // const API = axios.create({
// //   headers: {
// //     "Content-Type": "application/json",
// //     Accept: "application/json",
// //   },
// // });

// // API.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("token1");
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });

// // export default API;

// import axios from "axios";

// const API = axios.create({
//   // Don't set Content-Type here; browser handles FormData automatically
// });

// // Attach token automatically on every request
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token1");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`; // correct template literal
//   }
//   config.headers.Accept = "application/json"; // optional
//   return config;
// });

// export default API;

import axios from "axios";

// Create axios instance with baseURL from .env
const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // <- make sure .env has no spaces
});

// Attach token automatically on every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token1");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json"; // optional
  return config;
});

export default API;
