// import React, { useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../../config";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

// const VerifyOtp = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");

//   const email = state?.email;

//   const handleVerify = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${baseUrl}/auth/verify-otp`, {
//         email,
//         otp,
//       });

//       const token = res.data.responseBody?.token;
//       if (!token) {
//         toast.error("Token not received");
//         return;
//       }

//       // Save reset token temporarily
//       localStorage.setItem("resetToken", token);

//       toast.success("OTP verified");
//       navigate("/reset", { state: { email } });

//     } catch (err) {
//       toast.error(err?.response?.data?.responseMessage || "Invalid OTP");
//     }
//   };

//   return (
//     <form onSubmit={handleVerify}>
//       <h2>Verify OTP</h2>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         required
//       />
//       <button type="submit">Verify</button>
//     </form>
//   );
// };

// export default VerifyOtp;






//new




import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "./VerifyOtp.css"; // import the CSS

const VerifyOtp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const email = state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/auth/verify-otp`, {
        email,
        otp,
      });

      const token = res.data.responseBody?.token;
      if (!token) {
        toast.error("Token not received");
        return;
      }

      // Save reset token temporarily
      localStorage.setItem("resetToken", token);

      toast.success("OTP verified");
      navigate("/reset", { state: { email } });

    } catch (err) {
      toast.error(err?.response?.data?.responseMessage || "Invalid OTP");
    }
  };

  return (
    <div className="verify-otp-container">
      <form className="verify-otp-form" onSubmit={handleVerify}>
        <h2 className="verify-otp-title">Verify OTP</h2>

        <label className="verify-otp-label">
          OTP
          <input
            type="text"
            className="verify-otp-input"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="verify-otp-button">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
