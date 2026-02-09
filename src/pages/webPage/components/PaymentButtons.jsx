import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentButtons.css";

const PaymentButtons = () => {
  const navigate = useNavigate();

  const handleCODPayment = async () => {
    try {
      const orderId = localStorage.getItem("orderId");
      const amount = localStorage.getItem("totalAmount");

      const payload = {
        paymentDate: new Date().toISOString(),
        amount: parseFloat(amount),
        paymentMethod: "COD",
        status: "PENDING",
        orderId: parseInt(orderId),
      };

      const response = await fetch("/payment/add-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("COD Payment added successfully");
        navigate("/");
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="payBtn-big-container">
      <h2>Choose Your Payment Method</h2>

      <div className="payBtn-wrapper">
        <div className="payBtn-card">
          <h3>Cash on Delivery</h3>
          <button
            className="payBtn-cod-btn"
            onClick={handleCODPayment}
          >
            Pay with COD
          </button>
        </div>

        <div className="payBtn-card">
          <h3>Pay via eSewa</h3>
          <button
            className="payBtn-esewa-btn"
            onClick={() => navigate("/payment")}
          >
            Pay with eSewa
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentButtons;
