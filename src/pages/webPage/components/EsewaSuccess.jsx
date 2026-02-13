// import React, { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import API from "../../../http/API";

// const EsewaSuccess = () => {
//   const navigate = useNavigate();
//   const [params] = useSearchParams();

//   useEffect(() => {
//     const savePayment = async () => {
//       try {
//         const orderId = params.get("orderId");
//         const amount = params.get("amount");

//         const payload = {
//           paymentDate: new Date().toISOString(),
//           amount: parseFloat(amount),
//           paymentMethod: "ESEWA",
//           status: "SUCCESS",
//           orderId: parseInt(orderId),
//         };

//         await API.post("/payment/add-payment", payload);

//         alert("Payment successful");
//         navigate("/");
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     savePayment();
//   }, []);

//   return <h2>Payment Success Processing...</h2>;
// };

// export default EsewaSuccess;



import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../../http/API";
import { toast } from "react-toastify";
import "./EsewaSuccess.css";

const EsewaSuccess = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const hasCalled = useRef(false);

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    const savePayment = async () => {
      try {
        const orderId = params.get("orderId");
        const amount = params.get("amount");

        const payload = {
          paymentDate: new Date().toISOString(),
          amount: parseFloat(amount),
          paymentMethod: "ESEWA",
          status: "SUCCESS",
          orderId: parseInt(orderId),
        };

        await API.post("/payment/add-payment", payload);

        toast.success("Payment successful");
        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error("Payment saving failed");
      }
    };

    savePayment();
  }, [params, navigate]);

  return (
    <div className="esewa-loader-container">
      <div className="loader"></div>
      <p>Verifying your payment...</p>
    </div>
  );
};

export default EsewaSuccess;

