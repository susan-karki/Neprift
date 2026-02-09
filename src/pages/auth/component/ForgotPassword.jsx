import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; 

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

