// import React, { useEffect, useState } from "react";
// import "./SellerOrders.css";

// const SellerOrders = () => {
//   const sellerId = "seller_001"; // replace with auth later
//   const [orders, setOrders] = useState([]);
//   const [toast, setToast] = useState({ show: false, message: "", type: "" });

//   useEffect(() => {
//     const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(allOrders.filter(o => o.sellerId === sellerId));
//   }, []);

//   const showToast = (message, type) => {
//     setToast({ show: true, message, type });
//     setTimeout(() => setToast({ show: false, message: "", type: "" }), 2500);
//   };

//   const updateStatus = (orderId, status) => {
//     const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     const updated = allOrders.map(order =>
//       order.id === orderId ? { ...order, status } : order
//     );
//     localStorage.setItem("orders", JSON.stringify(updated));
//     setOrders(updated.filter(o => o.sellerId === sellerId));
//     showToast(`Order ${status}`, "success");
//   };

//   return (
  
//       <div className="seller-orders small-table">
//         <h2>Seller Orders</h2>

//         {toast.show && (
//           <div className={`seller-toast ${toast.type}`}>{toast.message}</div>
//         )}

//         {orders.length === 0 ? (
//           <p>No orders yet</p>
//         ) : (
//           <table className="compact-table">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Buyer</th>
//                 <th>Product</th>
//                 <th>Qty</th>
//                 <th>Total</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map(order => (
//                 <tr key={order.id}>
//                   <td data-label="Order ID">{order.id}</td>
//                   <td data-label="Buyer">{order.buyerName}</td>
//                   <td data-label="Product">{order.productName}</td>
//                   <td data-label="Qty">{order.quantity}</td>
//                   <td data-label="Total">₹{order.total}</td>
//                   <td data-label="Status">{order.status}</td>
//                   <td data-label="Action">
//                     <button
//                       className="seller-btn seller-accept"
//                       onClick={() => updateStatus(order.id, "Accepted")}
//                     >Accept</button>
//                     <button
//                       className="seller-btn seller-ship"
//                       onClick={() => updateStatus(order.id, "Shipped")}
//                     >Ship</button>
//                     <button
//                       className="seller-btn seller-cancel"
//                       onClick={() => updateStatus(order.id, "Cancelled")}
//                     >Cancel</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//   );
// };

// export default SellerOrders;





//new 



// import React, { useEffect, useState } from "react";
// import "./SellerOrders.css";
// import API from "../../http/API";

// const SellerOrders = () => {
//   const userId = localStorage.getItem("userId"); // logged-in user
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!userId) {
//       setError("User not logged in");
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await API.get(`/orders/user/${userId}`);
//         setOrders(res.data || []);
//       } catch (err) {
//         console.error("Failed to fetch orders", err);
//         setError("Failed to load orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

//   return (
//     <div className="seller-orders small-table">
//       <h2>Orders</h2>

//       {loading && <p>Loading orders...</p>}
//       {error && <p className="error-text">{error}</p>}

//       {!loading && orders.length === 0 && <p>No orders found</p>}

//       {!loading && orders.length > 0 && (
//         <table className="compact-table">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Date</th>
//               <th>Total Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td data-label="Order ID">{order.id}</td>
//                 <td data-label="Date">
//                   {order.createdAt
//                     ? new Date(order.createdAt).toLocaleDateString()
//                     : "-"}
//                 </td>
//                 <td data-label="Total">₹{order.totalAmount}</td>
//                 <td data-label="Status">{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default SellerOrders;



// import React, { useEffect, useState } from "react";
// import "./SellerOrders.css";
// import API from "../../http/API";

// const SellerOrders = () => {
//   const userId = localStorage.getItem("userId"); // Logged-in user
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!userId) {
//       setError("User not logged in");
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         setLoading(true);
//         const res = await API.get(`/api/orders/${sellerId}`);
//         setOrders(res.data || []);
//       } catch (err) {
//         console.error("Failed to fetch orders", err);
//         setError("Failed to load orders ❌");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

//   return (
//     <div className="seller-orders small-table">
//       <h2>My Orders</h2>

//       {loading && <p>Loading orders...</p>}

//       {!loading && error && <p className="error-text">{error}</p>}

//       {!loading && !error && orders.length === 0 && (
//         <p>No orders found</p>
//       )}

//       {!loading && !error && orders.length > 0 && (
//         <table className="compact-table">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Date</th>
//               <th>Total Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td data-label="Order ID">{order.id}</td>
//                 <td data-label="Date">
//                   {order.createdAt
//                     ? new Date(order.createdAt).toLocaleDateString()
//                     : "-"}
//                 </td>
//                 <td data-label="Total">₹{order.totalAmount}</td>
//                 <td data-label="Status">{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default SellerOrders;








//latest




// import React, { useEffect, useState } from "react";
// import "./SellerOrders.css";
// import API from "../../http/API";
// import { toast } from "react-toastify";

// const SellerOrders = () => {
//   const sellerId = localStorage.getItem("userId");

//   const [orders, setOrders] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!sellerId) {
//       setError("User not logged in");
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         setLoading(true);

//         const res = await API.get(`/orders/${sellerId}`);
//         const data = res.data || [];

//         // Group items by orderId
//         const groupedOrders = {};
//         data.forEach((item) => {
//           const oid = item.orderItem.orderId;
//           if (!groupedOrders[oid]) groupedOrders[oid] = [];
//           groupedOrders[oid].push(item);
//         });

//         setOrders(groupedOrders);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load orders ❌");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [sellerId]);

//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       await API.put(`/orders/update-status/${orderId}`, { status: newStatus });

//       toast.success(`Order #${orderId} status updated to ${newStatus} ✅`);

//       // update UI instantly
//       setOrders((prev) => ({
//         ...prev,
//         [orderId]: prev[orderId].map((item) => ({
//           ...item,
//           orderItem: {
//             ...item.orderItem,
//             status: newStatus,
//           },
//         })),
//       }));
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to update status ❌");
//     }
//   };

//   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p className="sellerOrders-error">{error}</p>;
//   if (!orders || Object.keys(orders).length === 0)
//     return <p>No orders found</p>;

//   return (
//     <div className="sellerOrders-wrapper">
//       <h2>My Orders</h2>

//       {Object.keys(orders).map((orderId) => {
//         const items = orders[orderId];

//         const totalAmount = items.reduce(
//           (sum, i) => sum + i.orderItem.price * i.orderItem.quantity,
//           0
//         );

//         const currentStatus =
//           items[0]?.orderItem?.status || "Pending";

//         return (
//           <div key={orderId} className="order-card">
//             <h3>Order #{orderId}</h3>

//             <div className="order-items">
//               {items.map((item) => (
//                 <div key={item.orderItem.id} className="order-item">
//                   <img
//                     src={item.product.imagePath}
//                     alt={item.product.name}
//                     className="order-item-image"
//                   />

//                   <div className="order-item-details">
//                     <p>
//                       <strong>{item.product.name}</strong>
//                     </p>
//                     <p>Quantity: {item.orderItem.quantity}</p>
//                     <p>Price: Rs.{item.orderItem.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="order-summary">
//               <p>
//                 <strong>Total Amount:</strong> Rs.{totalAmount}
//               </p>

//               <label>Status: </label>
//               <select
//                 value={currentStatus}
//                 onChange={(e) =>
//                   handleStatusChange(orderId, e.target.value)
//                 }
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SellerOrders;






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
        setError("Failed to load orders ❌");
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
      toast.error("Failed to update status ❌");
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
