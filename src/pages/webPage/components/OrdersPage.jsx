import React, { useEffect, useState } from "react";
import "./OrdersPage.css";
import Layout from "../../../components/layout/Layout";
import API from "../../../http/API";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false)

  const token = localStorage.getItem("token1");
  const isLoggedIn = () => !!token;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!isLoggedIn()) {
        toast.warning("Please login first");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const userId = localStorage.getItem("userId");

        const res = await API.get(`/orders/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(res.data.responseBody || []);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);
  const handleCODPayment = async (orderId, amount) => {
    if (!isLoggedIn()) {
      toast.warning("Please login first");
      return;
    }

    try {
      setPaymentLoading(true);

      const payload = {
        paymentDate: new Date().toISOString(),
        amount: amount,
        paymentMethod: "COD",
        status: "SUCCESS",
        orderId: orderId,
      };

      console.log("Calling payment API with payload:", payload); 

      const res = await API.post("/payment/add-payment", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Payment response:", res); 

      if (
        res.status === 200 ||
        res.data?.responseMessage?.toLowerCase().includes("success")
      ) {
        toast.success("Payment recorded COD");

        setOrders((prev) =>
          prev.map((o) =>
            o.id === orderId ? { ...o, status: "PAID COD" } : o
          )
        );
      } else {
        toast.error(res.data?.responseMessage || "Payment failed");
      }
    } catch (err) {
      console.error("Payment error:", err);
      toast.error(
        err.response?.data?.responseMessage || "Payment failed "
      );
    } finally {
      setPaymentLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="custOrd-wrapper">
          <p className="custOrd-empty">Loading your orders...</p>
        </div>
      </Layout>
    );
  }

  if (orders.length === 0) {
    return (
      <Layout>
        <div className="custOrd-wrapper">
          <p className="custOrd-empty">You have not placed any orders yet.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="custOrd-wrapper">
        <h2>Your Orders</h2>
        {orders.map((order) => {
          const totalPrice = order.products.reduce(
            (total, item) => total + item.price * item.qty,
            0
          );

          return (
            <div className="custOrd-order-card" key={order.id}>
              <h3>Order #{order.id}</h3>
              <p>Status: {order.status}</p>

              <div className="custOrd-products">
                {order.products.map((item) => (
                  <div className="custOrd-product" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="custOrd-details">
                      <h4>{item.name}</h4>
                      <p>Price: Rs.{item.price}</p>
                      <p>Quantity: {item.qty}</p>
                      <p>Subtotal: Rs.{item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="custOrd-order-total">
                <h4>Total: Rs.{totalPrice}</h4>
              </div>
              {order.status !== "PAID (COD)" && (
                <button
                  className="custOrd-pay-btn"
                  type="button"
                  disabled={paymentLoading}
                  onClick={() => handleCODPayment(order.id, totalPrice)}
                >
                  {paymentLoading ? "Processing..." : "Pay Cash on Delivery"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default OrdersPage;
