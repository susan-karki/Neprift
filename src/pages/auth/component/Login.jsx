// import React from 'react';
// import Form from './form/Form';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { baseUrl } from '../../../config'; 

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (data) => {
//     try {
//       const response = await axios.post(`${baseUrl}/auth/login`, data);

//       if (response.status === 200) {
//         localStorage.setItem('token1', response.data.token);
//         navigate('/');
//       } else {
//         alert("Login Failed");
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return <Form type="Login" onSubmit={handleLogin} />;
// };

// export default Login;




// import React from 'react';
// import Form from './form/Form';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { baseUrl } from '../../../config'; 

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (data) => {
//     try {
//       const response = await axios.post(`${baseUrl}/auth/login`, data);

//       if (response.status === 200) {
//         // ✅ READ DATA FROM API RESPONSE
//         const token = response.data.responseBody?.token;
//         const role  = response.data.responseBody?.role; // SELLER / CUSTOMER

//         // ✅ SAVE TO LOCAL STORAGE
//         localStorage.setItem('token1', token);
//         localStorage.setItem('role', role);

//         // ✅ NOTIFY NAVBAR (VERY IMPORTANT)
//         window.dispatchEvent(new Event("authChange"));

//         navigate('/');
//       } else {
//         alert("Login Failed");
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return <Form type="Login" onSubmit={handleLogin} />;
// };

// export default Login;



// import React from 'react';
// import Form from './form/Form';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { baseUrl } from '../../../config'; 

// const Login = () => {
//   const navigate = useNavigate();

//   // 🔐 Decode JWT safely
//   const decodeToken = (token) => {
//     try {
//       const payload = token.split('.')[1];
//       return JSON.parse(atob(payload));
//     } catch (err) {
//       console.error("Invalid token");
//       return null;
//     }
//   };

//   const handleLogin = async (data) => {
//     try {
//       const response = await axios.post(`${baseUrl}/auth/login`, data);

//       // ✅ Check backend success
//       if (response.data?.statusCode === 200) {

//         const token = response.data.responseBody?.token;
//         if (!token) {
//           alert("Token not received");
//           return;
//         }
// // Decode JWT safely
// const decodeToken = (token) => {
//   try {
//     const payload = token.split(".")[1];
//     const decodedPayload = JSON.parse(atob(payload));
//     return decodedPayload;
//   } catch (error) {
//     console.error("Invalid token");
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
//   localStorage.setItem("userId", decoded.userId);   // email or userId
//   localStorage.setItem("role", decoded.role); 
//   localStorage.setItem("userEmail", decoded.sub); 
  
// };



        

//         window.dispatchEvent(new Event("authChange"));

//         navigate('/');
//         return;
//       }

//       alert(response.data?.responseMessage || "Login Failed");

//     } catch (error) {
//       alert(
//         error?.response?.data?.responseMessage ||
//         "Something went wrong"
//       );
//     }
//   };

//   return <Form type="Login" onSubmit={handleLogin} />;
// };

// export default Login;




// import React from "react";
// import Form from "./form/Form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { baseUrl } from "../../../config";

// // 🔐 Decode JWT safely
// const decodeToken = (token) => {
//   try {
//     const payload = token.split(".")[1];
//     return JSON.parse(atob(payload));
//   } catch (err) {
//     console.error("Invalid token");
//     return null;
//   }
// };

// // ✅ Check if user is logged in
// export const isLoggedIn = () => {
//   return Boolean(localStorage.getItem("token1"));
// };

// // ✅ Save token and user info
// export const saveAuthData = (token) => {
//   const decoded = decodeToken(token);
//   if (!decoded) return;

//   localStorage.setItem("token1", token);
//   localStorage.setItem("userId", decoded.userId); // userId
//   localStorage.setItem("role", decoded.role); 
//   localStorage.setItem("userEmail", decoded.sub); // email or username
// };

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (data) => {
//     try {
//       const response = await axios.post(`${baseUrl}/auth/login`, data);

//       // ✅ Check backend success
//       if (response.data?.statusCode === 200) {
//         const token = response.data.responseBody?.token;
//         if (!token) {
//           alert("Token not received");
//           return;
//         }

//         // Save token & user info
//         saveAuthData(token);

//         // Trigger auth change for other components
//         window.dispatchEvent(new Event("authChange"));

//         // Redirect to home
//         navigate("/");
//         return;
//       }

//       alert(response.data?.responseMessage || "Login Failed");
//     } catch (error) {
//       alert(
//         error?.response?.data?.responseMessage || "Something went wrong"
//       );
//     }
//   };

//   return <Form type="Login" onSubmit={handleLogin} />;
// };

// export default Login;





// import React from "react";
// import Form from "./form/Form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { baseUrl } from "../../../config";

// // 🔐 Decode JWT safely
// const decodeToken = (token) => {
//   try {
//     const payload = token.split(".")[1];
//     return JSON.parse(atob(payload));
//   } catch (err) {
//     console.error("Invalid token");
//     return null;
//   }
// };

// // ✅ Check if user is logged in
// export const isLoggedIn = () => {
//   return Boolean(localStorage.getItem("token1"));
// };

// // ✅ Save token and user info
// export const saveAuthData = (token) => {
//   const decoded = decodeToken(token);
//   if (!decoded) return;

//   localStorage.setItem("token1", token);
//   localStorage.setItem("userId", decoded.userId); // userId
//   localStorage.setItem("role", decoded.role); 
//   localStorage.setItem("userEmail", decoded.sub); // email or username
// };

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (data) => {
//     try {
//       const response = await axios.post(`${baseUrl}/auth/login`, data);

//       // ✅ Check backend success
//       if (response.data?.statusCode === 200) {
//         const token = response.data.responseBody?.token;
//         if (!token) {
//           alert("Token not received");
//           return;
//         }

//         // Save token & user info
//         saveAuthData(token);

//         // Trigger auth change for other components
//         window.dispatchEvent(new Event("authChange"));

//         // Role-based redirection
//         const decoded = decodeToken(token);
//         if (decoded?.role === "SELLER") {
//           navigate("/seller/sellerdash");
//         } else if (decoded?.role === "ADMIN") {
//           navigate("/admin");
//         } else {
//           navigate("/"); // default for customer or others
//         }

//         return;
//       }

//       alert(response.data?.responseMessage || "Login Failed");
//     } catch (error) {
//       alert(
//         error?.response?.data?.responseMessage || "Something went wrong"
//       );
//     }
//   };

//   return <Form type="Login" onSubmit={handleLogin} />;
// };

// export default Login;









import React from "react";
import Form from "./form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../../config";
import "react-toastify/dist/ReactToastify.css";

// 🔐 Decode JWT safely
const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (err) {
    console.error("Invalid token");
    return null;
  }
};

// ✅ Check if user is logged in
export const isLoggedIn = () => Boolean(localStorage.getItem("token1"));

// ✅ Save token and user info
export const saveAuthData = (token) => {
  const decoded = decodeToken(token);
  if (!decoded) return;

  localStorage.setItem("token1", token);
  localStorage.setItem("userId", decoded.userId);
  localStorage.setItem("role", decoded.role);
  localStorage.setItem("userEmail", decoded.sub);
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, data);

      if (response.data?.statusCode === 200) {
        const token = response.data.responseBody?.token;
        if (!token) {
          toast.error("Token not received ❌");
          return;
        }

        // Save token & user info
        saveAuthData(token);

        // Trigger auth change for other components
        window.dispatchEvent(new Event("authChange"));

        // Role-based redirection
        const decoded = decodeToken(token);
        if (decoded?.role === "SELLER") {
          toast.success("Welcome Seller! 🚀");
          navigate("/seller/sellerdash");
        } else if (decoded?.role === "ADMIN") {
          toast.success("Welcome Admin! 🚀");
          navigate("/admin");
        } else {
          toast.success("Login successful! 🎉");
          navigate("/"); // default for customer or others
        }

        return;
      }

      toast.error(response.data?.responseMessage || "Login Failed ❌");
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage || "Something went wrong ❌"
      );
    }
  };

  return <Form type="Login" onSubmit={handleLogin} />;
};

export default Login;




