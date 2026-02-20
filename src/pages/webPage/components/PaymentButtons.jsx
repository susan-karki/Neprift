// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./PaymentButtons.css";
// import API from "../../../http/API";

// const PaymentButtons = () => {
//   const navigate = useNavigate();

//   const handleCODPayment = async () => {
//     try {
//       const orderId = localStorage.getItem("orderId");
//       const amount = localStorage.getItem("totalAmount");

//       const payload = {
//         paymentDate: new Date().toISOString(),
//         amount: parseFloat(amount),
//         paymentMethod: "COD",
//         status: "PENDING",
//         orderId: parseInt(orderId),
//       };

//       const response = await fetch("/payment/add-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         alert("COD Payment added successfully");
//         navigate("/");
//       } else {
//         alert("Payment failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="payBtn-big-container">
//       <h2>Choose Your Payment Method</h2>

//       <div className="payBtn-wrapper">
//         <div className="payBtn-card">
//           <h3>Cash on Delivery</h3>
//           <button
//             className="payBtn-cod-btn"
//             onClick={handleCODPayment}
//           >
//             Pay with COD
//           </button>
//         </div>

//         <div className="payBtn-card">
//           <h3>Pay via eSewa</h3>
//           <button
//             className="payBtn-esewa-btn"
//             onClick={() => navigate("/payment")}
//           >
//             Pay with eSewa
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentButtons;





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./PaymentButtons.css";
// import API from "../../../http/API";

// const PaymentButtons = () => {
//   const navigate = useNavigate();

//   const handleCODPayment = async () => {
//     try {
//       const orderId = localStorage.getItem("orderId");
//       const amount = localStorage.getItem("totalAmount");

//       const payload = {
//         paymentDate: new Date().toISOString(),
//         amount: parseFloat(amount),
//         paymentMethod: "COD",
//         status: "CASH",
//         orderId: parseInt(orderId),
//       };
//       const response = await API.post("/payment/add-payment", payload);

//       if (response.status === 200 || response.status === 201) {
//         alert("COD Payment added successfully");
//         navigate("/");
//       } else {
//         alert("Payment failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="payBtn-big-container">
//       <h2>Choose Your Payment Method</h2>

//       <div className="payBtn-wrapper">
//         <div className="payBtn-card">
//           <h3>Cash on Delivery</h3>
//           <button
//             className="payBtn-cod-btn"
//             onClick={handleCODPayment}
//           >
//             Pay with COD
//           </button>
//         </div>

//         <div className="payBtn-card">
//           <h3>Pay via eSewa</h3>
//           <button
//             className="payBtn-esewa-btn"
//             onClick={() => navigate("/payment")}
//           >
//             Pay with eSewa
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentButtons;








import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./PaymentButtons.css";
import API from "../../../http/API";

const PaymentButtons = () => {
  const navigate = useNavigate();

  const handleCODPayment = async () => {
    try {
      const orderId = localStorage.getItem("orderId");
      const amount = localStorage.getItem("totalAmount");
      if (!orderId || !amount) {
        toast.warning("Order information missing");
        return;
      }

      const payload = {
        paymentDate: new Date().toISOString(),
        amount: parseFloat(amount),
        paymentMethod: "COD",
        status: "CASH",
        orderId: parseInt(orderId),
      };

      const response = await API.post("/payment/add-payment", payload);

      if (response.status === 200 || response.status === 201) {
        toast.success("COD Payment added successfully", {
          position: "top-right",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Payment failed");
      }

    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
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