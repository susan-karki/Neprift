import React, { useEffect, useState } from "react";
import "./SellerOrders.css";
import API from "../../http/API";
import { toast } from "react-toastify";

const SellerOrders = () => {
  const sellerId = localStorage.getItem("userId");

  const [orders, setOrders] = useState({});
  const [statusMap, setStatusMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!sellerId) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/orders/${sellerId}`);
        const data = res.data || [];

        const grouped = {};
        data.forEach((item) => {
          const oid = item.orderItem.orderId;
          if (!grouped[oid]) grouped[oid] = [];
          grouped[oid].push(item);
        });

        setOrders(grouped);

        const initialStatus = {};
        Object.keys(grouped).forEach((oid) => {
          initialStatus[oid] =
            grouped[oid][0]?.orderItem?.status || "PENDING";
        });
        setStatusMap(initialStatus);

      } catch (err) {
        console.error(err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [sellerId]);

  const updateOrderStatus = async (orderId) => {
    const newStatus = statusMap[orderId];

    try {
      await API.put(`/orders/change-status/${orderId}`, {
        status: newStatus,
      });

      toast.success(`Status updated to ${newStatus}`);

      setOrders((prev) => {
        const updated = { ...prev };
        updated[orderId] = updated[orderId].map((item) => ({
          ...item,
          orderItem: { ...item.orderItem, status: newStatus },
        }));
        return updated;
      });
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="sellerOrders-error">{error}</p>;
  if (Object.keys(orders).length === 0) return <p>No orders found</p>;

  return (
    <div className="sellerOrders-wrapper">
      <h2>My Orders</h2>

      {Object.keys(orders).map((orderId) => (
        <div key={orderId} className="order-card">

          {orders[orderId].map((item) => (
            <div key={item.orderItem.id} className="order-row">
              <img
                src={item.product.imagePath}
                alt={item.product.name}
                className="order-image"
              />

              <div className="order-info">
                <p><strong>{item.product.name}</strong></p>
                <p>Qty: {item.orderItem.quantity}</p>
                <p>Price: Rs.{item.orderItem.price}</p>
              </div>
            </div>
          ))}

          <div className="order-update">
            <select
              value={statusMap[orderId]}
              onChange={(e) =>
                setStatusMap({
                  ...statusMap,
                  [orderId]: e.target.value,
                })
              }
            >
              <option value="PENDING">PENDING</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>

            <button
              className="update-btn"
              onClick={() => updateOrderStatus(orderId)}
            >
              Update Status
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default SellerOrders;
