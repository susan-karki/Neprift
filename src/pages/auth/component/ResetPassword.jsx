import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResetPassword.css"; 

const ResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const email = state?.email;
  const token = localStorage.getItem("resetToken");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${baseUrl}/reset-password`,
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("resetToken");
      toast.success("Password reset successful");
      navigate("/auth/login");

    } catch (err) {
      toast.error(err?.response?.data?.responseMessage || "Reset failed");
    }
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleReset}>
        <h2 className="reset-password-title">Reset Password</h2>

        <label className="reset-password-label">
          New Password
          <input
            type="password"
            className="reset-password-input"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="reset-password-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
