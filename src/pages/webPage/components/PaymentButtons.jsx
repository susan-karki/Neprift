import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./PaymentButtons.css";

const PaymentButtons = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="payBtn-big-container">
      <h2>Choose Your Payment Method</h2>
      <div className="payBtn-wrapper">
        <div className="payBtn-card">
          <h3>Cash on Delivery</h3>
          <button
            className="payBtn-cod-btn"
            onClick={() => navigate("/")} // ✅ navigate to home
          >
            Pay with COD
          </button>
        </div>

        <div className="payBtn-card">
          <h3>Pay via eSewa</h3>
          <button
            className="payBtn-esewa-btn"
            onClick={() => navigate("/payment")} // ✅ navigate to /payment
          >
            Pay with eSewa
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentButtons;
