import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${baseUrl}/auth/forget-password`,
        { email }
      );

      if (
        res.status === 200 ||
        res.data?.message?.toLowerCase().includes("success")
      ) {
        toast.success("📧 Password reset link sent to your email");
        setEmail("");
        setTimeout(() => navigate("/auth/login"), 2500);
      } else {
        toast.error(res.data?.message || "Request failed");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Server error, try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <form className="forgot-box" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p>Enter your registered email</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <span
          className="back-login"
          onClick={() => navigate("/auth/login")}
        >
          Back to Login
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
