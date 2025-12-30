// import React, { useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../../config";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "./ForgotPassword.css";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       toast.error("Please enter your email");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         `${baseUrl}/auth/forget-password`,
//         email, // ✅ SEND STRING ONLY
//         {
//           headers: {
//             "Content-Type": "text/plain", // ✅ IMPORTANT
//           },
//         }
//       );

//       // ✅ Success check (safe & reliable)
//       if (res.status === 200 || res.status === 201) {
//         toast.success("📧 Password reset link sent to your email");
//         setEmail("");
//         setTimeout(() => navigate("/auth/login"), 2500);
//         return;
//       }

//       toast.error("Request failed");

//     } catch (err) {
//       toast.error(
//         err?.response?.data?.responseMessage ||
//         err?.response?.data ||
//         "Server error, try again"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="forgot-container">
//       <form className="forgot-box" onSubmit={handleSubmit}>
//         <h2>Forgot Password</h2>
//         <p>Enter your registered email</p>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Sending..." : "Send Reset Link"}
//         </button>

//         <span
//           className="back-login"
//           onClick={() => navigate("/auth/login")}
//         >
//           Back to Login
//         </span>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;




// import React, { useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../../config";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "./ForgotPassword.css";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       toast.error("Please enter your email");
//       return;
//     }

//     try {
//       setLoading(true);

//       // ✅ Send email as JSON
//       const res = await axios.post(
//         `${baseUrl}/auth/forget-password`,
//         { email }   // 👈 JSON body
//       );

//       // ✅ Success handling
//       if (res.status === 200 || res.status === 201) {
//         toast.success("📧 Password reset link sent to your email");
//         setEmail("");
//         setTimeout(() => navigate("/auth/login"), 2500);
//         return;
//       }

//       toast.error("Request failed");

//     } catch (err) {
//       toast.error(
//         err?.response?.data?.responseMessage ||
//         "Server error, try again"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="forgot-container">
//       <form className="forgot-box" onSubmit={handleSubmit}>
//         <h2>Forgot Password</h2>
//         <p>Enter your registered email</p>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Sending..." : "Send Reset Link"}
//         </button>

//         <span
//           className="back-login"
//           onClick={() => navigate("/auth/login")}
//         >
//           Back to Login
//         </span>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;




// import React, { useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../../config";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(`${baseUrl}/auth/forget-password`, { email });
//       toast.success("OTP sent to your email");
//       navigate("/otp", { state: { email } });
//     } catch (err) {
//       toast.error(err?.response?.data?.responseMessage || "Error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Forgot Password</h2>
//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <button type="submit">Send OTP</button>
//     </form>
//   );
// };

// export default ForgotPassword;





//new

import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // import CSS

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/auth/forget-password`, { email });
      toast.success("OTP sent to your email");
      navigate("/otp", { state: { email } });
    } catch (err) {
      toast.error(err?.response?.data?.responseMessage || "Error");
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2 className="forgot-password-title">Forgot Password</h2>

        <label className="forgot-password-label">
          Email
          <input
            className="forgot-password-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <button className="forgot-password-button" type="submit">
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

